import GuessWho from "./classes/GuessWho.js";

const game = new GuessWho("Amelie");

console.log(game.guess("Female"));
console.log(game.guess("Male"));
console.log(game.guess("Hat"));
console.log(game.guess("Invalid"));
console.log(game.guess("Small nose"));
console.log(game.guess("Isabelle"));
console.log(game.guess("Brown hair"));
console.log(game.guess("Blonde hair"));
console.log(game.guess("Long hair"));
console.log(game.guess("Invalid"));
console.log(game.guess("Amelie"));
console.log(game.guess("Small nose"));
