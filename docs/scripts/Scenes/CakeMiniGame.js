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
  createText() {
    this.globalState.text = this.add.text(50, 50, "timer: ", {
      fontFamily: "Luminari Regular",
      fontSize: "30px",
      align: "center",
      fontStyle: "normal",
      stroke: "#000000",
      strokeThickness: 8,
      shadow: {
        blur: 42
      }
    });
  }
  create() {
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    this.add.image(gameWidth / 2, gameHeight / 2, "cakeMiniGame");
    this.createText();
  }
  update(time, delta) {
    this.globalState.update(time, delta);
    this.globalState.setScoreText();
    this.globalState.gameIsOver();
  }
}
