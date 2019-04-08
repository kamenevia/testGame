import Player from "../object/player";
import InputHandler from "../input/game";

/**
 * игра
 */
export default class Game {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;

    this.player = new Player(this);
    this.input = new InputHandler(this.player);
  }

  update() {
    this.player.update();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(ctx);
  }
}
