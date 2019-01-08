//Question(2.6)
//Guess the output of the following snippets of code.
//(This is a snippet of the "Guess the Number" game)
//let computerSecret;
//let userGuess;
//computerSecret = parseInt(Math.random() * 100);
//userGuess = 40; (get this value maybe using an input element444)
//if (userGuess === computerSecret) {
//    console.log("Congratulations! You win!! You guessed the number!");
//} else if (userGuess > computerSecret) {
//    console.log("Too high");
//} else if (userGuess < computerSecret) {
//    console.log("Too low");
//}
let computerSecret;
let userGuess;
computerSecret = parseInt(Math.random() * 100);
userGuess = 40; 
if (userGuess === computerSecret) {
    console.log("Congratulations! You win!! You guessed the number!");
} else if (userGuess > computerSecret) {
    console.log("Too high");
} else if (userGuess < computerSecret) {
    console.log("Too low");
}
//Answer(Too low)