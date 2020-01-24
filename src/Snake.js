const Board = require('./Board');

class Snake extends Board {
  constructor(element) {
    super();
    this.element = element;
    this.timer = null;
    this.key = null;
    this.head = this.element.lastChild.previousSibling;
  }

  getPreviousNode(node) {
    return node.previousSibling.previousSibling;
  }

  directionChange() {
    window.clearInterval(this.timer);
  }

  alignNodes(node, position) {
    /*TODO: Investigate performance ramifications of this
     * It shouldn't get called anymore once the last node has
     * aligned
     */
    const previousNode = this.getPreviousNode(node);
    if (previousNode) {
      const current = this.getPosition(previousNode);
      this.setPosition(previousNode, position);
      this.alignNodes(previousNode, current);
    }
  }
  //TODO Needs refactoring to more readable functional units.
  moveHead(direction, key, calcPosition) {
    if (this.key !== key) {
      this.key = key;
      this.directionChange();
      this.timer = window.setInterval(() => {
        const headPosition = this.getPosition(this.head);
        const newPosition = {
          ...headPosition,
          [direction]: calcPosition(headPosition[direction], 13)
        };
        this.setPosition(this.head, newPosition);
        this.alignNodes(this.head, headPosition);
      }, 70);
    }
  }
}

module.exports = Snake;
