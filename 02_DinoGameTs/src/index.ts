import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
  },
  scene: [PreloadScene, PlayScene],
};

new Phaser.Game(config);

function preload() {
  this.load.image("sky", "assets/sky.png");
}

function create() {
  this.add.image(400, 300, "sky");
}
