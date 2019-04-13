export default class Ball {
  constructor(screen) {
    this.class = "Ball";
    this.screen = screen;
    this.width = 15;
    this.height = 15;
    this.position = { x: 0, y: 0 };
    this.startPosition();
    this.isStart = false;

    this.speed = 5;
    this.move = { x: 1, y: -1 };
  }

  startPosition() {
    this.position.x =
      this.screen.player.position.x +
      (this.screen.player.width - this.width) / 2;
    this.position.y =
      this.screen.player.position.y - this.screen.player.height - 1;
  }

  collision(object) {
    let pos = Object.assign({}, this.position);

    for (let i = 0; i <= this.speed; i++) {
      pos.x += this.move.x;
      pos.y += this.move.y;
      // collision top object
      if (
        object.position.y == pos.y + this.height &&
        pos.x + this.width >= object.position.x &&
        pos.x <= object.position.x + object.width
      ) {
        this.move.y = -1;
        this.position = Object.assign({}, pos);
        return true;
      }

      // collision left object
      if (
        object.position.x == pos.x + this.width &&
        pos.y + this.height >= object.position.y &&
        pos.y <= object.position.y + object.height
      ) {
        this.move.x = -1;
        this.position = Object.assign({}, pos);
        return true;
      }

      // collision right object
      if (
        object.position.x + object.width == pos.x &&
        pos.y + this.height >= object.position.y &&
        pos.y <= object.position.y + object.height
      ) {
        this.move.x = 1;
        this.position = Object.assign({}, pos);
        return true;
      }

      // collision bottom object
      if (
        object.position.y + object.height == pos.y &&
        pos.x + this.width >= object.position.x &&
        pos.x <= object.position.x + object.width
      ) {
        this.move.y = 1;
        this.position = Object.assign({}, pos);
        return true;
      }
    }
    return false;
  }
  update(deltaTime) {
    if (!this.isStart) this.startPosition();
    else {
      this.position.x += this.speed * this.move.x;
      this.position.y += this.speed * this.move.y;
      if (this.position.x < 0) {
        this.position.x = 0;
        this.move.x = 1;
      }
      if (this.position.x > this.screen.width - this.width) {
        this.position.x = this.screen.width - this.width;
        this.move.x = -1;
      }
      if (this.position.y < 0) {
        this.position.y = 0;
        this.move.y = 1;
      }
      if (this.position.y > this.screen.height - this.height) {
        this.position.y = this.screen.height - this.height;
        this.move.y = -1;
      }
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
