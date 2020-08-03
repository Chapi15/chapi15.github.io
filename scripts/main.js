//Test for Non-obstrusive JS

//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nyanCat.jpeg') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/nyanCat.gif');
    }
}
