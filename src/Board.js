class Board {
  getPosition(node) {
    const left = Number(node.style.left.substr(0, node.style.left.indexOf('px')));
    const top = Number(node.style.top.substr(0, node.style.top.indexOf('px')));
    return { left, top };
  }
  
  setPosition(node, position) {
    node.style.top = `${position.top}px`;
    node.style.left = `${position.left}px`;
  }

  createNode(parent, attribute) {
    const el = document.createElement('span');
    el.setAttribute(attribute[0], attribute[1]);
    parent.appendChild(el);
  }
}

module.exports = Board;
