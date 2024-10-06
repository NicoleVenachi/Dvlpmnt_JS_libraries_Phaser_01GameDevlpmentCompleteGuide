
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
  // this.load.image('sky', 'assets/sky.png');
  debugger
}

function create () {
  // this.add.image(400, 300, 'sky');
}
