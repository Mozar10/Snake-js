class Unit {
  constructor(element, position) {
    this.element = element;
    this.position = position;
    if (this.element.getAttribute('id') === 'dot') {
      Unit.dotReference = this;
    }
  }

  checkUnitCollision() {
    const didCollide = Unit.dot.left === Unit.head.left && Unit.dot.top === Unit.head.top;
    if (didCollide) {
      Unit.dotReference.setRandomPosition(Unit.dotReference.element);
      this.growSnake();
    }
  }

  getPosition(node) {
    const left = Number(node.style.left.substr(0, node.style.left.indexOf('px')));
    const top = Number(node.style.top.substr(0, node.style.top.indexOf('px')));
    return { left, top };
  }

  setPosition(node, position) {
    const { left, top } = position;
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
  }

  savePosition(node) {
    this.position = this.getPosition(node);
    Unit[node.getAttribute('id')] = this.position;
  }

  createNode(parent, type, attribues) {
    const domNode = document.createElement(type);
    const textNode = document.createTextNode('');
    domNode.setAttribute(...attribues);
    parent.prepend(domNode);
    parent.prepend(textNode);
  }
}

module.exports = Unit;
