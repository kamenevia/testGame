/**
 * Игрок
 */
export default class Player {
  constructor(screen) {
    this.class = "Player";
    this.screen = screen;
    this.width = 80;
    this.height = 15;
    this.speed = 0;
    this.maxSpeed = 7;

    this.position = {
      x: (this.screen.width - this.width) / 2,
      y: this.screen.height - this.height * 2
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > this.screen.width - this.width)
      this.position.x = this.screen.width - this.width;
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
