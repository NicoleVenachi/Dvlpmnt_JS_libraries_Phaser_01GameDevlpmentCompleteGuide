
export class Player extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.init();
  }

  init () {
    this
      .setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92);
  }
}