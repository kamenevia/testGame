export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          player.position.x--;
          break;
        case 39:
          player.position.x++;
          break;
      }
    });
  }
}
