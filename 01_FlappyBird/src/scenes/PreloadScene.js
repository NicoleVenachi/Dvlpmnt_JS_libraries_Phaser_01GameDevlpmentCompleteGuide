import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  //  ----------------------- Phaser methods --------------------
  preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("sky", "assets/sky.png");
    this.load.image("birdSquare", "assets/bird.png");
    this.load.image("pipe", "assets/pipe.png");
    this.load.image("pause", "assets/pause.png");
  }

  create() {
    this.scene.start("MenuScene");
  }

  update() {}
}

export default PreloadScene;