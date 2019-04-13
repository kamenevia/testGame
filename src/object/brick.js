export default class Brick {
  constructor(screen, col, row) {
    this.class = "Brick";
    this.screen = screen;
    this.width = 30;
    this.height = 15;
    this.position = {
      x: 5 + col * this.width,
      y: 5 + row * this.height
    };
  }

  update(deltatime) {}

  draw(ctx) {
    ctx.fillStyle = "#666";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
