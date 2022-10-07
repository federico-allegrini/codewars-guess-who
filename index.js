import Character from "./classes/Character.js";
import {
  allCharacters,
  allCharactersNames,
  allCharactersCharacteristics,
  findCharacterByName,
} from "./data/characters.js";

class GuessWho {
  constructor(name) {
    this.characterToGuess = findCharacterByName(name);
    this.remainingCharacter = allCharacters;
  }

  tryCounter = 0;
  endGame = false;
  rightChosenCharacteristic = [];

  guess(nameOrCharacteristic) {
    // You have already win
    if (this.endGame) {
      return `You have already win in ${this.tryCounter} trys`;
    }

    // Increment try counter and number of trying message
    this.tryCounter++;
    console.log(
      `[Try#${this.tryCounter}] You have chosen "${nameOrCharacteristic}"`
    );

    // Win if the input is equal to name
    if (nameOrCharacteristic === this.characterToGuess.name) {
      this.endGame = true;
      return `You win in ${this.tryCounter} try\n`;
    }

    // Lose if the input is one of names
    if (allCharactersNames.includes(nameOrCharacteristic))
      return `You're wrong, try number ${this.tryCounter}\n`;

    // If input in characteristic
    // Return all characters with the input
    const charactersWithInput = this.remainingCharacter.filter((character) =>
      character.hasCharacteristics(nameOrCharacteristic)
    );
    // Only if there is at least one character, update remaining character and add a new right chosen characteristic
    if (charactersWithInput.length > 0) {
      this.remainingCharacter = charactersWithInput;
      this.rightChosenCharacteristic.push(nameOrCharacteristic);
    }
    console.log(
      `{Right chosen characteristic} \n- ${this.rightChosenCharacteristic
        .map((r) => r + " - ")
        .join("")}`
    );
    if (this.characterToGuess.hasCharacteristics(nameOrCharacteristic))
      return `All character with characteristic "${nameOrCharacteristic}": \n${charactersWithInput
        .map((c) => " * " + c.name + "\n")
        .join("")}`;

    // If input in all caracteristic
    // Return all characters without the input
    const charactersWithOutInput = allCharacters.filter(
      (character) => !character.hasCharacteristics(nameOrCharacteristic)
    );
    if (
      !this.characterToGuess.hasCharacteristics(nameOrCharacteristic) &&
      charactersWithOutInput.length !== allCharacters.length
    )
      return `All character without characteristic: "${nameOrCharacteristic}" \n${charactersWithOutInput
        .map((c) => " * " + c.name + "\n")
        .join("")}`;

    // In all other cases return wrong value message
    return `Wrong input\n`;
  }
}

const game = new GuessWho("Amelie");

console.log(game.guess("Female"));
console.log(game.guess("Male"));
console.log(game.guess("Hat"));
console.log(game.guess("Invalid"));
console.log(game.guess("Isabelle"));
console.log(game.guess("Brown hair"));
console.log(game.guess("Long hair"));
console.log(game.guess("Invalid"));
console.log(game.guess("Amelie"));
console.log(game.guess("Small nose"));
console.log(game.guess("Small mouth"));
