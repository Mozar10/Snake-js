const Snake = require('./Snake');
const Dot = require('./Dot');

const startGame = () => {
  const SPEED = 60;
  const snake = new Snake(document.querySelector('.snake-container'), {});
  new Dot(document.getElementById('dot'), {});
  window.addEventListener('keydown', e => {
    if (e.keyCode === 37) snake.moveHead('left', 'left', (p, s) => p - s, SPEED);
    if (e.keyCode === 38) snake.moveHead('top', 'top', (p, s) => p - s, SPEED);
    if (e.keyCode === 39) snake.moveHead('left', 'right', (p, s) => p + s, SPEED);
    if (e.keyCode === 40) snake.moveHead('top', 'bottom', (p, s) => p + s, SPEED);
  });
};

startGame();
