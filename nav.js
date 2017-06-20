(function () {

// ---------- slide navigation ----------

var hash = document.location.hash;
var body = document.body;
var nav = document.getElementById('nav');
var left = document.getElementById('left');
var right = document.getElementById('right');
var sections = document.getElementsByTagName('section');
var progress = document.getElementById('progress-bar');
var last = sections.length - 1;
var active = -1;

function activate (idx) {
    if (sections[active]) {
        sections[active].className = sections[active].className.replace(" active", "");
    }

    progress.style.cssText = 'width:' + Math.floor(idx / last * 100) + '%';

    left.style.cssText = idx === 0 ? 'display:none;' : '';
    right.style.cssText = idx === last ? 'display:none;' : '';

    nav.className = sections[idx].className;
    sections[idx].className = sections[idx].className + " active";
    active = idx;
    window.location.hash = idx;
}

function prev () {
    var idx = active - 1;
    activate(idx < 0 ? 0 : idx);
}

function next () {
    var idx = active + 1;
    activate(idx > last ? last : idx);
}

left.addEventListener('click', prev);
right.addEventListener('click', next);
window.addEventListener('keydown', function (evt) {
    evt = evt || window.event;
    if (evt.keyCode === 37) prev();
    if (evt.keyCode === 39) next();
});

activate(hash ? parseInt(hash.slice(1), 10) : 0);

window.addEventListener('popstate', function () {
    var hash = document.location.hash;
    activate(parseInt(hash.slice(1), 10));
})

// ---------- video navigation ----------

var videoContainer = document.getElementById('video');
var videoIFrame = document.getElementById('video-iframe');
var videoOpenBtns = document.getElementsByClassName('video-button');
var videoCloseBtn = document.getElementById('video-close');

function openVideo (evt) {
    var src = evt.target.getAttribute('data-youtube');
    videoContainer.className = 'video-container visible';
    videoIFrame.src = 'https://www.youtube.com/embed/' + src;
}

function closeVideo (evt) {
    videoContainer.className = 'video-container';
    videoIFrame.src = '';
}

for (var i = 0; i < videoOpenBtns.length; i++) {
    videoOpenBtns[i].addEventListener('click', openVideo);
}

videoCloseBtn.addEventListener('click', closeVideo);

})();
