import Phaser from "phaser";
import {
  MenuScene,
  PauseScene,
  PlayScene,
  PreloadScene,
  ScoreScene,
} from "./scenes";

const WIDTH = 400;
const HEIGHT = 600;
const BIRD_POSITION = { x: 15, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION,
};

const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenesInstances = () => Scenes.map(createScene);

const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  ...SHARED_CONFIG,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: initScenesInstances(),
};

new Phaser.Game(config);
