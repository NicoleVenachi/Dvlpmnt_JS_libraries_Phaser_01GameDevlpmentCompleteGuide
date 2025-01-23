export class Player extends Phaser.Physics.Arcade.Sprite {

  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.init();

    this.scene.events.on('update', this.update, this);
  }

  init () {
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this
      .setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92);
  }

  update(): void {
    const {space} = this.cursors;
    const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(space);

    const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();

    if (isSpaceJustDown && onFloor) {
      this.setVelocityY(-1600);
    }  
  }
}

