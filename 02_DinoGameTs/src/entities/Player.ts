import Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.init();

    this.scene.events.on('update', this.update, this);
  }

  init () {
    this
      .setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92);

    // this.registerPlayerControl()
  }

  update(...args: any[]): void {
    console.log('Player update');
    
  }
  // registerPlayerControl() {
  //   const spaceBar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  //   spaceBar.on('down', () => {
  //     this.setVelocityY(-1600);
  //   })
  // }
}