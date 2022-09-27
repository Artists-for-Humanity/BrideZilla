import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  start;
  graphics
  startBounds;

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
    console.log('helloo 00')

    // this.start = this.add.image(gameWidth - 910, gameHeight - 365, 'start').setScale(.68, .5);
    const start = this.add.image(gameWidth - 910, gameHeight - 365, 'start').setScale(.68, .5).setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        // this.scene.start('GameScene');
        console.log('helloo 01')

      })

    // this.start.setInteractive();
    // this.start.on('pointerdown', () => {
    //   this.scene.start('GameScene');
    //   console.log('helloo 01')
    // });

    this.graphics = this.add.graphics();
    this.startBounds = start.getBounds();


  }

  update() {
    // this.start.rotation += 0.013;
    this.graphics.lineStyle(1, 0xff0000);
    this.graphics.strokeRectShape(this.startBounds);

  }
}
