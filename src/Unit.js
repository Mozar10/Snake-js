class Unit {
  constructor(element, position) {
    this.element = element;
    this.position = position;
  }

  updatePosition(node, position) {
    this.position = position;
    this.setDomPosition(node, position);
  }

  getDomPosition(node) {
    const left = Number(node.style.left.substr(0, node.style.left.indexOf('px')));
    const top = Number(node.style.top.substr(0, node.style.top.indexOf('px')));
    return { left, top };
  }

  setDomPosition(node, position) {
    const { left, top } = position;
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
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
