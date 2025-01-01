import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {
  constructor(config) {
    super("MenuScene", config);
  }

  //  ----------------------- Phaser methods --------------------
  preload() {}

  create() {
    super.create();
    this.scene.start("PlayScene");
  }

  update() {}

  // --------------- Class methods --------------------------------
}

export default MenuScene;
