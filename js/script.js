'use-strict';
var content = [{
        id: 'carousel-cell1',
        image: 'images/1.png',
        content: 'Italy/Alps',
        alt: 'image mountain',
    },
    {
        id: 'carousel-cell2',
        image: 'images/2.png',
        content: 'China',
        alt: 'image china',
    },
    {
        id: 'carousel-cell3',
        image: 'images/3.png',
        content: 'Australia',
        alt: 'image sydney australia',
    },
    {
        id: 'carousel-cell4',
        image: 'images/4.png',
        content: 'Island',
        alt: 'image island',
    }, {
        id: 'carousel-cell5',
        image: 'images/5.png',
        content: 'New York',
        alt: 'image new york',
    },
];

var myTemplate = document.querySelector('#template').innerHTML;
Mustache.parse(myTemplate);
var pastedTamplates = '';
var carousel = document.querySelector('.main-carousel');

for (var i = 0; i < content.length; i++) {
    pastedTamplates += Mustache.render(myTemplate, content[i]);
}
carousel.innerHTML = pastedTamplates;

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: false,
    hash: true,
    pageDots: false,
});
var restart = document.querySelector('.button');

restart.addEventListener('click', function () {
    var flkty = new Flickity('.main-carousel');
    flkty.select(0);
});

var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});