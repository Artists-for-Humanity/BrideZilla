import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: any;
  speed: number;

  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.setScale(.2, .2);
    this.speed = 100;

    return this;
  }


  update() {
    let xSpeed = 0;
    if (this.cursors.left.isDown) {
      xSpeed = -1 * this.speed;
    } else if (this.cursors.right.isDown) {
      xSpeed = this.speed;
    } else {
      xSpeed = 0
    }

    let ySpeed = 0;
    if (this.cursors.up.isDown) {
      ySpeed = -1 * this.speed;
    } else if (this.cursors.down.isDown) {
      ySpeed = this.speed;
    } else {
      ySpeed = 0
    }

    this.setVelocity(xSpeed, ySpeed);
  }
}
