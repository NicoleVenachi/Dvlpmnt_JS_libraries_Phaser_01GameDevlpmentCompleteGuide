import BaseScene from "./BaseScene";

class PauseScene extends BaseScene {
  constructor(config) {
    super("PauseScene", { ...config, canGoBack: true });

    this.menu = [
      {
        scene: "PlayScene",
        text: "Continue",
      },
      {
        scene: "MenuScene",
        text: "Exit",
      },
    ];
  }

  //  ----------------------- Phaser methods --------------------
  preload() {}

  create() {
    super.create();
    this.createMenu(this.menu, this.setupMenuEvents.bind(this));
    // this.createPauseScreen();
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
      alert("Continue");
    });
  }

  // createPauseScreen() {
  //   const resumeButton = this.add
  //     .text(...this.screenCenter, "Resume", this.fontOptions)
  //     .setOrigin(0.5);
  //   resumeButton.setInteractive();

  //   resumeButton.on("pointerdown", () => {
  //     this.scene.stop();
  //     // this.scene.resume(this.config.scene);
  //   });
  // }
}

export default PauseScene;