import Phaser from 'phaser';
class GlobalState extends Phaser.Plugins.BasePlugin {
    score = 0;
    timer = 30;
    constructor(pluginManager) {
        super(pluginManager);
    }

    resetGame() {
        this.score = 0;
        this.timer = 30;
        console.log('global state works fine' + this.timer);
    }

    incrementScore() {
        this.score++;
    }
}
export default GlobalState;