
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 400 },
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

  this.load.image('pipe', 'assets/pipe.png');
}

let bird = null;
let upperPipe = null
let lowerPipe = null
const VELOCITY = 200;
let flapVelocity = 150;
const initialBirdPosition =  {x:15, y:config.height/2}


function create () {
  
  
  this.add.image(0,0, 'sky').setOrigin(0,0); 

  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, 'birdSquare').setOrigin(0.5,0.5) // initializing object with physics
  bird.body.velocity.x = 100
  bird.body.gravity.y = 400

  upperPipe = this.physics.add.sprite(300, 100, 'pipe').setOrigin(0,1)
  lowerPipe = this.physics.add.sprite(300, upperPipe.y+100, 'pipe').setOrigin(0,0) //top el del de arriba, pero con un espaci de 100

  // keyboard events
  this.input.keyboard.on('keydown-SPACE', flap);
  
}

//if y bird position is smotller than 0 or greater thant the canvas height, launch a lost alert
function update(time, delta) {

  // repeat feature -> if bird gets out from the screen, take it back to the start position
  if ((bird.body.y >= config.height) || bird.body.y < 0) restartPlayerPosition();
  // if (bird.body.y >= config.height) bird.body.y = bird.height/2
  // if (bird.body.y <= 0) bird.body.y = config.height - bird.height  

  // bounce feature (move back and forth) -> bounce in the walls
  if (bird.body.x >= config.width-bird.width) bird.body.velocity.x = -VELOCITY
  if (bird.body.x < 0) bird.body.velocity.x = VELOCITY
  
  // reduce aceleration 
  if (bird.body.velocity.y > 400) bird.body.velocity.y = 0
}

function flap() {
  bird.body.velocity.y = -flapVelocity
}

function restartPlayerPosition(params) {
  bird.x = initialBirdPosition.x
  bird.y = initialBirdPosition.y
  bird.body.velocity.y = 0
}

