// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

//Selecting button variables
const buttonNoun = document.querySelector("#noun");
const buttonVerb = document.querySelector("#verb");
const buttonAdjective = document.querySelector("#adjective");
const buttonNoun2 = document.querySelector("#noun2");
const buttonPlace = document.querySelector("#place");
const speakButton = document.querySelector("#speakButton");

//Creating Arrays
let nouns = ["Mom", "Dad ", "My Teacher"];
let verbs = ["sat on", "kissed", "ate"];
let adjectives = ["a goofy", "a slimy", "a fat"];
let nouns2 = ["goat", "frog", "bug"];
let places = ["in my spaghetti.", "on the grass.", "on the moon."];

//Setting up current selection defaults
let nounsNum = 0;
let verbsNum = 0;
let adjectivesNum = 0;
let nouns2Num = 0;
let placesNum = 0;

//Click to change function
buttonNoun.addEventListener("click", change);
buttonVerb.addEventListener("click", change);
buttonAdjective.addEventListener("click", change);
buttonNoun2.addEventListener("click", change);
buttonPlace.addEventListener("click", change);

// Incrementing variable values and loops back to 0

function change() {
	if (this == buttonNoun) {
	  nounsNum++;
	  if (nounsNum > nouns.length - 1) {
		nounsNum = 0;
	  }
	}
	if (this == buttonVerb) {
	  verbsNum++;
	  if (verbsNum > verbs.length - 1) {
		verbsNum = 0;
	  }
	}
	if (this == buttonAdjective) {
	  adjectivesNum++;
	  if (adjectivesNum > adjectives.length - 1) {
		adjectivesNum = 0;
	  }
	}
	if (this == buttonNoun2) {
	  nouns2Num++;
	  if (nouns2Num > nouns2.length - 1) {
		nouns2Num = 0;
	  }
	}
	if (this == buttonPlace) {
	  placesNum++;
	  if (placesNum > places.length - 1) {
		placesNum = 0;
	  }
	}
  }

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = "This is the text string that you will generate with your script";

//Assigning variables from array to a button

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
  textToSpeak = `${nouns[nounsNum]} ${verbs[verbsNum]} ${adjectives[adjectivesNum]} ${nouns2[nouns2Num]} ${places[placesNum]}`;
  speakNow(textToSpeak);
};
