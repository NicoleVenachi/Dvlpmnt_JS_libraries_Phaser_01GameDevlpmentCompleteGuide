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
  }

  update() {}

  // --------------- Class methods --------------------------------

  setupMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.on("pointerover", () => {
      textGO.setStyle({ fill: "#fff" });
    });

    textGO.on("pointerout", () => {
      textGO.setStyle({ fill: "#000" });
    });

    textGO.on("pointerup", () => {
      menuItem.scene && this.scene.start(menuItem.scene);
      menuItem.text === "Exit" && this.game.destroy(true);
    });
  }
}

export default MenuScene;
