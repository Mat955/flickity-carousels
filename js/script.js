'use-strict';
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: false,
    hash: true,
    pageDots: false,
});
restartButton = document.querySelector(".button");
restartButton.addEventListener("click", function (t) {
    flkty.select(0)
});
var progressBar = document.querySelector(".progress-bar");
flkty.on("scroll", function (t) {
    t = Math.max(0, Math.min(1, t)), progressBar.style.width = 100 * t + "%"
});