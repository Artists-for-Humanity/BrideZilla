import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class FlowerMiniGame extends Phaser.Scene {
  flowerstem;
  flowerpetals;
  // flowerpetal;
  flowerbud;
  deadpetals;
  numPetals = 5;
  constructor() {
    super({
      key: 'FlowerMiniGame',

    });
  }

  preload() {
    this.load.image('flowerMiniGame', new URL('../../assets/flowerminigamebg.png',
      import.meta.url).href);
    this.load.image('petal', new URL('../../assets/petal.png',
      import.meta.url).href);
    this.load.image('flowerbud', new URL('../../assets/flowerbud.png',
      import.meta.url).href);
    this.load.image('deadpetal', new URL('../../assets/deadpetal.png',
      import.meta.url).href);



  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'flowerMiniGame');
    this.flowerpetals = this.physics.add.group();
    this.deadpetals = this.physics.add.group();
    this.setFlowerPetals();
    //this.load.image('stem', new URL('../../assets/stem.png', import.meta.url).href);
    // this.flowerpetal = this.add.image(640, 250, 'petal').setScale(.2, .2);
    this.flowerbud = this.add.image(645, 300, 'flowerbud').setScale(1.3, 1.3);
    // this.flowerpetal.rotation += 1;
    console.log(this.flowerpetals);
    // this.input.setDraggable(this.flowerpetals);
    // this.flowerpetals.input.draggable = true;
    console.log('I did not something ');
    // this.flowerpetals.setInteractive();

    this.flowerpetals.getChildren().forEach(function (petal) {
      console.log(petal);
      petal.setInteractive({ draggable: true });
    });
    this.deadpetals.getChildren().forEach(function (petal) {
      console.log(petal);
      petal.setInteractive({ draggable: true });
    });
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

    });



  }


  update() { }


  setFlowerPetals() {
    let x = 640;
    let y = 250;
    let r = 0;
    for (let i = 0; i < this.numPetals; i++) {

      if (i === 1) {
        console.log('hey 00: ' + x + ' ' + y, i);
        r = 1;
        x += 50;
        y += 35;
      }

      if (i === 2) {
        console.log('hey 01', x, y, i);
        r = 2;
        x -= 15;
        y += 50;
      }
      if (i === 3) {
        console.log('hey 02', x, y, i);
        r = 3.5;
        x -= 50;
        y -= 5;
      }
      if (i === 4) {
        console.log('hey 03', x, y, i);
        r = 5;
        x -= 20;
        y -= 50;
      }
      this.flowerpetals.create(x, y, 'petal').setScale(2.5, 2.5).rotation += r;
      this.deadpetals.create(x, y, 'deadpetal').setScale(.9, .9).rotation += r;


    }
  }
}