import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameOverScene extends Phaser.Scene {
  restart;
  constructor() {
    super({
      key: 'GameOverScene',
    });
  }

  preload() {
    this.load.image('gameover', new URL('../../assets/GameOverscene.png', import.meta.url).href);
    this.load.image('restart', new URL('../../assets/restartbutton.png', import.meta.url).href);

  }

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'gameover');
    this.restart = this.add.image(gameWidth - 776, gameHeight - 402, 'restart').setScale(.5, .5);
    this.restart.setInteractive();
    this.restart.on('pointerdown', () => {
      this.scene.start('MenuScene');
    });
  }

  update() { }
}
