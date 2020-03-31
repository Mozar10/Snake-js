const Unit = require('./Unit');
const Snake = require('./Snake');
const Dot = require('./Dot');

class Game {
  constructor(level) {
    this.snake = new Snake(document.getElementById('snake-head'), { left: 0, top: 0 });
    this.dot = new Dot(document.getElementById('dot'), {});

    window.addEventListener('keydown', e => {
      if (e.keyCode === 37) this.snake.moveHead('left', 'left', (p, s) => p - s, level);
      if (e.keyCode === 38) this.snake.moveHead('top', 'top', (p, s) => p - s, level);
      if (e.keyCode === 39) this.snake.moveHead('left', 'right', (p, s) => p + s, level);
      if (e.keyCode === 40) this.snake.moveHead('top', 'bottom', (p, s) => p + s, level);
    });
    //Why does this work but this.checkUnitCollision = this.checkUnitCollision.bind(this) doesnt!!
    Game.prototype.checkUnitCollision = Game.prototype.checkUnitCollision.bind(this);
  }

  endGame() {
    this.directionChange();
    alert('YOU LOSE');
    window.location.reload();
  }

  checkBorderCollision() {
    const didCollide =
      this.position.top < 0 ||
      this.position.left < 0 ||
      this.position.top > 586 ||
      this.position.left > 586;
    if (didCollide) this.endGame();
  }

  checkUnitCollision() {
    const snakeX = this.snake.position.left;
    const snakeY = this.snake.position.top;
    const dotX = this.dot.position.left;
    const dotY = this.dot.position.top;

    if (snakeX === dotX && snakeY === dotY) {
      this.snake.growSnake();
      this.dot.updatePosition(this.dot.element, this.dot.getRandomPosition());
    }
  }
}

Object.setPrototypeOf(Unit.prototype, Game.prototype);
new Game(55)
