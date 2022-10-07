export default class Character {
  constructor(name, characteristics) {
    this.name = name;
    this.characteristics = characteristics;
  }
  hasCharacteristics(characteristic) {
    return this.characteristics.includes(characteristic);
  }
}
