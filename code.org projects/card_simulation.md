``` javascript
//Variables used to hold the values of each card//
var cardList = [];
var handList = [];

//Starts of the program when clicking the "Run" button//

generateCards();
lowestNumberChecker(cardList);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//--- CODE TO CHECK FOR SMALLEST NUMBER BETWEEN ALL CARDS ---//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

function lowestNumberChecker(list) {

  // Cards are represented as a number 1 - 13, where Jack, Queen, and King are 11, 12, and 13
  var min = 13;
  for (var i in list) {
    if (list[i] < min) {
      min = list[i];
    }
  }

  // Once all the cards are gone though, it sets the text to the current minimum card and displays it

  setNumber("lowestCard", min);
  console.log("I found it! " + "The lowest number is : " + min);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//--- CODE TO CHECK FOR SMALLEST NUMBER BETWEEN ALL CARDS ---//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

//Code to add cards in hand and switch them out
[1, 2, 3, 4, 5, 6, 7, 8].forEach(function(card) {
  onEvent("card" + card, "click", function() {
    appendItem(handList, cardList[card - 1]);
    setNumber("hand1", handList[0]);

    // Code to add card to your second hand

    if (handList.length > 1) {
      appendItem(handList, cardList[card - 1]);
      setNumber("hand2", handList[1]);
    }
  });
});

// Removes the cards in your hand

onEvent("removeHand", "click", function() {
  removeHand();
});

//Generates cards while checking for the lowest number when clicking the cardGenerator button

onEvent("cardGenerator", "click", function() {
  console.log("");
  console.log("NEW SET OF CARDS");
  generateCards();
  lowestNumberChecker();
  removeHand();
});

//Code to check your cards and hide them

[1, 2, 3, 4, 5, 6, 7, 8].forEach(function(reveal) {
  onEvent("revealCards", "change", function() {
    var revealCards = getChecked("revealCards");
    if (revealCards) {
      // True == "Flips" the cards, revealing the text and showing the "front" of the cards
      setProperty("card" + reveal, "text-color", rgb(77, 87, 95));
      setProperty("card" + reveal, "background-color", rgb(242, 242, 242));
    } else {
      // False == "Flips" the cards, hiding the text and showing the "back" of the card
      setProperty("card" + reveal, "text-color", rgb(0, 0, 0, 0));
      setProperty("card" + reveal, "background-color", rgb(185, 0, 0));
    }
  });
});

//Code to reveal the lowest card

onEvent("lowestCardReveal", "change", function() {
  var lowestCardReveal = getChecked("lowestCardReveal");
  if (lowestCardReveal) {
    // True == "Flips" the cards, revealing the text and showing the "front" of the cards
    setProperty("lowestCard", "text-color", rgb(77, 87, 95));
    setProperty("lowestCard", "background-color", rgb(242, 242, 242));
  } else {
    // False == "Flips" the cards, hiding the text and showing the "back" of the card
    setProperty("lowestCard", "text-color", rgb(0, 0, 0, 0));
    setProperty("lowestCard", "background-color", rgb(185, 0, 0));
  }
});


// Information button (sorry jason for using your code :P)

var elements = ["informationBackground", "information", "informationBackground1"];

elements.forEach(function(id) {
  onEvent("infoButton", "change", function() {
    var infoReveal = getChecked("infoButton");
    if (infoReveal) {
      // Shows the information tab
      showElement(id);
      setStyle(id, "opacity:1.0; transition:0.2s");
    } else {
      // Hides the information tab
      hideElement(id);
      setStyle(id, "opacity:0.0; transition:0.2s");
    }
  });
});

// Creates a random set of 8 cards

function generateCards() {
  for (var i = 0; i < 8; i++) {
    var randomCard = randomNumber(1, 13);
    appendItem(cardList, randomCard);
  }

  // Once the list is greater than 8 cards, remove all the cards in the list

  if (cardList.length > 8) {
    for (var index = 0; i > 0; i--) {
      removeItem(cardList, index);
    }
  }
  // Sets each value to each card
  [1, 2, 3, 4, 5, 6, 7, 8].forEach(function(item) {
    setNumber("card" + item, cardList[item - 1]);
  });
  console.log(cardList);

}

// Removes the cards in your current hand 

function removeHand() {
  for (var i = handList.length; i > 0; i--) {
    removeItem(handList, 0);
  }
  setText("hand1", "");
  setText("hand2", "");
}
```
