import Brick from "./src/object/brick";

export default class Level {
  constructor(screen) {
    this.screen = screen;
    this.levels = [
      [
        [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1]
      ]
    ];
    this.level = 0;
    this.bricks = [];
    this.greateLevel(this.level);
  }

  greateLevel(num) {
    for (let row = 0; row < this.levels[num].length; row++) {
      for (let col = 0; col < this.levels[num][row].length; col++) {
        if (this.levels[num][row][col])
          this.bricks.push(new Brick(this.screen, col, row));
      }
    }
  }

  nextLevel() {
    if (++this.level < this.levels.length) this.greateLevel(this.level);
  }

  draw(ctx) {
    this.bricks.forEach(brick => {
      brick.draw(ctx);
    });
  }
}
