import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class ShoeMiniGame extends Phaser.Scene {

  constructor() {
    super({
      key: 'ShoeMiniGame',
    });
  }

  preload() {
    this.load.image('ShoeMiniGame', new URL('../../assets/ShoeMiniGame.png', import.meta.url).href);
  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'ShoeMiniGame');
  }




  update() { }
}
