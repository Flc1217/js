
class listlevel3 extends Phaser.Scene {
    constructor() {
        super({ key: "listlevel3" });
    }

    preload() {

        // Step 1, load JSON
        // simple Main Page image
        this.load.image("listlevel3img", "assets/listlevel3.png");
        // this.load.audio("bgm", "assets/song.mp3");

    }

    create() {
        // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
        // this.music.play();
        this.add.image(0, 0, "listlevel3img").setOrigin(0, 0);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function () {
            console.log("Spacebar pressed, goto level3");
            this.scene.start("level3");
        }, this);

        // Step 2 : Preload any images here

    } // end of preload //
}