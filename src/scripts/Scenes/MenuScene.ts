import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { colors } from '../constants';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image(
      'menu-scene-text',
      new URL('../../assets/menu-scene-text.png', import.meta.url).href
    );
  }

  create() {

    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'menu-scene-text');
    const textStyle = {
      fontFamily: 'Space Mono',
      fontSize: '32px',
      fontStyle: 'bold',
      fill: colors.white,
      align: 'center',
    }

    WebFont.load({
      custom: {
        families: ['Space Mono'],
      },
      active: () => {
        this.add
          .text(
            gameWidth / 2,
            gameHeight * (2 / 3),
            'You can change me in MenuScene.js',
            textStyle
          )
          .setOrigin(0.5);
      },
    });

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('GameScene');
    });
  }
}
