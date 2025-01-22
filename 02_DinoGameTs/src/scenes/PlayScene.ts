import Phaser from "phaser";
import { SpriteWithDynamicBody } from "../types";
import { Player } from "../entities/Player";

class PlayScene extends Phaser.Scene {
  
  player: Player;
  startTrigger: SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;
  }

  constructor() {
    super('PlayScene');
  }

  // ************** Phaser methods **************
  create() {
   this.createEnvironment();
   this.createPlayer();
   this.startTrigger = this.physics.add.sprite(0, 10, null)
    .setAlpha(0)
    .setOrigin(0, 1);
   this.registerPlayerControl();
   this.physics.add.overlap(this.player, this.startTrigger, () => {
     console.log('Collided'); 
   });
  }

  // ************** Custom methods **************
  createEnvironment() {
    this.add.tileSprite(0, this.gameHeight, 88, 26, 'ground').setOrigin(0, 1);
  }

  createPlayer() {
    this.player = new Player(this, 0, this.gameHeight, 'dino-idle');
  }

  registerPlayerControl() {
    const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    spaceBar.on('down', () => {
      this.player.setVelocityY(-1600);
    })
  }
}

export default PlayScene;