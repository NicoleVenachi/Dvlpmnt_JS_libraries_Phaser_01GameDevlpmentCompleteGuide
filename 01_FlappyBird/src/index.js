
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  width: 800,
  height: 600,
  _physics: {
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
    create: create
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


  //iknicializar Sprite (pongo en mitad del screen, y su posicion que sea la mitad de la img)
  bird = this.add.sprite(config.width * 0.1, config.height/2, 'birdSquare').setOrigin(0.5,0.5)
  debugger
}

