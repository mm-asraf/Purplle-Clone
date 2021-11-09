


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



