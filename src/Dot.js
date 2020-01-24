const Board = require('./Board');

class Dot extends Board {
  constructor(element) {
    super();
    this.element = element;
  }

  static generateRandomMultiple(max, multiple) {
    const random = Math.floor(Math.random() * max);
    return random - (random % multiple);
  }

  placeDot(max, multiple) {
    const left = Dot.generateRandomMultiple(max, multiple);
    const top = Dot.generateRandomMultiple(max, multiple);
    this.setPosition(this.element, { left, top });
  }
}

module.exports = Dot;
