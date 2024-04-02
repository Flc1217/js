
class victory extends Phaser.Scene {
    constructor() {
        super({ key: 'victory' });
    }

    preload() {

        // Step 1, load JSON
        // simple Main Page image
        this.load.image('victoryimg', 'assets/victory.png');
        this.load.audio("winsound", "assets/win.wav");

    }

    create() {
        this.winSnd = this.sound.add("winsound").setVolume(0.4);
        this.add.image(0, 0, 'victoryimg').setOrigin(0, 0);

        this.winSnd.play();
}
}