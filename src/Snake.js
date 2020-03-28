const Unit = require('./Unit');

class Snake extends Unit {
  constructor(element, position) {
    super(element, position);
    this.head = element.lastChild.previousSibling;
    this.body = [];
    this.timer = null;
    this.arrowKey = null;
    this.previouslySetPosition = true;
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
    this.body = [];
    const previousNode = this.getPreviousNode(node);
    if (previousNode) {
      const current = this.getPosition(previousNode);
      this.setPosition(previousNode, position);
      this.body.push(position);
      this.checkSelfCollision();
      this.alignNodes(previousNode, current);
    }
  }

  checkSelfCollision() {
    const headPosition = this.getPosition(this.head);
    this.body.forEach(position => {
      console.log(position);
      if (headPosition.top === position.top && headPosition.left === position.left) this.endGame();
    });
  }

  checkDirection(arrowKey) {
    const incomingDirection = this.verticalDirections.includes(arrowKey)
      ? this.verticalDirections
      : this.horizontalDirections;
    return !incomingDirection.includes(this.arrowKey);
  }

  setNewTimer(direction, calcPosition, speed) {
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
      this.previouslySetPosition = true;
      this.alignNodes(this.head, headPosition);
    }, speed);
  }

  moveHead(direction, arrowKey, calcPosition, speed) {
    if (this.checkDirection(arrowKey) && this.previouslySetPosition) {
      this.previouslySetPosition = false;
      this.arrowKey = arrowKey;
      this.directionChange();
      this.setNewTimer(direction, calcPosition, speed);
    }
  }
}

module.exports = Snake;
