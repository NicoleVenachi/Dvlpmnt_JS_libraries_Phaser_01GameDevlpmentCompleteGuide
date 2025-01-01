import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {
  constructor(config) {
    super("MenuScene", config);

    this.menu = [
      { scene: "PlayScene", text: "Play" },
      { scene: "ScoreScene", text: "Score" },
      { scene: null, text: "Exit" },
    ]; //menu navigation items
  }

  //  ----------------------- Phaser methods --------------------
  preload() {}

  create() {
    super.create();
    this.createMenu(this.menu);
    // this.scene.start("PlayScene");
  }

  update() {}

  // --------------- Class methods --------------------------------
}

export default MenuScene;
