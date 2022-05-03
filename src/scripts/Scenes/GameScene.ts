import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

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
