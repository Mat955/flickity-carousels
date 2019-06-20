'use-strict';
var content = [{
        id: 'carousel-cell1',
        image: 'images/1.png',
        content: 'Italy/Alps',
        alt: 'image mountain',
        coords: {
            lat: 49.255261,
            lng: 19.927172
        }

/*Moustache*/
    },
    {
        id: 'carousel-cell2',
        image: 'images/2.png',
        content: 'China',
        alt: 'image china',
        coords: {
            lat: 53.432088,
            lng: 14.547047
        }
    },
    {
        id: 'carousel-cell3',
        image: 'images/3.png',
        content: 'Australia',
        alt: 'image sydney australia',
        coords: {
            lat: 53.720168,
            lng: 21.695450
        }
    },
    {
        id: 'carousel-cell4',
        image: 'images/4.png',
        content: 'Iceland',
        alt: 'image iceland',
        coords: {
            lat: 49.392447,
            lng: 20.098897
        }
    },
    {
        id: 'carousel-cell5',
        image: 'images/5.png',
        content: 'New York',
        alt: 'image new york',
        coords: {
            lat: 52.229078,
            lng: 21.003228
        }
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

/*Flickity*/
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

window.initMap = function () {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            center: content[0].coords,
            zoom: 10
        }
    );
    var markers = [];
    for (var i = 0; i < content.length; i++) {
        markers[i] = new google.maps.Marker({
            position: content[i].coords,
            map: map,
        });
        markers[i].addListener('click', function () {
            flkty.select(i);
        });
    }
    flkty.on("change", function (index) {
        map.panTo(content[index].coords);
        map.setZoom(14);
    });
};