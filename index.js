


//scrollbar start
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000)
//scrollbar end

//set timeout start
var i = 0;
var time = 1500;
var images = [];
images[0] = './img/web1.gif';
images[1] = './img/web2.gif';
images[2] = './img/web3.jpg';
images[4] = './img/web4.jpg';

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg
//set - timeout end



let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function () {
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function () {
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i = 0; i < thumbnails.length; i++) {

    thumbnails[i].addEventListener('mouseover', function () {
        clearInterval(play);
    });

    thumbnails[i].addEventListener('mouseout', function () {
        return play = setInterval(autoPlay, 50);
    });
}

// slide2


// click featured

let thumbnails2 = document.getElementsByClassName('thumbnail2');
let slider2 = document.getElementById('slider2');

let buttonRight2 = document.getElementById('slide-right2');
let buttonLeft2 = document.getElementById('slide-left2');

buttonLeft2.addEventListener('click', function () {
    slider2.scrollLeft -= 125;
})

buttonRight2.addEventListener('click', function () {
    slider2.scrollLeft += 125;
})

