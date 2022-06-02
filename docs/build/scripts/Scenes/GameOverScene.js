import * as __SNOWPACK_ENV__ from '../../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';
__SNOWPACK_ENV__ = __SNOWPACK_ENV__;

import Phaser from "../../_snowpack/pkg/phaser.js";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOverScene"
    });
  }
  preload() {
    this.load.image("gameover", new URL("../../assets/GameOverscene.png", import.meta.url).href);
    this.load.image("restart", new URL("../../assets/restartbutton.png", import.meta.url).href);
  }
  create() {
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    this.add.image(gameWidth / 2, gameHeight / 2, "gameover");
    this.restart = this.add.image(gameWidth - 776, gameHeight - 402, "restart").setScale(0.5, 0.5);
    this.restart.setInteractive();
    this.restart.on("pointerdown", () => {
      this.scene.start("MenuScene");
    });
  }
  update() {
  }
}
