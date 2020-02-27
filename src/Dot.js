const Unit = require('./Unit');
const board = document.getElementById('board');

class Dot extends Unit {
  constructor() {
    super();
    this.element = this.createNode(board, 'span', ['id', 'dot']);
    this.setPosition(this.element, {
      left: Dot.generateRandomMultiple(586, 13),
      top: Dot.generateRandomMultiple(586, 13)
    });
  }

  static generateRandomMultiple(max, multiple) {
    const random = Math.floor(Math.random() * max);
    return random - (random % multiple);
  }
}

module.exports = Dot;
