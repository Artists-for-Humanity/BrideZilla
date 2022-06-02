import Phaser from "../snowpack/pkg/phaser.js";
import MenuScene from "./Scenes/MenuScene.js";
import GameScene from "./Scenes/GameScene.js";
import GameOverScene from "./Scenes/GameOverScene.js";
import ShoeMiniGame from "./Scenes/ShoeMiniGame.js";
import CakeMiniGame from "./Scenes/CakeMiniGame.js";
import FlowerMiniGame from "./Scenes/FlowerMiniGame.js";
import GlobalState from "./GlobalState.js";
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: "#7B97AE",
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      },
      debug: false
    }
  },
  scene: [MenuScene, GameScene, FlowerMiniGame, ShoeMiniGame, CakeMiniGame, GameOverScene],
  audio: {
    disableWebAudio: true
  },
  plugins: {
    global: [
      {
        key: "GlobalState",
        plugin: GlobalState,
        start: false,
        mapping: "globalState"
      }
    ]
  }
};
new Phaser.Game(config);
