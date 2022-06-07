import Phaser from 'phaser';
import Player from '../Sprites/Player';
import { colors } from '../constants';

export default class ShoeMiniGame extends Phaser.Scene {
  shoes;
  globalState: any;
  colors = [colors.EerieBlack, colors.glossyGape, colors.LanguidLavendar, colors.blueSapphire, colors.naplesYellow, colors.pinkLavender, colors.coffee, colors.liver, colors.lightSlateGray, colors.cinnamonSatin, colors.bloodRed, colors.miniPink, colors.ashGray, colors.aeroBlue, colors.polishedPine]
  shoeL = [
    'shoeL00',
    'shoeL01',
    'shoeL02',
    'shoeL03',
    'shoeL04',
    'shoeL05',
    'shoeL06',
    'shoeL07',
    'shoeL08',
    'shoeL09',
    'shoeL10',
    'shoeL11',
    'shoeL12',
    'shoeL13',
    'shoeL14',
  ];

  shoeR = [
    'shoeR00',
    'shoeR01',
    'shoeR02',
    'shoeR03',
    'shoeR04',
    'shoeR05',
    'shoeR06',
    'shoeR07',
    'shoeR08',
    'shoeR09',
    'shoeR10',
    'shoeR11',
    'shoeR12',
    'shoeR13',
    'shoeR14',
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
    this.load.image('shoeL01', new URL('../../assets/Bridezilla_shoes/leftshoe01.png', import.meta.url).href);
    this.load.image('shoeR02', new URL('../../assets/Bridezilla_shoes/rightshoe02.png', import.meta.url).href);
    this.load.image('shoeL02', new URL('../../assets/Bridezilla_shoes/leftshoe02.png', import.meta.url).href);
    this.load.image('shoeR03', new URL('../../assets/Bridezilla_shoes/rightshoe03.png', import.meta.url).href);
    this.load.image('shoeL03', new URL('../../assets/Bridezilla_shoes/leftshoe03.png', import.meta.url).href);
    this.load.image('shoeR04', new URL('../../assets/Bridezilla_shoes/rightshoe04.png', import.meta.url).href);
    this.load.image('shoeL04', new URL('../../assets/Bridezilla_shoes/leftshoe04.png', import.meta.url).href);
    this.load.image('shoeR05', new URL('../../assets/Bridezilla_shoes/rightshoe05.png', import.meta.url).href);
    this.load.image('shoeL05', new URL('../../assets/Bridezilla_shoes/leftshoe05.png', import.meta.url).href);
    this.load.image('shoeR06', new URL('../../assets/Bridezilla_shoes/rightshoe06.png', import.meta.url).href);
    this.load.image('shoeL06', new URL('../../assets/Bridezilla_shoes/leftshoe06.png', import.meta.url).href);
    this.load.image('shoeR07', new URL('../../assets/Bridezilla_shoes/rightshoe07.png', import.meta.url).href);
    this.load.image('shoeL07', new URL('../../assets/Bridezilla_shoes/leftshoe07.png', import.meta.url).href);
    this.load.image('shoeR08', new URL('../../assets/Bridezilla_shoes/rightshoe08.png', import.meta.url).href);
    this.load.image('shoeL08', new URL('../../assets/Bridezilla_shoes/leftshoe08.png', import.meta.url).href);
    this.load.image('shoeR09', new URL('../../assets/Bridezilla_shoes/rightshoe09.png', import.meta.url).href);
    this.load.image('shoeL09', new URL('../../assets/Bridezilla_shoes/leftshoe09.png', import.meta.url).href);
    this.load.image('shoeR10', new URL('../../assets/Bridezilla_shoes/rightshoe10.png', import.meta.url).href);
    this.load.image('shoeL10', new URL('../../assets/Bridezilla_shoes/leftshoe10.png', import.meta.url).href);
    this.load.image('shoeR11', new URL('../../assets/Bridezilla_shoes/rightshoe11.png', import.meta.url).href);
    this.load.image('shoeL11', new URL('../../assets/Bridezilla_shoes/leftshoe11.png', import.meta.url).href);
    this.load.image('shoeR12', new URL('../../assets/Bridezilla_shoes/rightshoe12.png', import.meta.url).href);
    this.load.image('shoeL12', new URL('../../assets/Bridezilla_shoes/leftshoe12.png', import.meta.url).href);
    this.load.image('shoeR13', new URL('../../assets/Bridezilla_shoes/rightshoe13.png', import.meta.url).href);
    this.load.image('shoeL13', new URL('../../assets/Bridezilla_shoes/leftshoe13.png', import.meta.url).href);
    this.load.image('shoeR14', new URL('../../assets/Bridezilla_shoes/rightshoe14.png', import.meta.url).href);
    this.load.image('shoeL14', new URL('../../assets/Bridezilla_shoes/leftshoe14.png', import.meta.url).href);
  }

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

      this.shoes.create(Phaser.Math.Between(310, 950), Phaser.Math.Between(450, 610), this.shoeL[i]).setScale(1, 1).setTint(this.colors[i]);
      this.shoes.create(Phaser.Math.Between(310, 950), Phaser.Math.Between(450, 610), this.shoeR[i]).setScale(1, 1).setTint(this.colors[i]);
      console.log(i)
    }
  }


  update() {
    this.globalState.setScoreText();

  }
}