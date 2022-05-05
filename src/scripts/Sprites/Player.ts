import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: any;
  gameSpeed: any;
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.setScale(.2, .2);
    this.gameSpeed = 5;

    return this;
  }

  update() {
    if (this.cursors.left.isDown) {
      this.x -= this.gameSpeed;
    }
    if (this.cursors.right.isDown) {
      this.x += this.gameSpeed;
    }
    if (this.cursors.up.isDown) {
      this.y -= this.gameSpeed;
    }
    if (this.cursors.down.isDown) {
      this.y += this.gameSpeed;
    }
  }
}
