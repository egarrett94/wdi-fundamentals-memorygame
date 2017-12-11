var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardThree); 


console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("sorry, try again.");
	}
}