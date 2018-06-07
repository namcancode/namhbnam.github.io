
function identifier() {
  return "com.invisionapp.sketchlauncher";
}

var _scriptPath;

function onRun(context) {
}

function onStartup(context) {
  // log('CESketchLauncher: onStartup');
  NSDistributedNotificationCenter.defaultCenter().postNotificationName_object_("CESketchLauncherOnStartupNotification",identifier());
}

function readOpenDocumentInfo() {
    var configFile = _scriptPath.stringByDeletingLastPathComponent().stringByAppendingPathComponent("CESketchLauncher-openDocument.json")
    var data = NSData.dataWithContentsOfFile(configFile)
    var info = NSJSONSerialization.JSONObjectWithData_options_error_(data, 0, nil);
    return info;
}

function openDocument(context) {
  // log('CESketchLauncher: openDocument');
  // log(context);

  _scriptPath = [NSString stringWithString:context.scriptPath];
  var info = readOpenDocumentInfo();
  // log('CESketchLauncher: info');
  var filePath = info.filePath;

  // log('CESketchLauncher: opening file ' + filePath);

  var document = getOpenedDocumentWithFilePath(filePath)

  if ( ! document) {
    // Use NSDocumentController.openDocument will allow us to open file with current Sketch
    var docController = NSDocumentController.sharedDocumentController()
    var url = NSURL.fileURLWithPath(filePath)
    var doc = docController.openDocumentWithContentsOfURL_display_error_(url, true, nil)
    var success = doc != nil;
    //var success = [[NSWorkspace sharedWorkspace] openFile:filePath];


    if (success) {
      waitForDocument(filePath, function(doc) {
          NSDistributedNotificationCenter.defaultCenter().postNotificationName_object_("CESketchLauncherOpenDocumentSucceedNotification", identifier());
      });
    } else {
      NSDistributedNotificationCenter.defaultCenter().postNotificationName_object_("CESketchLauncherOpenDocumentNotFoundNotification", identifier());
    }

  } else {
    // already opened.
    NSDistributedNotificationCenter.defaultCenter().postNotificationName_object_("CESketchLauncherOpenDocumentSucceedNotification", identifier());
  }

}

var getOpenedDocumentWithFilePath = function(filePath) {
    var documents = NSDocumentController.sharedDocumentController().documents()

    var approvedFileName = filePath;
    var document = nil;
    for (var i = 0; i < documents.count(); i++) {

        var currentDocument = documents[i]
        var currentFileName = currentDocument.fileName()

        if (approvedFileName.isEqualToString(currentFileName)) {
            document = currentDocument;
            break;
        }
    }
    return document;
}

function waitForDocument(filePath, completion) {

  var document = getOpenedDocumentWithFilePath(filePath);
  if ( ! document) {
    coscript.setShouldKeepAround(true)
    coscript.scheduleWithInterval_jsFunction_(1, function() {
        waitForDocument(filePath, completion);
    });
  } else {
    completion(document);
  }
}

// Detach

var layerWithID = function(document, layerID) {
  var layer = document.documentData().layerWithID(layerID)
  if (layer.objectID != layerID) {
      if (layer.isKindOfClass(MSSymbolInstance)) {
          layer = layer.symbolMaster()
      }
  }
  return layer;
}

var detachDocument = function(context) {

    var configFile = [NSString stringWithString:context.scriptPath].stringByDeletingLastPathComponent().stringByAppendingPathComponent("CESymbolDetacher.json");

    var data = NSData.dataWithContentsOfFile(configFile)
    var info = NSJSONSerialization.JSONObjectWithData_options_error_(data, 0, nil);

    var filePath = info.filePath;
    var saveAfterDetach = info.saveAfterDetach == 1;
    var closeAfterDetach = info.closeAfterDetach == 1;
    var restoreAfterDetach = info.restoreAfterDetach == 1;
    var saveAsPath = info.saveAsPath;
    var detachMethod = info.detachMethod;
    var detachingArtboardIds = info.detachingArtboardIds;

    waitForDocument(filePath, function(document) {

      var detacher = ICSyncSymbolDetacher.symbolDetacherWithDocument(document);

      if (detachMethod == "selection") {

         var artboards = nil;

         if (detachingArtboardIds.count() > 0) {
           artboards = [NSMutableArray array];
           for (var i = 0; i < detachingArtboardIds.count(); i++) {
             var id = detachingArtboardIds[i];
             var artboard = layerWithID(context.document, id)
             artboards.addObject(artboard)
           }
         }
         detacher.detachSelection(artboards || context.selection);

         log("CESketchLaundher: detaching artboards " + artboards);
      } else {
         detacher.detachAll()
      }

      if (saveAsPath) {
          detacher.saveToFile(saveAsPath);
      }

      if (saveAfterDetach) {
         detacher.saveToFile(filePath);
      }

      if (restoreAfterDetach) {
          coscript.setShouldKeepAround(true)
          coscript.scheduleWithInterval_jsFunction_(1, function() {
            detacher.undo();
          });
      }

      if (closeAfterDetach) {
          coscript.setShouldKeepAround(true)
          coscript.scheduleWithInterval_jsFunction_(2, function() {
             document.close()
          });
      }

    });
}

var detachDocumentAsyncStart = function(context) {
    log("CESketchLaundher: detaching async");
    var configFile = [NSString stringWithString:context.scriptPath].stringByDeletingLastPathComponent().stringByAppendingPathComponent("CESymbolDetacher.json");

    var data = NSData.dataWithContentsOfFile(configFile)
    var info = NSJSONSerialization.JSONObjectWithData_options_error_(data, 0, nil);

    var filePath = info.filePath;
    var saveAfterDetach = info.saveAfterDetach == 1;
    var closeAfterDetach = info.closeAfterDetach == 1;
    var restoreAfterDetach = info.restoreAfterDetach == 1;
    var saveAsPath = info.saveAsPath;
    var detachMethod = info.detachMethod;
    var detachingArtboardIds = info.detachingArtboardIds;

    waitForDocument(filePath, function(document) {

      var detacher = ICSyncSymbolDetacher.symbolDetacherWithDocument(document);
      
      if (detachMethod == "selection") {

         var artboards = nil;

         if (detachingArtboardIds.count() > 0) {
           artboards = [NSMutableArray array];
           for (var i = 0; i < detachingArtboardIds.count(); i++) {
             var id = detachingArtboardIds[i];
             var artboard = layerWithID(context.document, id)
             artboards.addObject(artboard)
           }
         }
         log("CESketchLaundher: detaching async artboards " + artboards);
         detacher.detachSelectionAsync(artboards || context.selection);
      } else {
         log("CESketchLaundher: detaching async all");
         detacher.detachAllAsync()
      }
      log("CESketchLaundher: detaching async complete");
    });
}

var detachDocumentAsyncEnd = function(context) {
    log("CESketchLaundher: Cleaning up async detach");
    var configFile = [NSString stringWithString:context.scriptPath].stringByDeletingLastPathComponent().stringByAppendingPathComponent("CESymbolDetacher.json");

    var data = NSData.dataWithContentsOfFile(configFile)
    var info = NSJSONSerialization.JSONObjectWithData_options_error_(data, 0, nil);

    var filePath = info.filePath;
    var saveAfterDetach = info.saveAfterDetach == 1;
    var closeAfterDetach = info.closeAfterDetach == 1;
    var restoreAfterDetach = info.restoreAfterDetach == 1;
    var saveAsPath = info.saveAsPath;
    var detachMethod = info.detachMethod;
    var detachingArtboardIds = info.detachingArtboardIds;

    waitForDocument(filePath, function(document) {
      var detacher = ICSyncSymbolDetacher.symbolDetacherWithDocument(document);
     
      if (saveAsPath) {
          detacher.saveToFile(saveAsPath);
          log("CESketchLaundher: Save as path");
      }

      if (saveAfterDetach) {
         detacher.saveToFile(filePath);
         log("CESketchLaundher: Save after detach");
      }

      if (restoreAfterDetach) {
          coscript.setShouldKeepAround(true)
          coscript.scheduleWithInterval_jsFunction_(1, function() {
            detacher.undo();
          });
          log("CESketchLaundher: Restore after detach");
      }

      if (closeAfterDetach) {
          coscript.setShouldKeepAround(true)
          coscript.scheduleWithInterval_jsFunction_(2, function() {
             document.close()
          });
          log("CESketchLaundher: Close after detach");
      }
      log("CESketchLaundher: Cleaning up async detach complete");
    });
}
