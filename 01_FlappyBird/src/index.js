
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    // arcade: {
    //   gravity: { y: 200 }
    // }
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
  // this context -> Scene

  // load image, specify asset
  // (resourceFutureId, path)
  this.load.image('sky', 'assets/sky.png');
  this.load.image('birdSquare', 'assets/bird.png');
}

let bird = null;

function create () {
  // addd image to the scene, specify resource
  //(x,y, key)
  // x -=> 400. y -> 300
  this.add.image(0,0, 'sky').setOrigin(0,0);


  //iknicializar Sprite (pongo en el screen (y=50%, x=00%), y su posicion que sea la mitad de la img)
  bird = this.physics.add.sprite(0, config.height/2, 'birdSquare').setOrigin(0,0.5)
  bird.body.velocity.x = config.width;

  // bird.body.gravity.y = 200;
  console.log(bird.body.x);
  
}

// 60 fps app exec time
// 60 times per second
// 60 ejecuciones * 16ms (duracion de frame) = 1000 ms (para ejhecutar los 50 freames)
let frameCounter = 0
function update(time, delta) {
  frameCounter++
  if (frameCounter > 60) {
    // detengo el bird al segundo
    bird.body.velocity.x = 0;
    console.log(bird.body.x);
  }
}

