import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;

  constructor() {
    super({
      key: 'GameScene',
    });
  }
  //Add background (place holder)
  //Add the player's sprite, and set its properties
  //Add input for player's actions
  //Add emeny's sprite
  //adding interactions bewteen player's sprite and objects
  //adding game play features(timer,score,text,mini games)
  preload() {
    this.load.image('spraycan', new URL('../../assets/spraycan.png', import.meta.url).href);
  }

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.player = new Player(this, gameWidth / 2, gameHeight / 2);
  }

  update() {
    this.player.update();
  }
}
