import BaseScene from "./BaseScene";

class ScoreScene extends BaseScene {
  constructor(config) {
    super("ScoreScene", { ...config, canGoBack: true });
  }

  //  ----------------------- Phaser methods --------------------
  preload() {}

  create() {
    super.create();
    this.createBestScore();
  }

  update() {}

  // --------------- Class methods --------------------------------
  createBestScore() {
    const scorePosition = [this.screenCenter[0], this.screenCenter[1]];
    this.add
      .text(
        ...scorePosition,
        `Your best score: ${localStorage.getItem("bestScore") || 0}`,
        this.fontOptions
      )
      .setOrigin(0.5, 1);
  }
}

export default ScoreScene;
