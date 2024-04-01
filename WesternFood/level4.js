class level4 extends Phaser.Scene {
  constructor() {
    super({
      key: "level4",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level4", "assets/FruitMarket.tmj");

    // Step 2 : Preload any images here
    this.load.image("groceryimg", "assets/16_Grocery_store_32x32.png");
    this.load.image("farmingimg", "assets/farming_fishing.png");
    this.load.image("foodimg", "assets/food.png");
    this.load.image("marketimg", "assets/Market_1.png");
    this.load.image("miscimg", "assets/misc_atlas.png");
    this.load.image("pipoyaimg", "assets/pipoya.png");

    this.load.spritesheet('fruit1img', 'assets/fruit1.png', { frameWidth: 20, frameHeight: 22 });
    this.load.spritesheet('fruit2img', 'assets/fruit2.png', { frameWidth: 29, frameHeight: 29 });
    this.load.spritesheet('fruit3img', 'assets/fruit3.png', { frameWidth: 39, frameHeight: 26 });
    this.load.spritesheet('fruit4img', 'assets/fruit4.png', { frameWidth: 31, frameHeight: 27 });
    this.load.spritesheet('fruit5img', 'assets/fruit5.png', { frameWidth: 36, frameHeight: 29 });
    this.load.spritesheet('fruit6img', 'assets/fruit6.png', { frameWidth: 31, frameHeight: 26 });
    this.load.spritesheet('fruit7img', 'assets/fruit7.png', { frameWidth: 32, frameHeight: 34 });
    this.load.spritesheet('fruit8img', 'assets/fruit8.png', { frameWidth: 24, frameHeight: 23 });
    this.load.spritesheet('fruit9img', 'assets/fruit9.png', { frameWidth: 36, frameHeight: 26 });
    this.load.spritesheet('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('skeletonimg', 'assets/skeleton.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('trolleyimg', 'assets/trolley.png', { frameWidth: 64, frameHeight: 64 });

    this.load.image('life', 'assets/heart2.png', { frameWidth: 64, frameHeight: 64 });



    this.load.spritesheet('gen', 'assets/gen.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio("collectmusic", "assets/collectmusic.wav");

  }

  create() {
    console.log("level4");
      // this.checklist1 = this.sound.add("collectmusic")
      this.fruit = this.sound.add("collectmusic");
      this.heart = this.sound.add("collectmusic");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level4" });

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
      key: 'fruit1Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit1img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit2Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit2img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit3Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit3img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit4Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit4img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit5Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit5img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit6Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit6img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit7Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit7img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit8Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit8img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
      frameRate: 2, // Number of frames per second
      repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
    });

    this.anims.create({
      key: 'fruit9Anim', // Unique identifier for the animation
      frames: this.anims.generateFrameNumbers('fruit9img', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
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
    let fruit1 = map.findObject("objectLayer", (obj) => obj.name === "fruit1");
    let fruit2 = map.findObject("objectLayer", (obj) => obj.name === "fruit2");
    let fruit3 = map.findObject("objectLayer", (obj) => obj.name === "fruit3");
    let fruit4 = map.findObject("objectLayer", (obj) => obj.name === "fruit4");
    let fruit5 = map.findObject("objectLayer", (obj) => obj.name === "fruit5");
    let fruit6 = map.findObject("objectLayer", (obj) => obj.name === "fruit6");
    let fruit7 = map.findObject("objectLayer", (obj) => obj.name === "fruit7");
    let fruit8 = map.findObject("objectLayer", (obj) => obj.name === "fruit8");
    let fruit9 = map.findObject("objectLayer", (obj) => obj.name === "fruit9");
    let heart1 = map.findObject("objectLayer", (obj) => obj.name === "heart1");
    let heart2 = map.findObject("objectLayer", (obj) => obj.name === "heart2");
    let trolley1 = map.findObject("objectLayer", (obj) => obj.name === "trolley1");
    let trolley2 = map.findObject("objectLayer", (obj) => obj.name === "trolley2");
    let skeleton1 = map.findObject("objectLayer", (obj) => obj.name === "skeleton1");
    let skeleton2 = map.findObject("objectLayer", (obj) => obj.name === "skeleton2");
    let skeleton3 = map.findObject("objectLayer", (obj) => obj.name === "skeleton3");
    let skeleton4 = map.findObject("objectLayer", (obj) => obj.name === "skeleton4");
    let skeleton5 = map.findObject("objectLayer", (obj) => obj.name === "skeleton5");
    let skeleton6 = map.findObject("objectLayer", (obj) => obj.name === "skeleton6");
    let skeleton7 = map.findObject("objectLayer", (obj) => obj.name === "skeleton7");
    let skeleton8 = map.findObject("objectLayer", (obj) => obj.name === "skeleton8");

        // Define your items with objectLayer
        this.fruit1 = this.physics.add.sprite(fruit1.x, fruit1.y, "fruit1img").play("fruit1Anim")
        this.fruit2 = this.physics.add.sprite(fruit2.x, fruit2.y, "fruit2img").play("fruit2Anim")
        this.fruit3 = this.physics.add.sprite(fruit3.x, fruit3.y, "fruit3img").play("fruit3Anim")
        this.fruit4 = this.physics.add.sprite(fruit4.x, fruit4.y, "fruit4img").play("fruit4Anim")
        this.fruit5 = this.physics.add.sprite(fruit5.x, fruit5.y, "fruit5img").play("fruit5Anim")
        this.fruit6 = this.physics.add.sprite(fruit6.x, fruit6.y, "fruit6img").play("fruit6Anim")
        this.fruit7 = this.physics.add.sprite(fruit7.x, fruit7.y, "fruit7img").play("fruit7Anim")
        this.fruit8 = this.physics.add.sprite(fruit8.x, fruit8.y, "fruit8img").play("fruit8Anim")
        this.fruit9 = this.physics.add.sprite(fruit9.x, fruit9.y, "fruit9img").play("fruit9Anim")
        this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, "heartimg").play("heartAnim")
        this.heart2 = this.physics.add.sprite(heart2.x, heart2.y, "heartimg").play("heartAnim")
        this.trolley1 = this.physics.add.sprite(trolley1.x, trolley1.y, "trolleyimg").play("trolleyAnim")
        this.trolley2 = this.physics.add.sprite(trolley2.x, trolley2.y, "trolleyimg").play("trolleyAnim")
        this.skeleton1 = this.physics.add.sprite(skeleton1.x, skeleton1.y, "skeletonimg")
        this.skeleton2 = this.physics.add.sprite(skeleton2.x, skeleton2.y, "skeletonimg")
        this.skeleton3 = this.physics.add.sprite(skeleton3.x, skeleton3.y, "skeletonimg")
        this.skeleton4 = this.physics.add.sprite(skeleton4.x, skeleton4.y, "skeletonimg")
        this.skeleton5 = this.physics.add.sprite(skeleton5.x, skeleton5.y, "skeletonimg")
        this.skeleton6 = this.physics.add.sprite(skeleton6.x, skeleton6.y, "skeletonimg")
        this.skeleton7 = this.physics.add.sprite(skeleton7.x, skeleton7.y, "skeletonimg")
        this.skeleton8 = this.physics.add.sprite(skeleton8.x, skeleton8.y, "skeletonimg")

        this.tweens.add({
          targets: this.trolley1,
          x: 116,
          flipX: true,
          yoyo: true,
          duration: 1700,
          repeat: -1
      })
      this.tweens.add({
          targets: this.trolley2,
          x: 1228,
          flipX: true,
          yoyo: true,
          duration: 1700,
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
    var key3Down = this.input.keyboard.addKey(51);

    key1Down.on('down', function () {
      console.log("Key 1 pressed");
      this.scene.start("level1");
    }, this);

    key2Down.on('down', function () {
      console.log("Key 2 pressed");
      this.scene.start("level2");
    }, this);

    key3Down.on('down', function () {
      console.log("Key 3 pressed");
      this.scene.start("level3");
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

// camera follow player
this.physics.add.overlap(this.player, [this.fruit1, this.fruit2, this.fruit3,this.fruit4,this.fruit5,this.fruit6,this.fruit7,this.fruit8,this.fruit9], this.collectfruit, null, this);
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
  this.skeleton1,
  this.minusLife,
  null,
  this
);
this.physics.add.overlap(
  this.player,
  this.skeleton2,
  this.minusLife,
  null,
  this
);

this.physics.add.overlap(
  this.player,
  this.skeleton3,
  this.minusLife,
  null,
  this
);
this.physics.add.overlap(
  this.player,
  this.skeleton4,
  this.minusLife,
  null,
  this
);

this.physics.add.overlap(
  this.player,
  this.skeleton5,
  this.minusLife,
  null,
  this
);
this.physics.add.overlap(
  this.player,
  this.skeleton6,
  this.minusLife,
  null,
  this
);

this.physics.add.overlap(
  this.player,
  this.skeleton7,
  this.minusLife,
  null,
  this
);
this.physics.add.overlap(
  this.player,
  this.skeleton8,
  this.minusLife,
  null,
  this
);
    //this.cameras.main.startFollow(this.player);
    this.physics.add.overlap(this.player, this.checklist, this.collectchecklist, null, this);

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
      this.player.x > 513 &&
      this.player.x < 601 &&
      this.player.y > 1060 
      
    ) {
      console.log("victory");
      this.victory();

    }
  }
  
  //update() {} /////////////////// end of update //////////////////////////////
  // Function to jump to room1
  victory(player, tile) {
    console.log("victory function");
    this.scene.start("victory",);
  }

  collectheart(player, item) {
    console.log("collectheart");
    //this.cameras.main.shake(200);
    window.fish++
    item.disableBody(true, true); // remove heart
    return false;
  
  }
  
  collectfruit(player, item) {
    console.log("collectfruit");
    //this.cameras.main.shake(200);
    window.fish++
    item.disableBody(true, true); // remove heart
    return false;
  
  }


// call this function when overlap
collectfruit(player, item) {
  console.log("collectfruit")
  this.fruit.play()
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
      this.scene.stop("level4");
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
  }


  minusLife(player, skeleton) {
    console.log("minus life");

    // deduct live
    window.heart--;
//     // sound
//  this.hurtSnd.play();

    // shake screen
    this.cameras.main.shake(300);

    // deduct zombie
    window.skeleton--;

    // remove the zombie
    skeleton.disableBody(true, true);

    if (window.heart == 2) {
      this.life3.setVisible(false);
    } else if (window.heart == 1) {
      this.life2.setVisible(false);
    } else if (window.heart == 0) {
      this.life1.setVisible(false);

      console.log("game over");
      this.scene.stop("level4");
      this.scene.start("gameover");
    }
  }

  hitskeleton(hit, trolley) {
    console.log("hit skeleton");

    this.hitSnd.play();

    hit.disableBody(true, true);
    skeleton.disableBody(true, true);

    // deduct zombie
    window.skeleton--;
  }
  //update() {} /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
