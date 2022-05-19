import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: any;
  speed: number;
  xSpeed: number;
  ySpeed: number;

  constructor(scene, x, y) {
    super(scene, x, y, 'movedown');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.setScale(.2, .2);
    this.speed = 5;
    this.xSpeed = 0;
    this.ySpeed = 0;
    return this;
  }

  update() {
    this.move();
    // this.setVelocity(this.xSpeed, this.ySpeed);
  }

  move() {
    if (this.cursors.up.isDown) {
      this.y -= this.speed;
      this.anims.play('moveup', true);
      return;
      //up and walking up animation//
    }
    if (this.cursors.down.isDown) {
      this.y += this.speed;
      this.anims.play('movedown', true);

      return;
      //down and walking down animation//
    }
    if (this.cursors.left.isDown) {
      this.x -= this.speed;
      this.anims.play('moveleft', true);

      return;
      //left and walking left animation//
    }
    if (this.cursors.right.isDown) {
      this.anims.play('moveright', true);
      this.x += this.speed;
      return;
      //right and walking right animation//
    }

    this.anims.play('idle', true);


    // this.anims.play('idle', true);
  }
}
