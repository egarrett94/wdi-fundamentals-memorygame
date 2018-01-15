var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
]; 

var cardsInPlay = [];
var playerScore = 0;

var checkForMatch = function () {	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
		playerScore = playerScore+1;
		document.getElementById("scoreboard").innerHTML = playerScore;
		cardsInPlay = [];
	} else {
		alert("sorry, try again.");
		cardsInPlay.pop();
		cardsInPlay.pop();
		clearBoard();
		createBoard();
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("You flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}; 


var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var clearBoard = function () {
	document.getElementById("game-board").innerHTML = "";
}

createBoard(); 

var resetButton = function () {
	clearBoard();
	createBoard();
	playerScore = 0;
	document.getElementById("scoreboard").innerHTML = playerScore;
}

var button = document.getElementsByClassName('reset');
button[0].addEventListener('click', resetButton);

function revealInstruct() {
    var x = document.getElementById("instruct-p");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}