import Phaser from 'phaser';
class GlobalState extends Phaser.Plugins.BasePlugin {
    score = 0;
    gameTime = 10;
    activeTime = false;
    currentTime = 0;
    text;
    gameOver = false;
    constructor(pluginManager) {
        super(pluginManager);
    }

    gameIsOver() {
        if (this.gameTime === 0) {
            this.gameOver = true;
        }
        if (this.gameOver) {
            // this.scene.start('GameOverScene');
            this.pluginManager.game.scene.start('GameOverScene');
        }
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