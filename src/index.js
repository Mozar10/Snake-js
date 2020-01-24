const Snake = require('./Snake');
const Dot = require('./Dot');

const createDot = parent => {
  const el = document.createElement('span');
  el.setAttribute('id', 'dot');
  parent.appendChild(el);
  return el;
};

const startGame = () => {
  const snake = new Snake(document.querySelector('.snake-container'));
  new Dot(createDot(document.getElementById('board'))).placeDot(600, 13);
  snake.createNode(document.querySelector('.snake-container'), ['class', 'snake']);

  window.addEventListener('keydown', e => {
    if (e.keyCode === 37) snake.moveHead('left', 'left', (p, s) => p - s);
    if (e.keyCode === 38) snake.moveHead('top', 'top', (p, s) => p - s);
    if (e.keyCode === 39) snake.moveHead('left', 'right', (p, s) => p + s);
    if (e.keyCode === 40) snake.moveHead('top', 'bottom', (p, s) => p + s);
  });
};

startGame();
