class level3 extends Phaser.Scene {
  constructor() {
    super({
      key: "level3",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level3", "assets/VegetableMarket.tmj");

    // Step 2 : Preload any images here
    this.load.image("groceryimg", "assets/16_Grocery_store_32x32.png");
    this.load.image("farmingimg", "assets/farming_fishing.png");
    this.load.image("foodimg", "assets/food.png");
    this.load.image("marketimg", "assets/Market_1.png");
    this.load.image("miscimg", "assets/misc_atlas.png");
    this.load.image("pipoyaimg", "assets/pipoya.png");

    this.load.spritesheet('trolleyimg', 'assets/trolley.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('trolley2img', 'assets/trolley2.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('vege1img', 'assets/vege1.png', { frameWidth: 28, frameHeight: 33 });
    this.load.spritesheet('vege2img', 'assets/vege2.png', { frameWidth: 15, frameHeight: 30 });
    this.load.spritesheet('vege3img', 'assets/vege3.png', { frameWidth: 32, frameHeight: 28 });
    this.load.spritesheet('vege4img', 'assets/vege4.png', { frameWidth: 33, frameHeight: 29 });
    this.load.spritesheet('vege5img', 'assets/vege5.png', { frameWidth: 19, frameHeight: 22 });
    this.load.spritesheet('vege6img', 'assets/vege6.png', { frameWidth: 36, frameHeight: 32 });
    this.load.spritesheet('vege7img', 'assets/vege7.png', { frameWidth: 36, frameHeight: 32 });
    this.load.spritesheet('vege8img', 'assets/vege8.png', { frameWidth: 30, frameHeight: 30 });
    this.load.spritesheet('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('life', 'assets/heart2.png', { frameWidth: 64, frameHeight: 64 });


    this.load.spritesheet('gen', 'assets/gen.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio("collectmusic", "assets/collectmusic.wav");

  }

  create() {
    console.log("level3");

      // this.checklist1 = this.sound.add("collectmusic");
      this.vege = this.sound.add("collectmusic");
      this.heart = this.sound.add("collectmusic");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level3" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let groceryTiles = map.addTilesetImage("16_Grocery_store_32x32", "groceryimg");
    let farmingTiles = map.addTilesetImage("farming_fishing", "farmingimg");
    let foodTiles = map.addTilesetImage("food", "foodimg");
    let marketTiles = map.addTilesetImage("Market_1", "marketimg");
    let miscTiles = map.addTilesetImage("misc_atlas", "miscimg");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaimg");

    // Step 5  create an array of tiles
    let tilesArray = [
      groceryTiles,
      farmingTiles,
      foodTiles,
      marketTiles,
      miscTiles,
      pipoyaTiles
    ];

    // Step 6  Load in layers by layers
    this.Wall3Layer = map.createLayer("Wall3", tilesArray, 0, 0);
    this.FloorLayer = map.createLayer("Floor", tilesArray, 0, 0);
    this.Wall2Layer = map.createLayer("Wall2", tilesArray, 0, 0);
    this.WallLayer = map.createLayer("Wall", tilesArray, 0, 0);
    this.StoreLayer = map.createLayer("Store", tilesArray, 0, 0);
    this.Store2Layer = map.createLayer("Store2", tilesArray, 0, 0);
    this.Store3Layer = map.createLayer("Store3", tilesArray, 0, 0);
    this.Store4Layer = map.createLayer("Store4", tilesArray, 0, 0);
    // Add main player here with physics.add.sprite

    // Add time event / movement here
    this.anims.create({
      key: 'vege1Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege1img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege2Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege2img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege3Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege3img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege4Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege4img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege5Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege5img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege6Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege6img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege7Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege7img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'vege8Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('vege8img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'heartAnim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('heartimg', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'trolleyAnim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('trolleyimg', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 10, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'trolley2Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('trolley2img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 10, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });
    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // load checklist layer
    let trolley1 = map.findObject("objectLayer", (obj) => obj.name === "trolley1");
    let trolley2 = map.findObject("objectLayer", (obj) => obj.name === "trolley2");
    let trolley3 = map.findObject("objectLayer", (obj) => obj.name === "trolley3");
    // let trolley4 = map.findObject("objectLayer", (obj) => obj.name === "trolley4");
    let trolley5 = map.findObject("objectLayer", (obj) => obj.name === "trolley5");
    let trolley6 = map.findObject("objectLayer", (obj) => obj.name === "trolley6");
    let trolley7 = map.findObject("objectLayer", (obj) => obj.name === "trolley7");
    let vege1 = map.findObject("objectLayer", (obj) => obj.name === "vege1");
    let vege2 = map.findObject("objectLayer", (obj) => obj.name === "vege2");
    let vege3 = map.findObject("objectLayer", (obj) => obj.name === "vege3");
    let vege4 = map.findObject("objectLayer", (obj) => obj.name === "vege4");
    let vege5 = map.findObject("objectLayer", (obj) => obj.name === "vege5");
    let vege6 = map.findObject("objectLayer", (obj) => obj.name === "vege6");
    let vege7 = map.findObject("objectLayer", (obj) => obj.name === "vege7");
    let vege8 = map.findObject("objectLayer", (obj) => obj.name === "vege8");
    let vege9 = map.findObject("objectLayer", (obj) => obj.name === "vege9");
    let heart1 = map.findObject("objectLayer", (obj) => obj.name === "heart1");

    // Define your items with objectLayer
    this.trolley1 = this.physics.add.sprite(trolley1.x, trolley1.y, "trolley2img").play("trolley2Anim")
    this.trolley2 = this.physics.add.sprite(trolley2.x, trolley2.y, "trolley2img").play("trolley2Anim")
    this.trolley3 = this.physics.add.sprite(trolley3.x, trolley3.y, "trolleyimg").play("trolleyAnim")
    // this.trolley4 = this.physics.add.sprite(trolley4.x, trolley4.y, "trolleyimg").play("trolleyAnim")
    this.trolley5 = this.physics.add.sprite(trolley5.x, trolley5.y, "trolleyimg").play("trolleyAnim")
    this.trolley6 = this.physics.add.sprite(trolley6.x, trolley6.y, "trolleyimg").play("trolleyAnim")
    this.trolley7 = this.physics.add.sprite(trolley7.x, trolley7.y, "trolleyimg").play("trolleyAnim")
    this.vege1 = this.physics.add.sprite(vege1.x, vege1.y, "vege1img").play("vege1Anim")
    this.vege2 = this.physics.add.sprite(vege2.x, vege2.y, "vege2img").play("vege2Anim")
    this.vege3 = this.physics.add.sprite(vege3.x, vege3.y, "vege3img").play("vege3Anim")
    this.vege4 = this.physics.add.sprite(vege4.x, vege4.y, "vege4img").play("vege4Anim")
    this.vege5 = this.physics.add.sprite(vege5.x, vege5.y, "vege5img").play("vege5Anim")
    this.vege6 = this.physics.add.sprite(vege6.x, vege6.y, "vege6img").play("vege6Anim")
    this.vege7 = this.physics.add.sprite(vege7.x, vege7.y, "vege7img").play("vege7Anim")
    this.vege8 = this.physics.add.sprite(vege8.x, vege8.y, "vege8img").play("vege8Anim")
    this.vege9 = this.physics.add.sprite(vege9.x, vege9.y, "vege7img").play("vege7Anim")
    this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, "heartimg").play("heartAnim")

    this.tweens.add({
      targets: this.trolley1,
      y: 405,
      flipX: true,
      yoyo: true,
      duration: 2000,
      repeat: -1
  })
  this.tweens.add({
      targets: this.trolley2,
      y: 840,
      flipX: true,
      yoyo: true,
      duration: 2000,
      repeat: -1
  })
  this.tweens.add({
    targets: this.trolley3,
    x: 1000,
    flipX: true,
    yoyo: true,
    duration: 2000,
    repeat: -1
})

this.tweens.add({
  targets: this.trolley5,
  x: 160,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
targets: this.trolley6,
x: 235,
flipX: true,
yoyo: true,
duration: 2000,
repeat: -1
})

this.tweens.add({
  targets: this.trolley7,
  x: 1200,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
  })

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    console.log("This is preloadScene spacebar V3");

    var spaceDown = this.input.keyboard.addKey('SPACE');

    spaceDown.on('down', function () {
      console.log("Space pressed, goto farm");
      this.scene.start("farm");
    }, this);

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(52);

    key1Down.on('down', function () {
      console.log("Key 1 pressed");
      this.scene.start("level1");
    }, this);

    key2Down.on('down', function () {
      console.log("Key 2 pressed");
      this.scene.start("level2");
    }, this);

    key3Down.on('down', function () {
      console.log("Key 4 pressed");
      this.scene.start("level4");
    }, this);

    this.player = this.physics.add.sprite(753, 1044, 'gen');
    window.player = this.player

    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 40)

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    //hearts
    this.life1 = this.add
      .image(50, 40, "life")
      .setScale(1.5)
      .setScrollFactor(0)
      .setVisible(false);
    this.life2 = this.add
      .image(100, 40, "life")
      .setScale(1.5)
      .setScrollFactor(0)
      .setVisible(false);
    this.life3 = this.add
      .image(150, 40, "life")
      .setScale(1.5)
      .setScrollFactor(0)
      .setVisible(false);

    if (window.heart >= 3) {
      this.life1.setVisible(true);
      this.life2.setVisible(true);
      this.life3.setVisible(true);
    }
    else if (window.heart == 2) {
      this.life1.setVisible(true);
      this.life2.setVisible(true);
    }
    else if (window.heart == 1) {
      this.life1.setVisible(true);
    }

    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.Wall3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Wall3Layer)

    this.Wall2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Wall2Layer)

    this.WallLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.WallLayer)

    this.StoreLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.StoreLayer)

    this.Store2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Store2Layer)

    this.Store3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Store3Layer)

    this.Store4Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Store4Layer)


    // create the arrow keys


    // camera follow player
    this.physics.add.overlap(this.player, [this.vege3,this.vege4,this.vege6,this.vege7,this.vege8,this.vege9], this.collectvege, null, this);
    this.physics.add.overlap(this.player, [this.heart1], this.collectheart, null, this);

    this.physics.add.overlap(
      this.player,
      this.trolley1,
      this.minusLife,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.trolley2,
      this.minusLife,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.trolley3,
      this.minusLife,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.trolley5,
      this.minusLife,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.trolley6,
      this.minusLife,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.trolley7,
      this.minusLife,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.vege1,
      this.minusLife,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.vege2,
      this.minusLife,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.vege5,
      this.minusLife,
      null,
      this
    );
    
    //this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('gen-left', true);
    }
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('gen-right', true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play('gen-up', true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play('gen-down', true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
    if (
      this.player.x > 503 &&
      this.player.x < 591 &&
      this.player.y > 1050 &&
      window.vege > 3
    ) {
      console.log("listlevel4");
      this.listlevel4();

    }
  }

  //update() {} /////////////////// end of update //////////////////////////////
  collectvege(player, item) {
    console.log("collectvege");
    //this.cameras.main.shake(200);
    window.vege++
    item.disableBody(true, true); // remove vege
    return false;

  }



collectheart(player, item) {
  console.log("collectheart");
  //this.cameras.main.shake(200);
  window.heart++
  item.disableBody(true, true); // remove heart
  return false;

}


// call this function when overlap
collectvege(player, item) {
  console.log("collectvege")
  this.vege.play()
  window.vege++
  // this.cameras.main.shake(50) // 500ms
  item.disableBody(true, true)
  window.item1 = 1
  return false;
}

  collectheart(player, item) {
    console.log("collectheart");
    this.heart.play()
    item.disableBody(true, true); // remove fire

    window.heart++;
    console.log("life: ", window.heart);
    if (window.heart > 3){
        window.heart = 3;
    }

    if (window.heart == 3) {
      this.life3.setVisible(true);
    } 
     else if (window.heart == 2) {
      this.life2.setVisible(true);
    } 
     else if (window.heart == 1) {
      this.life1.setVisible(true);
    }

  }

//update() {} /////////////////// end of update //////////////////////////////
  // Function to jump to room1
  listlevel4(player, tile) {
    console.log("listlevel4 function");
    this.scene.start("listlevel4",);
  }

  minusLife(player, trolley) {
    console.log("minus life");

    // deduct live
    window.heart--;
//     // sound
//  this.hurtSnd.play();

    // shake screen
    this.cameras.main.shake(300);

    // deduct zombie
    window.trolley--;

    // remove the zombie
    trolley.disableBody(false, false);

    if (window.heart == 2) {
      this.life3.setVisible(false);
    } else if (window.heart == 1) {
      this.life2.setVisible(false);
    } else if (window.heart == 0) {
      this.life1.setVisible(false);

      console.log("game over");
      this.scene.stop("level3");
      this.scene.start("gameover");
    }
  }

  hittrolley(hit, trolley) {
    console.log("hit trolley");

    this.hitSnd.play();

    hit.disableBody(true, true);
    trolley.disableBody(true, true);

    // deduct zombie
    window.trolley--;

           // deduct live
           window.heart++;
           console.log("life: ", window.heart);
           if (window.heart > 3){
               window.heart = 3;
           }
       
           if (window.heart == 3) {
             this.life3.setVisible(true);
           } 
            else if (window.heart == 2) {
             this.life2.setVisible(true);
           } 
            else if (window.heart == 1) {
             this.life1.setVisible(true);
           }
  }

  minusLife(player, vege) {
    console.log("minus vege");

    // deduct live
    window.heart--;
//     // sound
//  this.hurtSnd.play();

    // shake screen
    this.cameras.main.shake(300);

    // deduct zombie
    window.vege--;

    // remove the zombie
    vege.disableBody(true, true);

    if (window.heart == 2) {
      this.life3.setVisible(false);
    } else if (window.heart == 1) {
      this.life2.setVisible(false);
    } else if (window.heart == 0) {
      this.life1.setVisible(false);

      console.log("game over");
      this.scene.stop("level3");
      this.scene.start("gameover");
    }
  }

  hittvege(hit, vege) {
    console.log("hit vege");

    this.hitSnd.play();

    hit.disableBody(true, true);
    vege.disableBody(true, true);

    // deduct zombie
    window.vege--;

           // deduct live
           window.heart++;
           console.log("life: ", window.heart);
           if (window.heart > 3){
               window.heart = 3;
           }
       
           if (window.heart == 3) {
             this.life3.setVisible(true);
           } 
            else if (window.heart == 2) {
             this.life2.setVisible(true);
           } 
            else if (window.heart == 1) {
             this.life1.setVisible(true);
           }
  }   
  
  }
  
 //////////// end of class world ////////////////////////
