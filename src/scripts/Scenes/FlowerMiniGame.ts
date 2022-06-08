import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class FlowerMiniGame extends Phaser.Scene {
  flowerstem;
  flowerpetals;
  globalState: any;
  flowerbud;
  deadpetals;
  trashcan;
  numPetals = 5;
  removedpetals = 0;
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
    this.load.image('trashcan', new URL('../../assets/trashcan.png',
      import.meta.url).href);



  }


  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'flowerMiniGame');
    this.flowerpetals = this.physics.add.group();
    this.deadpetals = this.physics.add.group();
    this.trashcan = this.physics.add.sprite(225, 600, 'trashcan');

    this.setFlowerPetals();
    this.createText();
    this.flowerbud = this.add.image(625, 290, 'flowerbud').setScale(1.3, 1.3);

    console.log(this.deadpetals)

    this.deadpetals.getChildren().forEach((deadpetal) => {
      this.physics.add.collider(this.trashcan, deadpetal, () => {
        deadpetal.destroy();
        this.removedpetals += 1;
        console.log(this.removedpetals);

        // if (this.removedpetals === 1) {
        //   this.scene.start('Gamescene');
        // }
      });
    });


    this.physics.add.collider(this.trashcan, this.deadpetals, () => {
      console.log('i have reached the trashcan');
      // this.scene.start('FlowerMiniGame');
    });

    this.flowerpetals.getChildren().forEach(function (petal) {
      // console.log(petal);
      petal.setInteractive({ draggable: true });
    });
    this.deadpetals.getChildren().forEach(function (petal) {
      // console.log(petal);
      petal.setInteractive({ draggable: true });
    });
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

    });



  }


  update(time, delta) {
    this.globalState.update(time, delta);
    this.globalState.setScoreText();
    this.globalState.gameIsOver();
  }

  createText() {
    this.globalState.text = this.add.text(50, 50, 'timer: ', {
      fontFamily: 'Luminari Regular',
      fontSize: '30px',
      align: 'center',
      fontStyle: 'normal',
      stroke: '#000000',
      strokeThickness: 8,
      shadow: {
        blur: 42
      }
    });
  }


  setFlowerPetals() {
    let x1 = 620;
    let y1 = 250;
    let x2 = 530;
    let y2 = 350;
    let r = 1;
    for (let i = 0; i < this.numPetals; i++) {

      if (i === 1) {
        r = 2;
        x1 += 50;
        y1 += 35;
        x2 -= 5;
        y2 -= 105;
      }

      if (i === 2) {
        r = 3;
        x1 -= 15;
        y1 += 50;
        x2 += 100;
        y2 -= 60;

      }
      if (i === 3) {
        r = 4.5;
        x1 -= 50;
        y1 -= 5;
        x2 += 100;
        y2 += 65;

      }
      if (i === 4) {
        r = 6;
        x1 -= 20;
        y1 -= 50;
        x2 += 5;
        y2 += 100;
      }
      this.flowerpetals.create(x1, y1, 'petal').setScale(2.5, 2.5).rotation += r;
      this.deadpetals.create(x2, y2, 'deadpetal').setScale(.9, .9).rotation += r;


    }
  }
}