const Unit = require('./Unit');
class Snake extends Unit {
  constructor(element, position) {
    super(element, position);
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
    this.createNode(this.element.parentNode, 'span', ['class', 'snake']);
  }

  alignNodes(node, position) {
    this.body = [];
    const previousNode = this.getPreviousNode(node);
    if (previousNode) {
      const current = this.getDomPosition(previousNode);
      this.setDomPosition(previousNode, position);
      this.body.push(position);
      this.alignNodes(previousNode, current);
    }
  }

  checkSelfCollision() {
    this.body.forEach(position => {
      if (this.position.top === position.top && this.position.left === position.left)
        this.endGame();
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
      const headPosition = this.position;
      const newPosition = {
        ...this.position,
        [direction]: calcPosition(this.position[direction], 13)
      };
      this.updatePosition(this.element, newPosition);
      this.previouslySetPosition = true;
      this.checkUnitCollision();
      this.checkBorderCollision();
      // this.checkSelfCollision();
      this.alignNodes(this.element, headPosition);
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
