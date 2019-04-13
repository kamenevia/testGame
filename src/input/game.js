export default class InputHandler {
  constructor(screen) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          screen.player.moveLeft();
          break;
        case 39:
          screen.player.moveRight();
          break;
        case 32:
          screen.ball.isStart = true;
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          screen.player.stop();
          break;
        case 39:
          screen.player.stop();
          break;
      }
    });
  }
}
