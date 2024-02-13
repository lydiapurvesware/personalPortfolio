/*let photo = document.getElementById('photo');

const photoClick = function(event) {
    event.target.style.backgroundImage = 'url(./resources/replacement.jpg)';
}

const photoReturn = function(event) {
    event.target.style.backgroundImage = '';
}

const photoHandler = function(photo) {
    photo.onmousedown = function() {
        photoClick(event);
    }

    photo.onmouseup = function() {
        photoReturn(event);
    }
}*/

/*document.getElementById('photo').addEventListener('click', function() {
    let currentPhoto = this.getAttribute('src');
    if (currentPhoto === './resources/theManstill24.JPG') {
        this.setAttribute('src', 'resources/replacement.jpg');
    } else {
        this.setAttribute('src', './resources/theManstill24.JPG');
    }
});*/


document.getElementById('photo2').addEventListener('click', function() {
    let currentPhoto = this.getAttribute('src');
    if (currentPhoto === './resources/Final-6 (1).jpg') {
        this.setAttribute('src', 'resources/replacement.jpg');
    } else {
        this.setAttribute('src', './resources/Final-6 (1).jpg');
    }
});

document.getElementById('photo3').addEventListener('click', function() {
    let currentPhoto = this.getAttribute('src');
    if (currentPhoto === './resources/Final-9.jpg') {
        this.setAttribute('src', 'resources/replacement.jpg');
    } else {
        this.setAttribute('src', './resources/Final-9.jpg');
    }
});
