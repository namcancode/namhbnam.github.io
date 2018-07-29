gulp = require 'gulp'
gutil = require 'gulp-util'
path = require 'path'
fs = require 'fs'
del = require 'del'
template = require 'gulp-template'
runSequence = require 'run-sequence'
{execSync} = require 'child_process'
plist = require 'plist'
peditor = require 'gulp-plist'
request = require 'sync-request'
{parseString} = require 'xml2js'
rename = require 'gulp-rename'
sleep = require 'sleep'


production = process.argv.indexOf("--prod") >- 1;

derivedDataPath = "DerivedData"
buildLocation = "#{derivedDataPath}/Build/Products/Release"
buildPath = path.join(__dirname, buildLocation)
appName = 'CraftManager'
frontendBasePath = path.join(__dirname, '../craft-manager-frontend')

config =
    buildPath: buildPath
    appName: appName
    distPath: path.join(__dirname, 'dist')
    appCastPath: path.join(__dirname, 'appcast.xml')
    appCastNoDsaPath: path.join(__dirname, 'appcastNoDsa.xml')
    appCastBuildPath: path.join(buildPath, 'appcast.xml')
    appCastNextBuildPath: path.join(buildPath, 'appcast-next.xml')
    appProjectPath: path.join(__dirname, appName)
    infoPlistPath: path.join(__dirname, "#{appName}/Info.plist")
    helperProjectPath: path.join(__dirname, "CraftManagerHelper/CraftManagerHelper")
    helperInfoPlistPath: path.join(__dirname, "CraftManagerHelper/CraftManagerHelper/Info.plist")
    zipPath: path.join(buildPath, "#{appName}.zip")
    appPath: path.join(buildPath, "#{appName}.app")
    pemPath: path.join(__dirname, 'dsa_priv.pem')
    signUpdate: path.join(__dirname, 'sparkle-bin/sign_update')
    #developerSignature: "Developer ID Application: InVisionApp Inc."
    #developerSignature: "Developer ID Application: Tomas Hanacek"
    developerSignature: "F0BBDF27893B7F532BF16731A2D5FD1773F2B97F"

config.craftUrlProd="https://craft-assets.invisionapp.com/CraftManager/production/"
config.craftUrlBeta="https://craft-assets.invisionapp.com/CraftManager/beta/"

amazonBucketProdOld="www-assets.invisionapp.com/labs/craft/manager/"
amazonBucketBetaOld="www-assets.invisionapp.com/labs/craft/manager/manager-beta/"

amazonBucketProd="craft-assets.invisionapp.com/CraftManager/production/"
amazonBucketBeta="craft-assets.invisionapp.com/CraftManager/beta/"

if production
    config.production = true
    config.amazonBucket = amazonBucketProd
    config.amazonBucketOld = amazonBucketProdOld
    config.craftUrl = config.craftUrlProd
    config.env = "production"
else
    config.production = false
    config.amazonBucket = amazonBucketBeta
    config.amazonBucketOld = amazonBucketBetaOld
    config.craftUrl = config.craftUrlBeta
    config.env = "beta"

config.craftUrlNext = config.craftUrl + "next/"
config.amazonBucketNext = config.amazonBucket + "next/"

console.log("Production: '#{config.production}'")
console.log("Amazon bucket: '#{config.amazonBucket}'")
console.log("Craft URL: '#{config.craftUrl}'")

useEnvman = execSync("echo `which envman`")
useEnvman = "#{useEnvman}".replace /\s+$/g, ""
useEnvman = useEnvman.length > 0

if useEnvman
  console.log "Use envman"
else
  console.log "No envman"

envSet = (key, value) ->
  cmd = "envman add --key #{key} --value '#{value}'"
  if useEnvman
    execSync(cmd)
  else
    console.log(cmd)

envSet('IN_IS_PRODUCTION', "#{config.production}")
if production
  envSet('IN_CHANNEL_NAME', "Production")
else
  envSet('IN_CHANNEL_NAME', "Beta")

checkSketch = () ->
    sketchPath ='/Applications/Sketch.app'
    try
      fs.accessSync(sketchPath)
      return true
    catch error
      return false

sketchInstalled = checkSketch() ? 'yes': 'no'
console.log("Sketch Installed: '#{sketchInstalled}'")

gulp.task 'clean', ->
    managerDerivedDataPath = path.join(__dirname, derivedDataPath)
    del([config.distPath, config.zipPath, managerDerivedDataPath], force: true)

gulp.task 'build-manager', ->
    cmd = "xcodebuild -workspace CraftManager.xcworkspace -scheme CraftManager -derivedDataPath #{derivedDataPath} CODE_SIGN_IDENTITY='#{config.developerSignature}' -configuration Release build"
    if process.argv.indexOf("--nooutput") >- 1
      console.log "No output"
      execSync(cmd)
    else
      execSync(cmd, { stdio: [0, 1, 2] })

    process.chdir(config.buildPath)
    execSync("zip -r -y #{config.appName}.zip #{config.appName}.app")

gulp.task 'generate-appcast', ->
    data = plist.parse(fs.readFileSync(config.infoPlistPath, 'utf8'))
    dsaSignature = execSync("#{config.signUpdate} #{config.zipPath} #{config.pemPath}").toString().replace(/\r?\n|\r/g, "")
    gulp.src(config.appCastPath)
        .pipe(template({
            buildVersion: data.CFBundleVersion
            shortVersionString: data.CFBundleShortVersionString
            pubDate: new Date().toUTCString()
            zipLength: fs.statSync(config.zipPath).size
            craftUrl: config.craftUrl
            dsaSignature: dsaSignature
            appcastURL: "#{config.craftUrl}appcast.xml"
            releaseNotes: "#{config.craftUrl}release-notes.html"
        }))
        .pipe(gulp.dest(config.buildPath))

    gulp.src(config.appCastPath)
        .pipe(rename({
            suffix: "-next",
        }))
        .pipe(template({
            buildVersion: data.CFBundleVersion
            shortVersionString: data.CFBundleShortVersionString
            pubDate: new Date().toUTCString()
            zipLength: fs.statSync(config.zipPath).size
            craftUrl: config.craftUrlNext
            dsaSignature: dsaSignature
            appcastURL: "#{config.craftUrl}next/appcast-next.xml"
            releaseNotes: "#{config.craftUrl}release-notes.html"
        }))
        .pipe(gulp.dest(config.buildPath))

gulp.task 'set-appcast-url', ->
    gulp.src(config.infoPlistPath)
        .pipe(peditor({
            SUFeedURL: "#{config.craftUrl}appcast.xml"
            SUFeedURLProd: "#{config.craftUrlProd}appcast.xml"
            SUFeedURLBeta: "#{config.craftUrlBeta}appcast.xml"
            SUPublicDSAKeyFile: 'dsa_pub.pem'
        }))
        .pipe(gulp.dest(config.appProjectPath))

gulp.task 'upload-to-s3', ->
    if process.argv.indexOf("--noupload") >- 1
        console.log "No upload"
        return
    execSync("aws s3 cp #{config.distPath}/CraftManager.zip s3://#{config.amazonBucketNext}CraftManager.zip --acl public-read", { stdio: [0, 1, 2] })
    execSync("aws s3 cp #{config.distPath}/appcast.xml s3://#{config.amazonBucketNext}appcast.xml --acl public-read", { stdio: [0, 1, 2] })
    execSync("aws s3 cp #{config.distPath}/appcast-next.xml s3://#{config.amazonBucketNext}appcast-next.xml --acl public-read", { stdio: [0, 1, 2] })

gulp.task 'copy-to-dist', ->
    gulp.src([config.zipPath, config.appCastBuildPath, config.appCastNextBuildPath])
        .pipe(gulp.dest(config.distPath))

gulp.task 'default', (callback) ->
    runSequence(
        'clean',
        'set-appcast-url',
        'build-manager',
        'generate-appcast',
        'copy-to-dist',
        callback)

#this task increments the build and version number from the live app cast
gulp.task 'increment-version-app', (callback) ->
    if process.argv.indexOf("--noincrement") >- 1
        console.log "No increment app"
        return
    getNextVersion (buildNumber, versionNumber) ->
        console.log("Next version #{versionNumber} (#{buildNumber})")

        config.versionNumber = versionNumber
        config.buildNumber = buildNumber
        gulp.src(config.infoPlistPath)
            .pipe(peditor({
                CFBundleVersion: buildNumber
                CFBundleShortVersionString: versionNumber
            }))
            .pipe(gulp.dest(config.appProjectPath)).on('end', callback)

gulp.task 'increment-version-helper', (callback) ->
    if process.argv.indexOf("--noincrement") >- 1
        console.log "No increment helper"
        return
    getNextVersion (buildNumber, versionNumber) ->
        console.log("Next version #{versionNumber} (#{buildNumber})")

        gulp.src(config.helperInfoPlistPath)
            .pipe(peditor({
                CFBundleVersion: buildNumber
                CFBundleShortVersionString: versionNumber
            }))
            .pipe(gulp.dest(config.helperProjectPath)).on('end', callback)

gulp.task 'increment-version', (callback) ->
    runSequence(
        'increment-version-app',
        'increment-version-helper',
        callback)

gulp.task 'backup-s3-version', ->
    if process.argv.indexOf("--nobackup") >- 1
        console.log "No backup"
        return

    uri = "https://s3.amazonaws.com/#{config.amazonBucket}appcast.xml"
    getVersion uri, (err, buildNumber, versionNumber) ->
        if err
            throw err
        fromPath="s3://#{config.amazonBucket}"
        destPath="s3://#{config.amazonBucket}versions/#{versionNumber}-#{buildNumber}/"
        console.log("From Path: #{fromPath}")
        console.log("Dest Path: #{destPath}")

        execSync("aws s3 cp #{fromPath}appcast.xml #{destPath}appcast.xml", { stdio: [0, 1, 2] })
        execSync("aws s3 cp #{fromPath}CraftManager.zip #{destPath}CraftManager.zip", { stdio: [0, 1, 2] })

gulp.task 'backup-previous-version', ->
    if process.argv.indexOf("--nobackupprev") >- 1
        console.log "No backup"
        return

    fromPath="s3://#{config.amazonBucket}"
    destPath="s3://#{config.amazonBucket}previous/"
    console.log("From Path: #{fromPath}")
    console.log("Dest Path: #{destPath}")

    execSync("aws s3 cp #{fromPath}appcast.xml #{destPath}appcast.xml", { stdio: [0, 1, 2] })
    execSync("aws s3 cp #{fromPath}CraftManager.zip #{destPath}CraftManager.zip", { stdio: [0, 1, 2] })

gulp.task 'move-next-version', ->
    if process.argv.indexOf("--nonext") >- 1
        console.log "No move from next"
        return
    moveToLiveFolder("next")

gulp.task 'move-previous-version', ->
    if process.argv.indexOf("--noprevious") >- 1
        console.log "No move from previous"
        return

    moveToLiveFolder("previous")

gulp.task 'tag-branch', ->
    if process.argv.indexOf("--notag") >- 1
        console.log "No tag"
        return
    
    process.chdir(config.appProjectPath)

    data = plist.parse(fs.readFileSync(config.infoPlistPath, 'utf8'))
    buildNumber = data.CFBundleVersion
    versionNumber = data.CFBundleShortVersionString

    env = config.env

    tag = "#{env}-#{versionNumber}-#{buildNumber}"
    console.log "Tag: #{tag}"

    execSync("git tag #{tag}")
    execSync("git push origin #{tag}")

gulp.task 'commit-branch', ->
    if process.argv.indexOf("--notag") >- 1
        console.log "No branch commit"
        return
    if process.argv.indexOf("--nobranch") >- 1
        console.log "No release branch"
        return
    process.chdir(config.appProjectPath)

    data = plist.parse(fs.readFileSync(config.infoPlistPath, 'utf8'))
    buildNumber = data.CFBundleVersion
    versionNumber = data.CFBundleShortVersionString

    env = config.env

    execSync("git add -A")
    execSync("git commit -m 'Changes for #{env} #{versionNumber}-#{buildNumber}'")
    execSync("git push origin HEAD")

gulp.task 'what-version', ->
    process.chdir(config.appProjectPath)

    data = plist.parse(fs.readFileSync(config.infoPlistPath, 'utf8'))
    buildNumber = data.CFBundleVersion
    versionNumber = data.CFBundleShortVersionString

    console.log "Current Version: #{versionNumber} (#{buildNumber})"
    envSet('IN_BUILD', "#{buildNumber}")
    envSet('IN_VERSION', "#{versionNumber}")
    envSet('IN_VERSION_BUILD', "#{versionNumber} (#{buildNumber})")

gulp.task 'create-release-branch', ->
    if process.argv.indexOf("--notag") >- 1
        console.log "No release branch"
        return
    if process.argv.indexOf("--nobranch") >- 1
        console.log "No release branch"
        return

    env = config.env
    getNextVersion (buildNumber, versionNumber) ->
        branch = "branch-#{env}-#{versionNumber}-#{buildNumber}"
        console.log("Branch: #{branch}")
        execSync("git checkout -b #{branch}")

gulp.task 'cloudfront-invalidation-next', ->
    if process.argv.indexOf("--noinvalidate") >- 1
        console.log "No cloudfront invalidation"
        return

    env = config.env
    execSync("aws configure set preview.cloudfront true")
    execSync("aws cloudfront create-invalidation --distribution-id E9MTE3E9ESDLE --paths /CraftManager/#{env}/next/appcast.xml /CraftManager/#{env}/next/appcast-next.xml /CraftManager/#{env}/next/CraftManager.zip", { stdio: [0, 1, 2] })

gulp.task 'cloudfront-invalidation', ->
    if process.argv.indexOf("--noinvalidate") >- 1
        console.log "No cloudfront invalidation"
        return

    env = config.env
    execSync("aws configure set preview.cloudfront true")
    execSync("aws cloudfront create-invalidation --distribution-id E9MTE3E9ESDLE --paths /CraftManager/#{env}/appcast.xml /CraftManager/#{env}/CraftManager.zip /CraftManager/#{env}/CraftInstaller.zip", { stdio: [0, 1, 2] })

gulp.task 'switch-to-release-branch', ->
    if process.argv.indexOf("--notag") >- 1
        console.log "Do not switch to release branch"
        return
    env = config.env
    uri = "https://s3.amazonaws.com/#{config.amazonBucketNext}appcast.xml"
    getVersion uri, (err, buildNumber, versionNumber) ->
        if err
            throw err
        branch = "branch-#{env}-#{versionNumber}-#{buildNumber}"
        execSync("git fetch")
        execSync("git checkout #{branch}")
        currentBranch = execSync("git rev-parse --abbrev-ref HEAD")
        currentBranch = "#{currentBranch}".replace /^\s+|\s+$/g, ""
        if branch == currentBranch
            console.log "Current Branch: #{currentBranch}"
        else
            console.log "Expected Branch: #{branch}"
            console.log "Current Branch: #{currentBranch}"
            throw new Error("Did not switch to branch")

gulp.task 'pull-request', ->
    if process.argv.indexOf("--notag") >- 1
        console.log "No tag"
        return
    if process.argv.indexOf("--nopullrequest") >- 1
        console.log "No Pull Request"
        return

    env = config.env
    data = plist.parse(fs.readFileSync(config.infoPlistPath, 'utf8'))
    buildVersion = data.CFBundleVersion
    shortVersionString = data.CFBundleShortVersionString

    msg = "#{env} release for #{shortVersionString}-#{buildVersion}"

    pullRequest = execSync("hub pull-request -b master -m '#{msg}'")
    if process.argv.indexOf("--set-pr-env") != -1
        envSet('IN_PULL_REQUEST', "#{pullRequest}")

gulp.task 'get-urls', ->
    console.log("S3 URL:    https://s3.amazonaws.com/#{config.amazonBucketNext}CraftManager.zip")
    console.log("Craft URL: #{config.craftUrlNext}CraftManager.zip")
    envSet('IN_ZIP', "#{config.craftUrl}CraftManager.zip")
    envSet('IN_ZIP_NEXT', "#{config.craftUrlNext}CraftManager.zip")
    envSet('IN_ZIP_S3', "https://s3.amazonaws.com/#{config.amazonBucket}CraftManager.zip")
    envSet('IN_ZIP_S3_NEXT', "https://s3.amazonaws.com/#{config.amazonBucketNext}CraftManager.zip")

gulp.task 'test-update', ->
    if process.argv.indexOf("--notestupdate") >- 1
        console.log "No test update"
        return

    output = "~/Downloads/CraftManager.zip"
    appLocation = "/Applications/CraftManager.app"

    if process.argv.indexOf("--testupdatecached") >- 1
        oldVersion = "https://s3.amazonaws.com/craft-assets.invisionapp.com/CraftManager/test/CraftManager.zip"
        console.log("Use cached version")
    else
        oldVersion = "https://s3.amazonaws.com/#{config.amazonBucket}CraftManager.zip"
        console.log("Use live version")

    try execSync("killall -9 CraftManager")
    execSync("rm -rf #{output}")
    execSync("rm -rf #{appLocation}")
    execSync("curl -o #{output} #{oldVersion}")
    execSync("unzip #{output} -d /Applications/")
    execSync("open #{appLocation}")
    if config.production
        next = "prodNext"
    else
        next = "betaNext"

    execSync("open craft://invisionapp.com/silentUpdate?feed=#{next}")

    # check if update succeeded
    uri = "https://s3.amazonaws.com/#{config.amazonBucketNext}appcast.xml"
    appLocation = "/Applications/CraftManager.app/Contents/Info.plist"

    getVersion uri, (err, buildNumber, versionNumber) ->
        if err
            throw err

        success = false
        build = ""
        version = ""
        count = 30
        for ii in [1...count]
            console.log("Wait for update... #{ii} of #{count}")
            data = plist.parse(fs.readFileSync(appLocation, 'utf8'))
            build = data.CFBundleVersion
            version = data.CFBundleShortVersionString

            if build == buildNumber && version == versionNumber
                success = true
                break
            sleep.sleep(10) # wait for update

        if success == false
            console.log("Update failed!")
            console.log("Installed version: #{version} (#{build})")
            console.log("Next version: #{versionNumber} (#{buildNumber})")
            if build != buildNumber
                console.log("Build did equal")
            if version != versionNumber
                console.log("Version did equal")
            throw "Update failed"
        else
            console.log("Update succeded!")

gulp.task 'test', ->
    for i in [0...10]
        console.log("Hello")

gulp.task 'deploy', (callback) ->
    runSequence(
        'create-release-branch',
        'increment-version',
        'default',
        'upload-to-s3',
        'commit-branch',
        'cloudfront-invalidation-next',
        'what-version',
        'get-urls',
            callback)

gulp.task 'go-live', (callback) ->
    runSequence(
        'switch-to-release-branch',
        'test-update',
        'backup-s3-version',
        'backup-previous-version',
        'move-next-version',
        'backup-s3-version',
        'cloudfront-invalidation',
        'tag-branch',
        'pull-request',
        callback)

gulp.task 'roll-back', (callback) ->
    runSequence(
        'backup-s3-version',
        'move-previous-version',
        'cloudfront-invalidation',
        callback)
        
#this method returns the current live version and build number for the sparcle appcast
getVersion = (uri, callback) ->
    res = request('GET', uri)
    if res.statusCode >= 300
        callback(1, 0, 0)
        return

    parseString res.getBody(), (err, result) ->
        attr = result["rss"]["channel"][0]["item"][0]["enclosure"][0]["$"];
        buildNumber = attr["sparkle:version"]
        versionNumber = attr["sparkle:shortVersionString"]
        callback(err, buildNumber, versionNumber)

getLocalVersion = () ->
    res = request('GET', "https://labslocalhost.com:24679/check")
    if res.statusCode >= 300
        return {}

    return JSON.parse(res.getBody())

incrementVersionNumber = (versionNumber) ->
    versionParts = versionNumber.split('.');
    count = versionParts.length
    if count < 3
        return versionNumben
    versionNumber = versionParts[count-3] + '.' + versionParts[count-2] + '.' + (parseInt(versionParts[count-1]) + 1).toString()
    if config.production == false
        versionNumber = "beta." + versionNumber
    return versionNumber

getNextVersion = (callback) ->
    uriP = "https://s3.amazonaws.com/#{config.amazonBucket}appcast.xml"
    uriN = "https://s3.amazonaws.com/#{config.amazonBucketNext}appcast.xml"
    getVersion uriP, (errP, buildNumberP, versionNumberP) ->
        if errP
            throw errP
        console.log("Live version #{versionNumberP} (#{buildNumberP})")
        envSet('IN_CURRENT_BUILD', "#{buildNumberP}")
        envSet('IN_CURRENT_VERSION', "#{versionNumberP}")
        envSet('IN_CURRENT_VERSION_BUILD', "#{versionNumberP} (#{buildNumberP})")
        getVersion uriN, (errN, buildNumberN, versionNumberN) ->
            if errN
                buildNumberN = buildNumberP
                console.log("No next version")
            else
                console.log("Current Next version #{versionNumberN} (#{buildNumberN})")

            buildNumber = (parseInt(buildNumberN) + 1).toString()
            versionNumber = incrementVersionNumber(versionNumberP)

            envSet('IN_NEXT_BUILD', "#{buildNumberN}")
            envSet('IN_NEXT_VERSION', "#{versionNumberN}")
            envSet('IN_NEXT_VERSION_BUILD', "#{versionNumberN} (#{buildNumberN})")

            envSet('IN_BUILD', "#{buildNumber}")
            envSet('IN_VERSION', "#{versionNumber}")
            envSet('IN_VERSION_BUILD', "#{versionNumber} (#{buildNumber})")

            callback(buildNumber, versionNumber)

moveToLiveFolder = (originFolder) ->
    fromPath="s3://#{config.amazonBucket}#{originFolder}/"
    destPath="s3://#{config.amazonBucket}"
    dest2Path="s3://#{config.amazonBucketOld}"

    console.log("From Path: #{fromPath}")
    console.log("Dest Path: #{destPath}")

    uriP = "https://s3.amazonaws.com/#{config.amazonBucket}#{originFolder}/appcast.xml"
    uriL = "https://s3.amazonaws.com/#{config.amazonBucket}appcast.xml"

    getVersion uriP, (errP, buildNumberP, versionNumberP) ->
        if errP
            throw errP
        getVersion uriL, (errL, buildNumberL, versionNumberL) ->
            if errL
                throw errL

            console.log("Current version  #{versionNumberL} (#{buildNumberL})")
            console.log("Previous version #{versionNumberP} (#{buildNumberP})")

            copyFilesFromSourceToDest(fromPath, destPath)
            copyFilesFromSourceToDest(fromPath, dest2Path)

copyFilesFromSourceToDest = (fromPath, destPath) ->
    execSync("aws s3 cp #{fromPath}appcast.xml #{destPath}appcast.xml --acl public-read", { stdio: [0, 1, 2] })
    execSync("aws s3 cp #{fromPath}CraftManager.zip #{destPath}CraftManager.zip --acl public-read", { stdio: [0, 1, 2] })
    execSync("aws s3 cp #{fromPath}CraftManager.zip #{destPath}CraftInstaller.zip --acl public-read", { stdio: [0, 1, 2] })
