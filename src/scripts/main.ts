import Phaser from 'phaser';
import MenuScene from './Scenes/MenuScene';
import GameScene from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene';
import ShoeMiniGame from './Scenes/ShoeMiniGame';
import CakeMiniGame from './Scenes/CakeMiniGame';
import FlowerMiniGame from './Scenes/FlowerMiniGame';
import GlobalState from './GlobalState';

// Set configuration for phaser game instance
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#7B97AE',

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: true,
    },
  },
  scene: [MenuScene, GameScene, FlowerMiniGame, ShoeMiniGame, CakeMiniGame, GameOverScene],
  audio: {
    disableWebAudio: true,
  },
  plugins: {
    global: [
      {
        key: 'GlobalState',
        plugin: GlobalState,
        start: false,
        mapping: 'globalState'
      }
    ],
  },
};

// Initialize game instance
new Phaser.Game(config);
