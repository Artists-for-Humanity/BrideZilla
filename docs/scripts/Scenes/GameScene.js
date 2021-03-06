import * as __SNOWPACK_ENV__ from '../../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import Phaser from "../../snowpack/pkg/phaser.js";
import Player from "../Sprites/Player.js";
export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene"
    });
  }
  preload() {
    this.load.image("player", new URL("../../assets/myplayer.png", import.meta.url).href);
    this.load.image("background", new URL("../../assets/myBackground.png", import.meta.url).href);
    this.load.image("pedestal", new URL("../../assets/pedestal.png", import.meta.url).href);
    this.load.image("enemy", new URL("../../assets/myenemy.png", import.meta.url).href);
    this.load.image("flower", new URL("../../assets/flower.png", import.meta.url).href);
    this.load.image("cake", new URL("../../assets/cake.png", import.meta.url).href);
    this.load.image("shoes", new URL("../../assets/shoes.png", import.meta.url).href);
    this.load.spritesheet("idle", new URL("../../assets/walkingD.png", import.meta.url).href, {
      frameWidth: 530,
      frameHeight: 597
    });
    this.load.spritesheet("moveright", new URL("../../assets/walkingR.png", import.meta.url).href, {
      frameWidth: 530,
      frameHeight: 597
    });
    this.load.spritesheet("moveleft", new URL("../../assets/walkingL.png", import.meta.url).href, {
      frameWidth: 530,
      frameHeight: 597
    });
    this.load.spritesheet("moveup", new URL("../../assets/walkingU.png", import.meta.url).href, {
      frameWidth: 530,
      frameHeight: 597
    });
    this.load.spritesheet("movedown", new URL("../../assets/walkingD.png", import.meta.url).href, {
      frameWidth: 530,
      frameHeight: 597
    });
  }
  create() {
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    this.add.image(gameWidth / 2, gameHeight / 2, "background");
    this.pedestal = this.physics.add.sprite(100, 440, "pedestal").setScale(2.5, 2.5).setImmovable(true);
    this.pedestal.setSize(90, 50);
    this.cake = this.physics.add.sprite(1125, 500, "cake").setScale(0.7, 0.7).setImmovable(true);
    this.cake.setSize(100, 150);
    this.enemy = this.physics.add.sprite(120, 320, "enemy").setScale(0.3, 0.3).setImmovable(true);
    this.enemy.setSize(900, 850);
    this.shoes = this.physics.add.sprite(650, 100, "shoes").setScale(0.7).setImmovable(true);
    this.shoes.setSize(90, 90);
    this.flower = this.physics.add.sprite(700, 650, "flower").setScale(1.4, 1.4).setImmovable(true);
    this.flower.setSize(70, 100);
    this.player = new Player(this, gameWidth / 2, gameHeight / 2);
    this.createText();
    console.log("hello");
    this.globalState.resetGame();
    this.physics.add.collider(this.player, this.enemy, () => {
    });
    this.physics.add.collider(this.player, this.flower, () => {
      this.scene.start("FlowerMiniGame");
    });
    this.physics.add.collider(this.player, this.cake, () => {
      this.scene.start("CakeMiniGame");
    });
    this.physics.add.collider(this.player, this.shoes, () => {
      this.scene.start("ShoeMiniGame");
    });
    this.anims.create({
      key: "idle",
      frames: [{
        key: "idle",
        frame: 1
      }]
    });
    this.anims.create({
      key: "moveright",
      frames: [
        {
          key: "moveright",
          frame: 0
        },
        {
          key: "moveright",
          frame: 1
        },
        {
          key: "moveright",
          frame: 2
        }
      ],
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "moveleft",
      frames: [
        {
          key: "moveleft",
          frame: 0
        },
        {
          key: "moveleft",
          frame: 1
        },
        {
          key: "moveleft",
          frame: 2
        }
      ],
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "moveup",
      frames: [
        {
          key: "moveup",
          frame: 0
        },
        {
          key: "moveup",
          frame: 1
        },
        {
          key: "moveup",
          frame: 2
        }
      ],
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "movedown",
      frames: [
        {
          key: "movedown",
          frame: 0
        },
        {
          key: "movedown",
          frame: 1
        },
        {
          key: "movedown",
          frame: 2
        }
      ],
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "moveright",
      frames: [
        {
          key: "moveright",
          frame: 0
        },
        {
          key: "moveright",
          frame: 1
        },
        {
          key: "moveright",
          frame: 2
        }
      ],
      frameRate: 15,
      repeat: -1
    });
  }
  update(time, delta) {
    this.player.update();
    this.globalState.update(time, delta);
    this.globalState.setScoreText();
    this.globalState.gameIsOver();
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
}
