import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class CakeMiniGame extends Phaser.Scene {

  constructor() {
    super({
      key: 'CakeMiniGame',
    });
  }

  preload() {
    this.load.image('cakeMiniGame', new URL('../../assets/CakeMiniGame.png', import.meta.url).href);
  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'cakeMiniGame');
  }




  update() { }
}
