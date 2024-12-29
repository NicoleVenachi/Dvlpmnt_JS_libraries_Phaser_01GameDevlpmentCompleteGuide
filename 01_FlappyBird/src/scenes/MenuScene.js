import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
  constructor(config) {
    super("MenuScene");
    this.config = config;
  }

  //  ----------------------- Phaser methods --------------------
  preload() {
    this.load.image("sky", "assets/sky.png");
  }

  create() {
    this.createBG();
    this.scene.start("PlayScene");
  }

  update() {}

  // --------------- Class methods --------------------------------
  createBG() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);
  }
}

export default MenuScene;
