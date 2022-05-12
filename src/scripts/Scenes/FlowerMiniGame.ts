import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class FlowerMiniGame extends Phaser.Scene {
  flowerstem;
  flowerpetal;
  flowerbud;
  constructor() {
    super({
      key: 'FlowerMiniGame',
    });
  }

  preload() {
    this.load.image('flowerMiniGame', new URL('../../assets/flowerminigamebg.png', import.meta.url).href);
    this.load.image('stem', new URL('../../assets/stem.png', import.meta.url).href);
    this.load.image('petal', new URL('../../assets/petal.png', import.meta.url).href);
    this.load.image('flowerbud', new URL('../../assets/flowerbud.png', import.meta.url).href);


  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'flowerMiniGame');
    //this.load.image('stem', new URL('../../assets/stem.png', import.meta.url).href);
    this.flowerstem = this.add.image(500, 400, 'stem');
    this.flowerpetal = this.add.image(500, 250, 'petal').setScale(.2, .2);
    this.flowerbud = this.add.image(500, 300, 'flowerbud');





  }


  update() { }
}
