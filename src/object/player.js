/**
 * Игрок
 */
export default class Player {
  constructor(screen) {
    this.screen = screen;
    this.width = 80;
    this.height = 15;

    this.position = {
      x: (this.screen.width - this.width) / 2,
      y: this.screen.height - this.height * 2
    };
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
