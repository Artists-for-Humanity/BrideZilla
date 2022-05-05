import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  player;
  enemy;
  cake;
  shoes;
  flower;

  //sound; Phaser.Sound.NoAudioSoundManager | Phaser.Sound.HTML5AudioSoundManager | Phaser.Sound.WebAudioSoundManager;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  // Modifing game scene size, and modfing object sizes
  // adust the game hieght and width, adjust the background image
  // adjust postion of two objects
  // Set scale of game objects 
  //adding game play features(timer,score,text,mini games)
  preload() {
    this.load.image('player', new URL('../../assets/myPlayer.png', import.meta.url).href);
    this.load.image('background', new URL('../../assets/mybackground.png', import.meta.url).href);
    this.load.image('enemy', new URL('../../assets/myEnemy.png', import.meta.url).href);
    this.load.image('flower', new URL('../../assets/flower.png', import.meta.url).href);
    this.load.image('cake', new URL('../../assets/cake.png', import.meta.url).href);
    this.load.image('shoes', new URL('../../assets/shoes.png', import.meta.url).href);
  }

  create() {
    console.log("create");
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'background');
    this.player = new Player(this, gameWidth / 2, gameHeight / 2);
    //this.player = this.physics.add.sprite(480, 360, 'player').setScale(.3, .3);
    this.enemy = this.physics.add.sprite(160, 180, 'enemy').setScale(.3, .3);
    this.shoes = this.physics.add.sprite(1140, 120, 'shoes').setScale(.1, .1);
    this.cake = this.physics.add.sprite(1125, 600, 'cake').setScale(.4, .4);
    this.flower = this.physics.add.sprite(85, 590, 'flower').setScale(.5, .5);
    this.physics.add.collider(this.player, this.enemy, () => {
      console.log('i have reached the bride');
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
