import "./styles.css";
import Game from "./screen/game";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = "400";
canvas.height = "300";

let game = new Game(canvas);

let lastTime = performance.now();
function render(time) {
  let deltaTime = time - lastTime;
  lastTime = time;
  requestAnimationFrame(render);
  game.update(deltaTime);
  game.draw(ctx);
}
render();
