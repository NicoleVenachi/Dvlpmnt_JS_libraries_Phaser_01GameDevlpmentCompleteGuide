import Phaser from "phaser";

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.fontSize = 34;
    this.lineHeight = 42;
    this.fontOptions = { fontSize: `${this.fontSize}px`, color: "#000" };
  }

  //  ----------------------- Phaser methods --------------------
  preload() {}

  create() {
    this.createBG();
  }

  // --------------- Class methods --------------------------------
  createBG() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);
  }

  createMenu(menu, cb) {
    let lastMenuPositionY = 0;
    menu.forEach((menuItem) => {
      const menuPostion = [
        this.screenCenter[0],
        this.screenCenter[1] + lastMenuPositionY,
      ];

      menuItem.textGO = this.add
        .text(...menuPostion, menuItem.text, this.fontOptions)
        .setOrigin(0.5, 1)
        .setInteractive(); // create/store the Phaser game object

      lastMenuPositionY += this.lineHeight;

      cb(menuItem); // callback to setup the event listener. setupMenuEvents = cb
    });
  }
}

export default BaseScene;
