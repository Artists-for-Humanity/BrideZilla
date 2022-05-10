import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class GameScene extends Phaser.Scene {
  start;
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image('menuscreen', new URL('../../assets/menuscreen.png', import.meta.url).href);
    this.load.image('start', new URL('../../assets/start.png', import.meta.url).href);

  }

  //change the name of game
  create() {

    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'menuscreen');
    const textStyle = {
      fontFamily: 'Space Mono',
      fontSize: '32px',
      fontStyle: 'bold',
      fill: colors.white,
      align: 'center',
    }
    this.start = this.add.image(gameWidth - 955, gameHeight - 310, 'start').setScale(.68, .5);
    console.log(this.start);
    // this.start.setVisible(false);
    this.start.setInteractive();
    this.start.on('pointerdown', () => {
      console.log('start');
      this.scene.start('GameScene');
    });

    //  WebFont.load({
    //     custom: {
    //       families: ['Space Mono'],
    //     },
    //     active: () => {
    //       this.add
    //         .text(
    //           gameWidth / 2,
    //           gameHeight * (2 / 3),
    //           'You can change me in MenuScene.js',
    //           textStyle
    //         )
    //         .setOrigin(0.5);
    //     },
    //   });

    // this.input.keyboard.on('keydown-SPACE', () => {
    //   this.scene.start('GameScene');
    // });
  }
}
