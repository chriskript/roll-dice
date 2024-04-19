// Check if player names are already stored in local storage
var storedPlayer1Name = localStorage.getItem("player1Name");
var storedPlayer2Name = localStorage.getItem("player2Name");

// If names are not stored, prompt the user for input
if (!storedPlayer1Name) {
  storedPlayer1Name = prompt("Player 1 name?");
  localStorage.setItem("player1Name", storedPlayer1Name);
}

if (!storedPlayer2Name) {
  storedPlayer2Name = prompt("Player 2 name?");
  localStorage.setItem("player2Name", storedPlayer2Name);
}

// Update the default names with user inputs
document.querySelector(".name1").innerHTML = storedPlayer1Name;
document.querySelector(".name2").innerHTML = storedPlayer2Name;

// create random number generator
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1Digits = randomNumber1;
var dice2Digits = randomNumber2;

var diceImage1FileName = "images/dice" + randomNumber1 + ".png";
var diceImage2FileName = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImage1FileName);
document.querySelector(".img2").setAttribute("src", diceImage2FileName);

var gameResult = document.querySelector("h1");

var player1Wins = storedPlayer1Name + " wins";
var player2Wins = storedPlayer2Name + " wins";
var drawGame = "Draw!";

if (dice1Digits === dice2Digits) {
    gameResult.innerHTML = drawGame;
}
else if (dice1Digits > dice2Digits) {
    gameResult.innerHTML = player1Wins;
}
else if (dice1Digits < dice2Digits) {
    gameResult.innerHTML = player2Wins;
}
