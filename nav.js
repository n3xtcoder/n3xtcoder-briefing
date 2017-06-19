(function () {

var body = document.body;
var left = document.getElementById('left');
var right = document.getElementById('right');
var sections = document.getElementsByTagName('section');
var progress = document.getElementById('progress-bar');
var last = sections.length - 1;
var active = -1;



function activate (idx) {
    if (sections[active]) {
        sections[active].className = "";
    }

    var theme = sections[idx].getAttribute('data-theme');
    var bg = sections[idx].getAttribute('data-bg');

    body.className = theme || '';
    body.style = bg ? 'background-image:url(' + bg + ')' : '';
    progress.style = 'width:' + Math.floor(idx / last * 100) + '%';

    sections[idx].className = "active";
    active = idx;
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

activate(0);

})();
