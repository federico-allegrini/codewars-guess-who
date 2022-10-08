import {
  allCharacters,
  allCharactersNames,
  allCharactersCharacteristics,
  findCharacterByName,
} from "../data/characters.js";
import displayList from "../utils/displayList.js";

export default class GuessWho {
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

    // Lose if the input is one of other names
    if (allCharactersNames.includes(nameOrCharacteristic)) {
      return `You're wrong, try number ${this.tryCounter}\n`;
    }

    // If character to guess has this characteristic
    // Show all characters with this characteristic
    if (this.characterToGuess.hasCharacteristics(nameOrCharacteristic)) {
      this.rightChosenCharacteristic.push(nameOrCharacteristic);
      console.log(
        `{Right chosen characteristic} \n${displayList(
          this.rightChosenCharacteristic
        )}`
      );
      // Update remaining characters all characters with the input characteristic
      this.remainingCharacter = this.remainingCharacter.filter((character) =>
        character.hasCharacteristics(nameOrCharacteristic)
      );
      return `All characters with characteristic "${nameOrCharacteristic}": \n${displayList(
        this.remainingCharacter,
        "name",
        "+",
        true
      )}`;
    }

    // If character to guess hasn't this characteristic
    // If the input is a valid characteristic
    // Show all remaining characters without this characteristic
    if (allCharactersCharacteristics.includes(nameOrCharacteristic)) {
      this.remainingCharacter = this.remainingCharacter.filter(
        (character) => !character.hasCharacteristics(nameOrCharacteristic)
      );
      return `All characters without characteristic: "${nameOrCharacteristic}" \n${displayList(
        this.remainingCharacter,
        "name",
        "-",
        true
      )}`;
    }

    // In all other cases return wrong value message
    return `Input value isn't a valid name or characteristic\n`;
  }
}
