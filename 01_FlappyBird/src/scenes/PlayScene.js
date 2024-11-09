import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {
  constructor(config) {
    super('PlayScene'); //ejecuto el custructor de Phaser Scene

    this.config = config;
    this.bird = null;
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('birdSquare', 'assets/bird.png');  
  }

  create() {
    this.add.image(0,0, 'sky').setOrigin(0,0); 

    this.bird = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, 'birdSquare').setOrigin(0.5,0.5)
    this.bird.body.velocity.x = 100
    this.bird.body.gravity.y = 400
  }

  update() {

  }
}

export default PlayScene;