/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    // if(video.paused){
    //     video.play()
    // } else {
    //     video.pause()
    // }
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon
}

function skip() {
    // body
    // console.log('this :', this);
    // console.log('this.dataset.skip :', this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(arguments) {
    // body
    video[this.name] = this.value;
    // console.log('this.value :', this.value);
    // console.log('this.name :', this.name);
}

function handleProgress(arguments) {
    const percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`
    // console.log('percent :', percent);
}
function scrub (e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
// Hook up the event listens
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', ()=>mousedown = true);
progress.addEventListener('mouseup', () =>mousedown = false);
