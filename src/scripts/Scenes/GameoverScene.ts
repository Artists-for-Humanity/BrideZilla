import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameOverScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'GameOverScene',
    });
  }

  preload() {
    this.load.image('gameover', new URL('../../assets/Gameoverscene.png', import.meta.url).href);
  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'gameover');
  }




  update() { }
}
