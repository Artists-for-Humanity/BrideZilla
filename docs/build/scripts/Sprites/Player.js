import Phaser from "../../_snowpack/pkg/phaser.js";
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "movedown");
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.setScale(0.3, 0.3);
    this.speed = 200;
    this.direction = "idle";
    return this;
  }
  update() {
    this.setDirection();
    this.move();
  }
  setDirection() {
    if (this.cursors.up.isDown) {
      this.direction = "up";
      return;
    }
    if (this.cursors.down.isDown) {
      this.direction = "down";
      return;
    }
    if (this.cursors.left.isDown) {
      this.direction = "left";
      return;
    }
    if (this.cursors.right.isDown) {
      this.direction = "right";
      return;
    }
    this.direction = "idle";
  }
  move() {
    if (this.direction === "up") {
      this.anims.play("moveup", true);
      this.setVelocity(0, -1 * this.speed);
      return;
    }
    if (this.direction === "down") {
      this.anims.play("movedown", true);
      this.setVelocity(0, this.speed);
      return;
    }
    if (this.direction === "left") {
      this.anims.play("moveleft", true);
      this.setVelocity(-1 * this.speed, 0);
      return;
    }
    if (this.direction === "right") {
      this.anims.play("moveright", true);
      this.setVelocity(this.speed, 0);
      return;
    }
    if (this.direction === "idle") {
      this.anims.play("idle", true);
      this.setVelocity(0, 0);
      return;
    }
  }
}
