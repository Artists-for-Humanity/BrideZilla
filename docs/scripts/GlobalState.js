import Phaser from "../snowpack/pkg/phaser.js";
class GlobalState extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);
    this.score = 0;
    this.gameTime = 30;
    this.activeTime = false;
    this.currentTime = 0;
    this.gameOver = false;
  }
  gameIsOver() {
    if (this.gameTime === 0) {
      this.gameOver = true;
    }
    if (this.gameOver) {
      this.resetGame();
      this.pluginManager.game.scene.start("GameOverScene");
    }
  }
  setScoreText() {
    this.text.setText("Time: " + this.gameTime);
  }
  update(time, delta) {
    this.currentTime += delta;
    this.timer();
  }
  resetGame() {
    this.score = 0;
    this.gameTime = 30;
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
    if (this.activeTime === true && this.currentTime > 1e3) {
      this.currentTime -= 1e3;
      this.activeTime = false;
    }
  }
}
export default GlobalState;
