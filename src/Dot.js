const Unit = require('./Unit');

class Dot extends Unit {
  constructor(element, position) {
    super(element, position);
    this.setRandomPosition(element);
    this.savePosition(element);
  }

  static generateRandomMultiple(max, multiple) {
    const random = Math.floor(Math.random() * max);
    return random - (random % multiple);
  }

  setRandomPosition(element) {
    this.setPosition(element, {
      left: Dot.generateRandomMultiple(586, 13),
      top: Dot.generateRandomMultiple(586, 13)
    });
    this.savePosition(element);
  }
}

module.exports = Dot;
