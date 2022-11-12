var arrSlide = [
    "csm_news-1920x640px-rebrand_223fe397dd.jpg",
    "csm_news-polycis_1920x640px-1_ee5ba38254.jpg",
    "csm_news-mehle_1920x640px_dd7d329cba.jpg"
];
var i = 0;
var vSlideImg = document.getElementById("mySlide")

function fNext() {
    i++;
    if (i >= arrSlide.length) i = 0;
    vSlideImg.src = "/Img/" + arrSlide[i];
}

function fReverse() {
    i--;
    if (i < 0) i = 2;
    vSlideImg.src = "/Img/" + arrSlide[i];
}

function fStart() {
    t = window.setInterval(fNext, 2000);
}