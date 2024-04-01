
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
    scene: [ intro , storyline , gameplay , rules , gameover , listlevel1 , level1 , listlevel2 , level2 , listlevel3 , level3 , listlevel4 , level4 , victory]

};

let game = new Phaser.Game(config);
window.checklist = 4;
window.chicken = 2;
window.fish = 1
window.heart = 3
window.life = 0
window.fruit = 6
window.vege = 5