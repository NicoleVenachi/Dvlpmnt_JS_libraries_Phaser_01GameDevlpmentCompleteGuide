import Phaser from "phaser";

const PIPES_TO_RENDER = 4;
const VELOCITY = 200;

class PlayScene extends Phaser.Scene {
  constructor(config) {
    super("PlayScene"); //ejecuto el custructor de Phaser Scene

    this.config = config;
    this.bird = null;
    this.pipes = null;

    this.pipeVerticalgDistanceRange = [100, 250];
    this.pipeHorizontalDistanceRange = [400, 500];
    this.pipeHorizontalDistance = 0;
    this.flapVelocity = 150;
  }

  //  ----------------------- Phaser methods --------------------
  preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("birdSquare", "assets/bird.png");
    this.load.image("pipe", "assets/pipe.png");
  }

  create() {
    this.createBG();
    this.createBird();
    this.createPipes();
    this.createColliders();
    this.handleInputs();
  }

  update() {
    this.checkGameStatus();
    this.recyclePipes();
  }

  // --------------- Class methods --------------------------------
  createBG() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);
  }

  createBird() {
    this.bird = this.physics.add
      .sprite(
        this.config.startPosition.x,
        this.config.startPosition.y,
        "birdSquare"
      )
      .setOrigin(0.5, 0.5);
    this.bird.body.velocity.x = 100;
    this.bird.body.gravity.y = 400;
  }

  createPipes() {
    this.pipes = this.physics.add.group();

    for (let index = 0; index < PIPES_TO_RENDER; index++) {
      const upperPipe = this.pipes
        .create(0, 0, "pipe")
        .setImmovable(true)
        .setOrigin(0, 1);
      const lowerPipe = this.pipes
        .create(0, 0, "pipe")
        .setImmovable(true)
        .setOrigin(0, 0);

      this.placePipe(upperPipe, lowerPipe);
    }

    this.pipes.setVelocityX(-200);
  }

  createColliders() {
    this.physics.add.collider(this.bird, this.pipes, this.gameOver, null, this);
  }

  handleInputs() {
    this.input.on("pointerdown", this.flap, this);
    this.input.keyboard.on("keydown-SPACE", this.flap, this);
  }

  checkGameStatus() {
    // repeat feature -> if bird gets out from the screen, take it back to the start position
    if (this.bird.body.y >= this.config.height || this.bird.body.y < 0)
      this.gameOver();
    // bounce feature (move back and forth) -> bounce in the walls
    if (this.bird.body.x >= this.config.width - this.bird.width)
      this.bird.body.velocity.x = -VELOCITY;
    if (this.bird.body.x < 0) this.bird.body.velocity.x = VELOCITY;
    // // reduce aceleration
    if (this.bird.body.velocity.y > 400) this.bird.body.velocity.y = 0;
  }

  placePipe(uPipe, lPipe) {
    let rightMostX = this.getRightMostPipe();

    let pipeVerticalDistance = Phaser.Math.Between(
      ...this.pipeVerticalgDistanceRange
    );
    let pipeVerticalPosition = Phaser.Math.Between(
      0 + 30,
      this.config.height - 30 - pipeVerticalDistance
    );

    let pipeHorizontalDistance = Phaser.Math.Between(
      ...this.pipeHorizontalDistanceRange
    );

    uPipe.x = rightMostX + pipeHorizontalDistance;
    uPipe.y = pipeVerticalPosition;

    lPipe.x = uPipe.x;
    lPipe.y = uPipe.y + pipeVerticalDistance;
  }

  recyclePipes() {
    const tempPipes = [];
    this.pipes.getChildren().forEach((pipe) => {
      if (pipe.getBounds().right <= 0) {
        tempPipes.push(pipe);
        if (tempPipes.length === 2) this.placePipe(...tempPipes);
      }
    });
  }

  getRightMostPipe() {
    let rightMostX = 0;

    this.pipes.getChildren().forEach((pipe) => {
      rightMostX = Math.max(pipe.x, rightMostX);
    });

    return rightMostX;
  }

  gameOver() {
    // this.bird.x = this.config.startPosition.x;
    // this.bird.y = this.config.startPosition.y;
    // this.bird.body.velocity.y = 0;
    this.physics.pause();
    this.bird.setTint(0xfff0000);
  }

  flap() {
    this.bird.body.velocity.y = -this.flapVelocity;
  }
}

export default PlayScene;
