import * as __SNOWPACK_ENV__ from '../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import Phaser from "../../snowpack/pkg/phaser.js";
export default class CakeMiniGame extends Phaser.Scene {
  constructor() {
    super({
      key: "CakeMiniGame"
    });
  }
  preload() {
    this.load.image("cakeMiniGame", new URL("../../assets/bgcake.png", import.meta.url).href);
  }
  create() {
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    this.add.image(gameWidth / 2, gameHeight / 2, "cakeMiniGame");
  }
  update() {
  }
}
