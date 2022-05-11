import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class FlowerMiniGame extends Phaser.Scene {

  constructor() {
    super({
      key: 'FlowerMiniGame',
    });
  }

  preload() {
    this.load.image('flowerMiniGame', new URL('../../assets/flowerminigamebg.png', import.meta.url).href);
  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'flowerMiniGame');
  }




  update() { }
}
