const Unit = require('./Unit');

class Dot extends Unit {
  constructor(element, position) {
    super(element, position);
    this.updatePosition(element, this.getRandomPosition());
  }

  static generateRandomMultiple(max, multiple) {
    const random = Math.floor(Math.random() * max);
    return random - (random % multiple);
  }

  getRandomPosition() {
    return {
      left: Dot.generateRandomMultiple(586, 13),
      top: Dot.generateRandomMultiple(586, 13)
    };
  }
}

module.exports = Dot;
