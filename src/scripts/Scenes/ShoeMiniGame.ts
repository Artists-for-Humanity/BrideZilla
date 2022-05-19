import Phaser from 'phaser';
import Player from '../Sprites/Player';

export default class ShoeMiniGame extends Phaser.Scene {
  shoes;
  colors = ['0x212529', '0x9a8c98', '0x3f37c9']
  frames = [
    'shoe1',
    'shoe2',
  ];
  constructor() {
    super({
      key: 'ShoeMiniGame',
    });

  }

  preload() {
    this.load.image('ShoeMiniGame', new URL('../../assets/ShoeMiniGame.png', import.meta.url).href);
    this.load.image('shoe2', new URL('../../assets/rightshoe.png', import.meta.url).href);
    this.load.image('shoe3', new URL('../../assets/leftshoe.png', import.meta.url).href);



  }

  // Making l&R shoe the same color
  //make a for loop, numloops = the number of pairs we are adding 
  // Index num = the Index for the hex color code
  // Add additional pairs of shoes

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'ShoeMiniGame');
    this.add.image(950, 610, 'shoe2').setScale(.2, .2);
    //310 and 950 for the sides of the box
    //450 and 
    this.shoes = this.physics.add.group()

    this.setImage();

    this.input.topOnly = false;

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    this.shoes.getChildren().forEach((shoe) => {
      shoe.setInteractive({ draggable: true });
    });

    this.input.on('drag', function (pointer, gameobject, dragX, dragY) {
      gameobject.x = dragX;
      gameobject.y + dragY;
    })
  }

  setImage() {
    for (let i = 0; i < this.colors.length; i++) {
      this.shoes.create(Phaser.Math.Between(310, 950), Phaser.Math.Between(450, 610), 'shoe2').setScale(.4, .4).setTint(this.colors[i]);
      this.shoes.create(Phaser.Math.Between(310, 950), Phaser.Math.Between(450, 610), 'shoe3').setScale(.4, .4).setTint(this.colors[i]);

    }
  }


  update() { }
}