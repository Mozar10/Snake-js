class Unit {
  createNode(parent, type, attribues) {
    const domNode = document.createElement(type);
    domNode.setAttribute(...attribues);
    parent.appendChild(domNode);
    return domNode;
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
}

module.exports = Unit;
