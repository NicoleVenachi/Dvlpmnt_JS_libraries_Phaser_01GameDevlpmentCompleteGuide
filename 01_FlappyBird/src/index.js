import Phaser from "phaser";
import { MenuScene, PlayScene } from "./scenes";

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = { x: 15, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION,
};
const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  ...SHARED_CONFIG,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [new MenuScene(SHARED_CONFIG), new PlayScene(SHARED_CONFIG)],
};

new Phaser.Game(config);
