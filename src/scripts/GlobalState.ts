import Phaser from 'phaser';

class GlobalState extends Phaser.Plugins.BasePlugin {
    score = 0;
<<<<<<< HEAD
    gameTime;
=======
    gameTime = 20;
>>>>>>> ea555eda66676f6d237bd5f11c13eff641e63d77
    activeTime = false;
    currentTime = 0;
    text;
    gameOver = false;
    constructor(pluginManager) {
        super(pluginManager);
        this.resetGame();
    }

    gameIsOver(scene: Phaser.Scenes.ScenePlugin) {
        if (this.gameTime === 0) {
            this.gameOver = true;
        }
        // console.log('im working')
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
        console.log(this.gameOver);
        if (!this.gameOver) {
            this.timer();
        }

    }

    resetGame() {
        this.score = 0;
<<<<<<< HEAD
        this.gameTime = 3;
=======
        this.gameTime = 20;
>>>>>>> ea555eda66676f6d237bd5f11c13eff641e63d77
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