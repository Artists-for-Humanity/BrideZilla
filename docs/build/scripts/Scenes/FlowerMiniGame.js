import * as __SNOWPACK_ENV__ from '../../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';
__SNOWPACK_ENV__ = __SNOWPACK_ENV__;

import Phaser from "../../_snowpack/pkg/phaser.js";
export default class FlowerMiniGame extends Phaser.Scene {
  constructor() {
    super({
      key: "FlowerMiniGame"
    });
    this.numPetals = 5;
  }
  preload() {
    this.load.image("flowerMiniGame", new URL("../../assets/flowerminigamebg.png", import.meta.url).href);
    this.load.image("petal", new URL("../../assets/petal.png", import.meta.url).href);
    this.load.image("flowerbud", new URL("../../assets/flowerbud.png", import.meta.url).href);
  }
  create() {
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    this.add.image(gameWidth / 2, gameHeight / 2, "flowerMiniGame");
    this.flowerpetals = this.physics.add.group();
    this.setFlowerPetals();
    this.flowerbud = this.add.image(640, 300, "flowerbud");
    console.log(this.flowerpetals);
    console.log("I did not something ");
    this.flowerpetals.getChildren().forEach(function(petal) {
      console.log(petal);
      petal.setInteractive({draggable: true});
    });
    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  }
  update() {
  }
  setFlowerPetals() {
    let x = 640;
    let y = 250;
    let r = 0;
    for (let i = 0; i < this.numPetals; i++) {
      if (i === 1) {
        console.log("hey 00: " + x + " " + y, i);
        r = 1;
        x += 50;
        y += 35;
      }
      if (i === 2) {
        console.log("hey 01", x, y, i);
        r = 2;
        x -= 15;
        y += 50;
      }
      if (i === 3) {
        console.log("hey 02", x, y, i);
        r = 3.5;
        x -= 50;
        y -= 5;
      }
      if (i === 4) {
        console.log("hey 03", x, y, i);
        r = 5;
        x -= 20;
        y -= 50;
      }
      this.flowerpetals.create(x, y, "petal").setScale(0.2, 0.2).rotation += r;
    }
  }
}
