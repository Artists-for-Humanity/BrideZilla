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
    this.load.image('shoeR00', new URL('../../assets/Bridezilla_shoes/rightshoe00.png', import.meta.url).href);
    this.load.image('shoeL00', new URL('../../assets/Bridezilla_shoes/leftshoe00.png', import.meta.url).href);
    this.load.image('shoeR01', new URL('../../assets/Bridezilla_shoes/rightshoe01.png', import.meta.url).href);
    this.load.image('shoeL02', new URL('../../assets/Bridezilla_shoes/leftshoe01.png', import.meta.url).href);


  }

  // Making l&R shoe the same color
  //make a for loop, numloops = the number of pairs we are adding 
  // Index num = the Index for the hex color code
  // Add additional pairs of shoes

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;
    this.add.image(gameWidth / 2, gameHeight / 2, 'ShoeMiniGame');
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
      this.shoes.create(Phaser.Math.Between(310, 950), Phaser.Math.Between(450, 610), 'shoeR00').setScale(1, 1).setTint(this.colors[i]).setSize(65, 65);
      this.shoes.create(Phaser.Math.Between(310, 950), Phaser.Math.Between(450, 610), 'shoeL00').setScale(1, 1).setTint(this.colors[i]);

    }
  }


  update() { }
}