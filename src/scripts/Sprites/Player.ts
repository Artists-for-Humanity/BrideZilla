import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: any;
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.setScale(.4, .4);

    return this;
  }

  update() {
    if (this.cursors.left.isDown) {
      this.x -= 5;
    }
    if (this.cursors.right.isDown) {
      this.x += 10;
    }
    if (this.cursors.up.isDown) {
      this.y -= 10;
    }
    if (this.cursors.down.isDown) {
      this.y += 10;
    }
  }
}
