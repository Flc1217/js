class gameover extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameover' });
    }
  
    preload() {
        this.load.image('gameover','assets/gameover.png');
        this.load.audio("gameoversound", "assets/gameover.wav");
    
    }
  
    create () {
      console.log("game over");
  
      this.gameoverSnd = this.sound.add("gameoversound").setVolume(0.4);
  
        this.add.image(0, 0, 'gameover').setOrigin(0, 0);
  
        window.trolley = 10;
        window.heart = 3;
  
        var spaceDown = this.input.keyboard.addKey('SPACE');
  
        spaceDown.on('down', function () {
            console.log("Spacebar pressed, goto listlevel1");
            this.scene.start("listlevel1");
        }, this);
  
        this.gameoverSnd.play();
  
}

  
  }