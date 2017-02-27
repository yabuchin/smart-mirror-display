var isFullScreen = document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled ||
    false;

function fullscreen() {
    var target = document.getElementById('content');
    target.webkitRequestFullscreen();
}

var b = document.getElementById('fullscreenButton');
b.addEventListener('click', fullscreen, false);