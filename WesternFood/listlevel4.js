
class listlevel4 extends Phaser.Scene {
    constructor() {
        super({ key: 'listlevel4' });
    }

    preload() {

        // Step 1, load JSON
        // simple Main Page image
        this.load.image('listlevel4img', 'assets/listlevel4.png');
        // this.load.audio("bgm", "assets/song.mp3");

    }

    create() {
        // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
        // this.music.play();
        this.add.image(0, 0, 'listlevel4img').setOrigin(0, 0);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function () {
            console.log("Spacebar pressed, goto level4");
            this.scene.start("level4");
        }, this);

        // Step 2 : Preload any images here

    } // end of preload //
}