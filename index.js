class GuessWho {
  constructor(name) {
    this.name = name;
    this.characteristic = this.allCharacteristic.filter(
      (char) => char[0] === this.name
    )[0][1];
    this.allName = this.allCharacteristic.map((char) => char[0]);
    this.tryCounter = 0;
    this.endGame = false;
    this.remainCharacteristic = this.allCharacteristic;
  }

  allCharacteristic = [
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
      [
        "Male",
        "Mustache",
        "Brown eyes",
        "Brown hair",
        "Big mouth",
        "Small nose",
      ],
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
    [
      "Antonin",
      ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"],
    ],
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

  rightCharacteristic = [];

  guess(nameOrChar) {
    // If you have already win
    // Exit
    if (this.endGame) {
      return `You have already win in ${this.tryCounter} trys`;
    }

    // Increment try counter and show try message
    this.tryCounter++;
    console.log(`[Try#${this.tryCounter}] You choose "${nameOrChar}"`);

    // If the input is equal to name
    // Win
    if (nameOrChar === this.name) {
      this.endGame = true;
      return `You win in ${this.tryCounter} try\n`;
    }
    // If the input is one of names
    // Lose
    if (this.allName.includes(nameOrChar))
      return `You're wrong, try number ${this.tryCounter}\n`;

    // If input in characteristic
    // All char with input
    const withChar = this.remainCharacteristic.filter((char) =>
      char[1].includes(nameOrChar)
    );
    if (withChar.length > 0) {
      this.remainCharacteristic = withChar;
      this.rightCharacteristic.push(nameOrChar);
    }
    console.log(
      `{Characteristic right choice} \n- ${this.rightCharacteristic
        .map((r) => r + " - ")
        .join("")}`
    );
    if (this.characteristic.includes(nameOrChar))
      return `All character with characteristic "${nameOrChar}": \n${withChar
        .map((c) => " * " + c[0] + "\n")
        .join("")}`;

    // If input in all caracteristic
    // All char without input
    const withoutChar = this.allCharacteristic.filter(
      (char) => !char[1].includes(nameOrChar)
    );
    if (
      !this.characteristic.includes(nameOrChar) &&
      withoutChar.length !== this.allCharacteristic.length
    )
      return `All character without characteristic: "${nameOrChar}" \n${withoutChar
        .map((c) => " * " + c[0] + "\n")
        .join("")}`;

    // In all other cases
    // Wrong input
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
