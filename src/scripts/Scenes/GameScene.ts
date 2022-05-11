import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;
  enemy;
  cake;
  shoes;
  flower;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  // pedestal for the bride, mannequins, window shop, 
  //adding game play features(timer,score,text,mini games
  //change game point of view
  preload() {
    this.load.image('player', new URL('../../assets/myPlayer.png', import.meta.url).href);
    this.load.image('background', new URL('../../assets/background5.png', import.meta.url).href);
    this.load.image('enemy', new URL('../../assets/myEnemy.png', import.meta.url).href);
    this.load.image('flower', new URL('../../assets/flower.png', import.meta.url).href);
    this.load.image('cake', new URL('../../assets/cake.png', import.meta.url).href);
    this.load.image('shoes', new URL('../../assets/shoes.png', import.meta.url).href);
  }

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;

    this.add.image(gameWidth / 2, gameHeight / 2, 'background');
    this.enemy = this.physics.add.sprite(260, 280, 'enemy').setScale(.2, .2).setImmovable(true);
    this.shoes = this.physics.add.sprite(700, 200, 'shoes').setScale(.1, .1).setImmovable(true);
    this.cake = this.physics.add.sprite(1125, 400, 'cake').setScale(.4, .4).setImmovable(true);
    this.flower = this.physics.add.sprite(500, 640, 'flower').setScale(.3, .3).setImmovable(true);
    this.player = new Player(this, gameWidth / 2, gameHeight / 2);

    this.physics.add.collider(this.player, this.enemy, () => {
      console.log('Brides are really awsome');
    });

    this.physics.add.collider(this.player, this.flower, () => {
      console.log('i have reached the flowers');
    });

    this.physics.add.collider(this.player, this.cake, () => {
      console.log('i have reached the cake');
    });

    this.physics.add.collider(this.player, this.shoes, () => {
      console.log('i have reached the shoes');
    });
  }

  update() {
    this.player.update();
  }
}
