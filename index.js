var randomNumber1=Math.round(Math.random()*(6-1)+1);
console.log(randomNumber1);
var randomImageSource="images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.round(Math.random()*(6-1)+1);
console.log(randomNumber2);
var randomImageSource="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="🚩Player 1 wins";
}else{
    document.querySelector('h1').innerHTML="Player 2 wins🚩";
}