var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var randomImage = "Images/dice " + randomNumber +".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomImage);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "Images/dice " + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImage2);
if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "✅Player 1 Wins";
}
else if(randomNumber2 > randomNumber){
document.querySelector("h1").innerHTML = "✅Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
