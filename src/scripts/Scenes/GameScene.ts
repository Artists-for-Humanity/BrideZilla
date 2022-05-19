import Phaser from 'phaser';
import Player from '../Sprites/Player';
import {
  colors
} from '../constants';

export default class GameScene extends Phaser.Scene {
  player;
  enemy;
  cake;
  shoes;
  flower;
  pedestal;
  text;
  timeLimit = 300;
  activeTime = false;
  currentTime = 0;
  gameOver = false;



  constructor() {
    super({
      key: 'GameScene',
    });
  }


  preload() {
    this.load.image('player', new URL('../../assets/myplayer.png', import.meta.url).href);
    this.load.image('background', new URL('../../assets/myBackground.png', import.meta.url).href);
    this.load.image('pedestal', new URL('../../assets/pedestal.png', import.meta.url).href);
    this.load.image('enemy', new URL('../../assets/myEnemy.png', import.meta.url).href);
    this.load.image('flower', new URL('../../assets/flower.png', import.meta.url).href);
    this.load.image('cake', new URL('../../assets/cake.png', import.meta.url).href);
    this.load.image('shoes', new URL('../../assets/shoes.png', import.meta.url).href);

    this.load.spritesheet('moveright', new URL('../../assets/boxR.png',
      import.meta.url).href, {
      frameWidth: 437,
      frameHeight: 475
    });

    this.load.spritesheet('moveleft', new URL('../../assets/boxL.png',
      import.meta.url).href, {
      frameWidth: 437,
      frameHeight: 475
    });

    this.load.spritesheet('moveup', new URL('../../assets/boxU.png',
      import.meta.url).href, {
      frameWidth: 437,
      frameHeight: 475
    });

    this.load.spritesheet('movedown', new URL('../../assets/boxD.png',
      import.meta.url).href, {
      frameWidth: 437,
      frameHeight: 475
    });

  }

  create() {
    const gameWidth: number = this.game.config.width as number;
    const gameHeight: number = this.game.config.height as number;

    this.add.image(gameWidth / 2, gameHeight / 2, 'background');
    this.pedestal = this.physics.add.sprite(100, 440, 'pedestal').setScale(2, 2);
    this.pedestal.setSize(90, 50);
    this.cake = this.physics.add.sprite(1125, 500, 'cake').setScale(1.2, 1.2).setImmovable(true);
    this.cake.setSize(100, 150);
    this.enemy = this.physics.add.sprite(100, 350, 'enemy').setScale(.2, .2).setImmovable(true);
    this.enemy.setSize(900, 900);
    this.shoes = this.physics.add.sprite(650, 100, 'shoes').setScale(0.7).setImmovable(true);
    this.shoes.setSize(90, 90);
    this.flower = this.physics.add.sprite(700, 650, 'flower').setScale(1.4, 1.4).setImmovable(true);
    this.flower.setSize(70, 100);

    this.player = new Player(this, gameWidth / 2, gameHeight / 2);


    this.text = this.add.text(50, 50, 'timer: ', {
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

    this.anims.create({
      key: 'moveright',
      frames: [{
        key: 'moveright',
        frame: 0
      },
      {
        key: 'moveright',
        frame: 1
      },
      {
        key: 'moveright',
        frame: 2
      }
      ],
      frameRate: 15,
      repeat: -1
    });

    this.anims.create({
      key: 'moveleft',
      frames: [{
        key: 'moveleft',
        frame: 0
      },
      {
        key: 'moveleft',
        frame: 1
      },
      {
        key: 'moveleft',
        frame: 2
      }
      ],
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: 'idle',
      frames: [{
        key: 'movedown',
        frame: 0
      },
      ],
      frameRate: 15,
    });
  }

  update(time, delta) {
    this.currentTime += delta;

    this.player.update();
    this.timer();
    this.setScoreText();
    this.gameIsOver();
  }

  setScoreText() {
    this.text.setText('Time: ' + this.timeLimit)
  }
  gameIsOver() {
    if (this.timeLimit === 0) {
      this.gameOver = true;
    }
    if (this.gameOver) {
      this.scene.start('GameOverScene');

    }
  }

  timer() {
    if (this.activeTime === false) {
      console.log('timeLimit:' + this.timeLimit);
      this.timeLimit -= 1;
      this.activeTime = true;
      this.currentTime = 0;
    }
    if (this.activeTime === true && this.currentTime > 1000) {
      this.currentTime -= 1000;
      this.activeTime = false;
    }

  }
}
