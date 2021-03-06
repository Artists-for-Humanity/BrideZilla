import Phaser from 'phaser';

class GlobalState extends Phaser.Plugins.BasePlugin {
    score = 0;
    gameTime = 5;
    activeTime = false;
    currentTime = 0;
    text;
    gameOver = false;
    constructor(pluginManager) {
        super(pluginManager);
    }

    gameIsOver(scene: Phaser.Scenes.ScenePlugin) {
        if (this.gameTime === 0) {
            this.gameOver = true;
        }
        if (this.gameOver) {
            this.resetGame();
            scene.start('GameOverScene');
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
        this.gameTime = 5;
        this.gameOver = false;
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