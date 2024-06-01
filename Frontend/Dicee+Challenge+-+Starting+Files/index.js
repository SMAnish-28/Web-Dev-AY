var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var diceImage = document.querySelector(".img1");
diceImage.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var diceImage2 = document.querySelector(".img2");
diceImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}

/*
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}

*/