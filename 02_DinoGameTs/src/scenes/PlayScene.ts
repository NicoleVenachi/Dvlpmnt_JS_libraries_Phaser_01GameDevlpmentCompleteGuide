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
   this.physics.add.overlap(this.player, this.startTrigger, () => {
     if (this.startTrigger.y === 10) { //first time it triggers, position is 10
        this.startTrigger.body.reset(0, this.gameHeight);
        return
     }

      this.startTrigger.body.reset(1000, 1000); //second time goes off screen
      console.log('roll out the scenary');
   });
  }

  // update(time: number, delta: number): void {
    
  // }

  // ************** Custom methods **************
  createEnvironment() {
    this.add.tileSprite(0, this.gameHeight, 88, 26, 'ground').setOrigin(0, 1);
  }

  createPlayer() {
    this.player = new Player(this, 0, this.gameHeight, 'dino-idle');
  }


}

export default PlayScene;