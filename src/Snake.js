const Unit = require('./Unit');

class Snake extends Unit {
  constructor(element, position) {
    super(element, position);
    this.head = element.lastChild.previousSibling;
    this.timer = null;
    this.arrowKey = null;
    this.verticalDirections = ['top', 'bottom'];
    this.horizontalDirections = ['left', 'right'];
  }

  getPreviousNode(node) {
    return node.previousSibling.previousSibling;
  }

  directionChange() {
    window.clearInterval(this.timer);
  }

  growSnake() {
    this.createNode(this.element, 'span', ['class', 'snake']);
  }

  alignNodes(node, position) {
    const previousNode = this.getPreviousNode(node);
    if (previousNode) {
      const current = this.getPosition(previousNode);
      this.setPosition(previousNode, position);
      this.alignNodes(previousNode, current);
    }
  }

  checkDirection(arrowKey) {
    const incomingDirection = this.verticalDirections.includes(arrowKey)
      ? this.verticalDirections
      : this.horizontalDirections;
    return !incomingDirection.includes(this.arrowKey);
  }

  //TODO Needs refactoring to more readable functional units.
  moveHead(direction, arrowKey, calcPosition) {
    if (this.checkDirection(arrowKey)) {
      this.arrowKey = arrowKey;
      this.directionChange();
      this.timer = window.setInterval(() => {
        const headPosition = this.getPosition(this.head);
        const newPosition = {
          ...headPosition,
          [direction]: calcPosition(headPosition[direction], 13)
        };
        this.setPosition(this.head, newPosition);
        this.savePosition(this.head);
        this.checkUnitCollision();
        this.checkBorderCollision();
        // this.checkSelfCollision();
        this.alignNodes(this.head, headPosition);
      }, 70);
    }
  }
}

module.exports = Snake;
