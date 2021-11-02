
var i = 0;
var images = [];
var time = 4000;


images[0] = '/images/web1.gif';
images[1] = '/images/web2.gif';
images[2] = '/images/web3.jpg';
images[3] = '/images/web4.jpg';

images[4] = '/images/web1.gif';

function changeImg() {
    document.sliding.src = images[i];


    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


// document.body.style.backgroundColor = "green"


// signup
