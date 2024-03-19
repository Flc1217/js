
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
    scene: [ level1 , level2 , level3 , level4]

};

let game = new Phaser.Game(config);
window.checklist=0
window.chicken=0
window.fish=0
window.heart=0
window.fruit=0