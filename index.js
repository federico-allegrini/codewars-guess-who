import GuessWho from "./classes/GuessWho.js";
import {
  getRandomNameOrCharacteristic,
  extractCharactersNames,
  extractCharactersCharacteristics,
} from "./data/characters.js";

const game = new GuessWho(getRandomNameOrCharacteristic("name"));
let [result, remainingCharacters] = game.guess(getRandomNameOrCharacteristic());
while (!result) {
  [result, remainingCharacters] = game.guess(
    getRandomNameOrCharacteristic(
      "random",
      extractCharactersNames(remainingCharacters),
      extractCharactersCharacteristics(remainingCharacters)
    )
  );
}
