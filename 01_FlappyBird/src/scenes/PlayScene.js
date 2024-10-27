import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene'); //ejecuto el custructor de Phaser Scene

    this.initialBirdPosition = {
      x:15, 
      y:400,
    };
    this.bird = null;
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('birdSquare', 'assets/bird.png');
  }

  create() {
    this.add.image(0,0, 'sky').setOrigin(0,0); 

    this.bird = this.physics.add.sprite(this.initialBirdPosition.x, this.initialBirdPosition.y, 'birdSquare').setOrigin(0.5,0.5)
    this.bird.body.velocity.x = 100
    this.bird.body.gravity.y = 400
  }

  update() {

  }
}

export default PlayScene;