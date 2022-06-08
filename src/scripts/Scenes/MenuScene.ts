import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class GameScene extends Phaser.Scene {
  start;
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image('menuscreen', new URL('../../assets/menuscene.png', import.meta.url).href);
    this.load.image('start', new URL('../../assets/start.png', import.meta.url).href);

  }

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'menuscreen');
    console.log('hello')
    const textStyle = {
      fontFamily: 'Space Mono',
      fontSize: '32px',
      fontStyle: 'bold',
      fill: colors.white,
      align: 'center',
    }
    this.start = this.add.image(gameWidth - 910, gameHeight - 365, 'start').setScale(.68, .5);
    this.start.setInteractive();
    this.start.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
