var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var userChoice = "";
var guessesLeft = 10;
var guessesSoFar = [];
var wins = 0;
var losses = 0;


document.onkeyup = function() {
    $("#guesses-left").text("Guesses left: " + guessesLeft);
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerChoice);
    console.log(userChoice);
    console.log(guessesSoFar);
    var userChoice = String.fromCharCode(event.which).toLowerCase();

    var reset = function() {
        guessesLeft = 10;
        guessesSoFar = [];
    }
    if (userChoice === computerChoice) {
        // console.log(userChoice);    
        guessesLeft = 10;
        guessesSoFar = empty();
        $("#wins").text("Wins: " + wins++);
    } else {
        guessesLeft--;
        // $("#guesses-left").text(guessesLeft);
        guessesSoFar.push(userChoice);
        $("#guesses-so-far").text("Guesses so far: " + guessesSoFar);
    } 

    if (guessesLeft === 0) {
        $("#losses").text("Losses: " + losses++);
        reset();
    }
}
































// function genCharArray(charA, charZ) {
//     var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
//     for (; i <= j; ++i) {
//         a.push(String.fromCharCode(i));
//     }
//     return a;
// }
// genCharArray('a', 'z');





























// //HOW EACH VARIABLE STARTS
// var wins = 0;
// var losses = 0;
// var guessesLeft = 10;
// //PUSH USER ANSWERS TO THIS ARRAY
// var guessesSoFar = [];




// var winsTxt = document.getElementById("winstext");
// var lossesTxt = document.getElementById("lossestext");
// var leftTxt = document.getElementById("lefttext");
// var sofarTxt = document.getElementById("sofartext");




// document.onkeyup = function(event) {
//     var userGuess = event.key; 
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// // if (userGuess === computerGuess) {
// //     wins++;
// // }

// // else {
// //     losses++;
// // }
// if (userGuess === ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]) {

//     if (userGuess === computerGuess) {
//         wins++;
       
//         winsTxt.textContent = "Wins:" + wins;
//     }
    
//     else {
//         losses++;
        
//         lossesTxt.textContent = "Losses:" +losses;
//         leftTxt.textContent = 10
//         sofarTxt.textContent = userGuess;
//     };
    
    // else {
    //     losses++;0
    //     document.write="key";
    //     guessesLeft--;
    // }
















