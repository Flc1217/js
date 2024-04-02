class level2 extends Phaser.Scene {
  constructor() {
    super({
      key: "level2",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level2", "assets/MeatMarket.tmj");

    // Step 2 : Preload any images here
    this.load.image("groceryimg", "assets/16_Grocery_store_32x32.png");
    this.load.image("farmingimg", "assets/farming_fishing.png");
    this.load.image("foodimg", "assets/food.png");
    this.load.image("marketimg", "assets/Market_1.png");
    this.load.image("miscimg", "assets/misc_atlas.png");
    this.load.image("pipoyaimg", "assets/pipoya.png");

    this.load.spritesheet('trolleyimg', 'assets/trolley.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('chicken1img', 'assets/chicken1.png', { frameWidth: 31, frameHeight: 23 });
    this.load.spritesheet('chicken2img', 'assets/chicken2.png', { frameWidth: 27, frameHeight: 25 });
    this.load.spritesheet('fish1img', 'assets/fish1.png', { frameWidth: 48, frameHeight: 29 });
    this.load.spritesheet('fish2img', 'assets/fish2.png', { frameWidth: 37, frameHeight: 20 });
    this.load.spritesheet('fish3img', 'assets/fish3.png', { frameWidth: 42, frameHeight: 19 });
    this.load.spritesheet('heartimg', 'assets/heart.png', { frameWidth: 32, frameHeight: 28 });
    this.load.image('life', 'assets/heart2.png', { frameWidth: 64, frameHeight: 64 });

    this.load.spritesheet('gen', 'assets/gen.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio("collectmusic", "assets/collectmusic.wav");


  }

  create() {
    console.log("level2");
    
    console.log("life:", window.heart);

    // this.checklist1 = this.sound.add("collectmusic");
    this.chicken = this.sound.add("collectmusic");
    this.fish = this.sound.add("collectmusic");
    this.heart = this.sound.add("collectmusic");
 


    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level2" });

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


    // Add main player here with physics.add.sprite

    // Add time event / movement here
    this.anims.create({
      key: 'chicken1Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('chicken1img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'chicken2Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('chicken2img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fish1Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fish1img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fish2Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fish2img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fish3Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fish3img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
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

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // load checklist layer
    let trolley1 = map.findObject("objectLayer", (obj) => obj.name === "trolley1");
    let trolley2 = map.findObject("objectLayer", (obj) => obj.name === "trolley2");
    let trolley3 = map.findObject("objectLayer", (obj) => obj.name === "trolley3");
    let chicken1 = map.findObject("objectLayer", (obj) => obj.name === "chicken1");
    let chicken2 = map.findObject("objectLayer", (obj) => obj.name === "chicken2");
    let fish1 = map.findObject("objectLayer", (obj) => obj.name === "fish1");
    let fish2 = map.findObject("objectLayer", (obj) => obj.name === "fish2");
    let fish3 = map.findObject("objectLayer", (obj) => obj.name === "fish3");
    let heart1 = map.findObject("objectLayer", (obj) => obj.name === "heart1");
    let heart2 = map.findObject("objectLayer", (obj) => obj.name === "heart2");

    // Define your items with objectLayer
    this.trolley1 = this.physics.add.sprite(trolley1.x, trolley1.y, "trolleyimg").play("trolleyAnim")
    this.trolley2 = this.physics.add.sprite(trolley2.x, trolley2.y, "trolleyimg").play("trolleyAnim")
    this.trolley3 = this.physics.add.sprite(trolley3.x, trolley3.y, "trolleyimg").play("trolleyAnim")
    this.chicken1 = this.physics.add.sprite(chicken1.x, chicken1.y, "chicken1img").play("chicken1Anim")
    this.chicken2 = this.physics.add.sprite(chicken2.x, chicken2.y, "chicken2img").play("chicken2Anim")
    this.fish1 = this.physics.add.sprite(fish1.x, fish1.y, "fish1img").play("fish1Anim")
    this.fish2 = this.physics.add.sprite(fish2.x, fish2.y, "fish2img").play("fish2Anim")
    this.fish3 = this.physics.add.sprite(fish3.x, fish3.y, "fish3img").play("fish3Anim")
    this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, "heartimg").play("heartAnim")
    this.heart2 = this.physics.add.sprite(heart2.x, heart2.y, "heartimg").play("heartAnim")


    this.tweens.add({
      targets: this.trolley1,
      x: 1200,
      flipX: true,
      yoyo: true,
      duration: 2300,
      repeat: -1
  })
  this.tweens.add({
      targets: this.trolley2,
      x: 100,
      flipX: true,
      yoyo: true,
      duration: 2300,
      repeat: -1
  })
  this.tweens.add({
    targets: this.trolley3,
    x: 1200,
    flipX: true,
    yoyo: true,
    duration: 2300,
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
    var key2Down = this.input.keyboard.addKey(51);
    var key3Down = this.input.keyboard.addKey(52);

    key1Down.on('down', function () {
      console.log("Key 1 pressed");
      this.scene.start("level1");
    }, this);

    key2Down.on('down', function () {
      console.log("Key 3 pressed");
      this.scene.start("level3");
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

    // camera follow player
    this.cameras.main.startFollow(this.player);

    this.Wall2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Wall2Layer)

    this.Wall3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Wall3Layer)

    this.WallLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.WallLayer)

    this.StoreLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.StoreLayer)

    this.Store2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Store2Layer)

    this.Store3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Store3Layer)


    // camera follow player
    //this.cameras.main.startFollow(this.player);
    this.physics.add.overlap(this.player, [this.chicken1, this.chicken2], this.collectchicken, null, this);
    this.physics.add.overlap(this.player, [this.fish1], this.collectfish, null, this);
    this.physics.add.overlap(this.player, [this.heart1, this.heart2], this.collectheart, null, this);

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
      this.fish2,
      this.minusLife,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.fish3,
      this.minusLife,
      null,
      this
    );

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
      window.chicken > 1
      
      
      ) {
        console.log("listlevel3");
        this.listlevel3();
  
      }
    }
  

  /////////////////// end of update////////////////


  collectchicken(player, item) {
    console.log("collectchicken");
    //this.cameras.main.shake(200);
    window.chicken++
    item.disableBody(true, true); // remove fire
    return false;
  }

  collectfish(player, item) {
    console.log("collectfish");
    //this.cameras.main.shake(200);
    window.fish++
    item.disableBody(true, true); // remove fire
    return false;

  }



  collectheart(player, item) {
    console.log("collectheart");
    //this.cameras.main.shake(200);
    window.heart++
    item.disableBody(true, true); // remove fire
    return false;
    
  }




  // call this function when overlap
  collectchicken(player, item) {
    console.log("collectchicken")
    this.chicken.play()
    window.chicken++
    // this.cameras.main.shake(50) // 500ms
    item.disableBody(true, true)
    window.item1 = 1
    return false;
  }

  collectfish(player, item) {
    console.log("collectfish")
    this.fish.play()
    window.fish++
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
  listlevel3(player, tile) {
    console.log("listlevel3 function");
    this.scene.start("listlevel3",);
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
      this.scene.stop("level2");
      this.scene.start("gameover");
    }
  }

  hittrolley(hit, trolley) {
    console.log("hit trolley");

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

  minusLife(player, fish) {
    console.log("minus life");

    // deduct live
    window.heart--;
  // shake screen
  this.cameras.main.shake(300);

  // deduct zombie
  window.fish--;

  // remove the zombie
  fish.disableBody(true, true);

  if (window.heart == 2) {
    this.life3.setVisible(false);
  } else if (window.heart == 1) {
    this.life2.setVisible(false);
  } else if (window.heart == 0) {
    this.life1.setVisible(false);

    console.log("game over");
    this.scene.stop("level2");
    this.scene.start("gameover");
  }
}
  hitfish(hit, fish) {
    console.log("hit fish");
    

    hit.disableBody(true, true);
    fish.disableBody(true, true);

    // deduct zombie
    window.fish--;

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

 //////////// end of class world ////////////////////////
}
