const Snake = require('./Snake');
const Dot = require('./Dot');

const startGame = () => {
  const snake = new Snake(document.querySelector('.snake-container'));
  new Dot();
  window.addEventListener('keydown', e => {
    if (e.keyCode === 37) snake.moveHead('left', 'left', (p, s) => p - s);
    if (e.keyCode === 38) snake.moveHead('top', 'top', (p, s) => p - s);
    if (e.keyCode === 39) snake.moveHead('left', 'right', (p, s) => p + s);
    if (e.keyCode === 40) snake.moveHead('top', 'bottom', (p, s) => p + s);
  });
};

startGame();
