import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.load.image('gameover', new URL('../../assets/Gameoverscene.png', import.meta.url).href);
  }


  create() { }




  update() { }
}
