import Phaser from 'phaser';
class GlobalState extends Phaser.Plugins.BasePlugin {
    score = 0;
    gameTime = 10;
    activeTime = false;
    currentTime = 0;
    text;
    constructor(pluginManager) {
        super(pluginManager);
    }

    createText() {
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
    }

    setScoreText() {
        this.text.setText('Time: ' + this.gameTime)
    }

    update(time, delta) {
        // console.log('reach me');
        this.currentTime += delta;
        // console.log(this.currentTime);
        this.timer()

    }

    resetGame() {
        this.score = 0;
        this.gameTime = 10;
        // console.log('global state works fine' + this.gameTime);
    }

    incrementScore() {
        this.score++;
    }

    timer() {
        if (this.activeTime === false) {

            this.gameTime -= 1;
            this.activeTime = true;
            this.currentTime = 0;
            this.incrementScore();
        }
        if (this.activeTime === true && this.currentTime > 1000) {
            this.currentTime -= 1000;
            this.activeTime = false;
        }
    }
}
export default GlobalState;