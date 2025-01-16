import Phaser from "phaser";

class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  create() {
    alert('PlayScene has been loaded successfully');
  }

}

export default PlayScene;