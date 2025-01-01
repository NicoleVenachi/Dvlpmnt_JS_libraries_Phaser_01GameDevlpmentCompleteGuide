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
    this.createMenu(this.menu, this.setupMenuEvents.bind(this));
    // this.scene.start("PlayScene");
  }

  update() {}

  // --------------- Class methods --------------------------------

  setupMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.on("pointerover", () => {
      textGO.setStyle({ fill: "#ff0" });
    });

    textGO.on("pointerout", () => {
      textGO.setStyle({ fill: "#000" });
    });
  }

  // this.scene.start(menuItem.scene)
}

export default MenuScene;
