import * as __SNOWPACK_ENV__ from '../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import Phaser from "../../snowpack/pkg/phaser.js";
import {colors} from "../constants.js";
export default class GameScene extends Phaser.Scene {
  constructor() {
    super({key: "MenuScene"});
  }
  preload() {
    this.load.image("menuscreen", new URL("../../assets/menuscene.png", import.meta.url).href);
    this.load.image("start", new URL("../../assets/start.png", import.meta.url).href);
  }
  create() {
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    this.add.image(gameWidth / 2, gameHeight / 2, "menuscreen");
    console.log("hello");
    const textStyle = {
      fontFamily: "Space Mono",
      fontSize: "32px",
      fontStyle: "bold",
      fill: colors.white,
      align: "center"
    };
    this.start = this.add.image(gameWidth - 910, gameHeight - 365, "start").setScale(0.68, 0.5);
    this.start.setInteractive();
    this.start.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
