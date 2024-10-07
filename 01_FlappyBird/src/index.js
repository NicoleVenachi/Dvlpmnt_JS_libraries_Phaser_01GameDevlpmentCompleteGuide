
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 50 }
      debug:true,
    }
  },
  // get physics() {
  //   return this._physics;
  // },
  // set physics(value) {
  //   this._physics = value;
  // },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

new Phaser.Game(config);

function preload () {
  // .load.resource(resourceFutureId, path)
  this.load.image('sky', 'assets/sky.png');
  this.load.image('birdSquare', 'assets/bird.png');
}

let bird = null;
const VELOCITY = 200;
function create () {
  this.add.image(0,0, 'sky').setOrigin(0,0); 

  bird = this.physics.add.sprite(15, config.height/2, 'birdSquare').setOrigin(0.5,0.5) // initializing object with physics
  bird.body.velocity.x = VELOCITY
  console.log(bird.body.x);
  
}

function update(time, delta) {

  // repeat feature -> if bird gets out from the screen, take it back to the start position
  // if (bird.body.x >= config.width) bird.body.x = 15
  // if (bird.body.x <= 0) bird.body.x = config.width

  // bounce feature (move back and forth) -> bounce in the walls
  if (bird.body.x >= config.width-bird.width) bird.body.velocity.x = -VELOCITY
  if (bird.body.x < 0) bird.body.velocity.x = VELOCITY
}

