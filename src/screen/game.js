import Player from "../object/player";
import Ball from "../object/ball";
import InputHandler from "../input/game";
import Level from "../../level";

/**
 * игра
 */
export default class Game {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;

    this.player = new Player(this);
    this.ball = new Ball(this);
    this.level = new Level();

    new InputHandler(this);
  }

  update(deltaTime) {
    this.player.update(deltaTime);
    this.ball.collision(this.player);
    this.level.bricks.forEach((brick, index) => {
      if (this.ball.collision(brick)) {
        //delete this.level.bricks[index];
        this.level.bricks.splice(index, 1);
      }
    });

    if (this.level.bricks.length == 0) {
      this.ball.isStart = false;
      this.level.nextLevel();
    }
    //this.player.update(deltaTime);
    //this.ball.collision(this.player);

    this.ball.update(deltaTime);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(ctx);
    this.ball.draw(ctx);
    this.level.draw(ctx);
  }
}
