import GuessWho from "./classes/GuessWho.js";
import { getRandomNameOrCharacteristic } from "./data/characters.js";

const game = new GuessWho(getRandomNameOrCharacteristic("name"));
while (!game.guess(getRandomNameOrCharacteristic())) {}
