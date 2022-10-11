import Character from "../classes/Character.js";

const charactersData = [
  [
    "Jean-Claude",
    [
      "Male",
      "Glasses",
      "Brown eyes",
      "Bald",
      "White hair",
      "Small mouth",
      "Small nose",
    ],
  ],
  [
    "Pierre",
    ["Male", "Mustache", "Brown eyes", "Brown hair", "Big mouth", "Small nose"],
  ],
  ["Jean", ["Male", "White hair", "Big nose", "Big mouth", "Blue eyes"]],
  [
    "Amelie",
    [
      "Female",
      "Hat",
      "Brown hair",
      "Small mouth",
      "Long hair",
      "Brown eyes",
      "Small nose",
    ],
  ],
  [
    "Mirabelle",
    [
      "Female",
      "Black hair",
      "Earrings",
      "Small mouth",
      "Brown eyes",
      "Big nose",
    ],
  ],
  [
    "Isabelle",
    [
      "Female",
      "Blonde hair",
      "Glasses",
      "Hat",
      "Small mouth",
      "Small nose",
      "Brown eyes",
    ],
  ],
  ["Antonin", ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"]],
  ["Bernard", ["Male", "Brown eyes", "Brown hair", "Small nose", "Hat"]],
  ["Owen", ["Male", "Blue eyes", "Blonde hair", "Small nose", "Small mouth"]],
  [
    "Dylan",
    [
      "Male",
      "Brown eyes",
      "Blonde hair",
      "Small nose",
      "Small mouth",
      "Bald",
      "Beard",
    ],
  ],
  [
    "Herbert",
    ["Male", "Brown eyes", "Blonde hair", "Big nose", "Small mouth", "Bald"],
  ],
  [
    "Christine",
    [
      "Female",
      "Blue eyes",
      "Blonde hair",
      "Small nose",
      "Small mouth",
      "Long hair",
    ],
  ],
  [
    "Luc",
    [
      "Male",
      "Brown eyes",
      "White hair",
      "Small nose",
      "Small mouth",
      "Glasses",
    ],
  ],
  [
    "Cecilian",
    ["Male", "Brown eyes", "Ginger hair", "Small nose", "Small mouth"],
  ],
  [
    "Lionel",
    ["Male", "Brown eyes", "Brown hair", "Big nose", "Big mouth", "Mustache"],
  ],
  [
    "Benoit",
    [
      "Male",
      "Brown eyes",
      "Brown hair",
      "Small mouth",
      "Small nose",
      "Mustache",
      "Beard",
    ],
  ],
  ["Robert", ["Male", "Blue eyes", "Brown hair", "Big nose", "Big mouth"]],
  [
    "Charline",
    ["Female", "Brown hair", "White hair", "Small nose", "Big mouth"],
  ],
  [
    "Renaud",
    [
      "Male",
      "Brown eyes",
      "Blonde hair",
      "Small nose",
      "Big mouth",
      "Mustache",
    ],
  ],
  [
    "Michel",
    ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Beard"],
  ],
  [
    "Pierre-Louis",
    [
      "Male",
      "Blue eyes",
      "Brown hair",
      "Small nose",
      "Small mouth",
      "Bald",
      "Glasses",
    ],
  ],
  [
    "Etienne",
    [
      "Male",
      "Brown eyes",
      "Blonde hair",
      "Small nose",
      "Small mouth",
      "Glasses",
    ],
  ],
  [
    "Henri",
    ["Male", "Brown eyes", "White hair", "Small nose", "Big mouth", "Hat"],
  ],
  [
    "Damien",
    ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Hat"],
  ],
];

const allCharacters = charactersData.map(
  ([name, characteristics]) => new Character(name, characteristics)
);

const allCharactersNames = allCharacters.map((character) => character.name);

const allCharactersCharacteristics = [
  ...new Set(
    allCharacters
      .map((character) => character.characteristics)
      .reduce((all, char) => [...all, ...char], [])
  ),
];

const extractCharactersNames = (characters) =>
  characters.map((character) => character.name);

const extractCharactersCharacteristics = (characters) => [
  ...new Set(
    characters
      .map((character) => character.characteristics)
      .reduce((all, char) => [...all, ...char], [])
  ),
];

const findCharacterByName = (name) =>
  allCharacters.find((character) => character.name === name);

const getRandomNameOrCharacteristic = (
  typeOfInput = "random",
  remainingNames = allCharactersNames,
  remainingCharactersCharacteristics = allCharactersCharacteristics
) => {
  const indexTypeOfInput = [];
  switch (typeOfInput) {
    case "name":
      indexTypeOfInput[0] = 0;
      break;
    case "character":
      indexTypeOfInput[0] = 1;
      break;
    default:
      indexTypeOfInput[0] = Math.round(Math.random());
  }
  // If there is only one name left, return always the correct name
  if (remainingNames.length === 1) {
    return remainingNames[0];
  }
  const randomTypeOfInput = [
    remainingNames,
    remainingCharactersCharacteristics,
  ][indexTypeOfInput];
  const randomIndex = Math.floor(Math.random() * randomTypeOfInput.length);
  return randomTypeOfInput[randomIndex];
};

export {
  allCharacters,
  allCharactersNames,
  allCharactersCharacteristics,
  extractCharactersNames,
  extractCharactersCharacteristics,
  findCharacterByName,
  getRandomNameOrCharacteristic,
};
