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

    this.load.image('fruit1img', 'assets/fruit1.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('fruit2img', 'assets/fruit2.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('fruit3img', 'assets/fruit3.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('fruit4img', 'assets/fruit4.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('skeletonimg', 'assets/skeleton.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('trolleyimg', 'assets/trolley.png', { frameWidth: 64, frameHeight: 64 });




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
        this.fruit1 = this.physics.add.sprite(fruit1.x, fruit1.y, "fruit1img")
        this.fruit2 = this.physics.add.sprite(fruit2.x, fruit2.y, "fruit2img")
        this.fruit3 = this.physics.add.sprite(fruit3.x, fruit3.y, "fruit3img")
        this.fruit4 = this.physics.add.sprite(fruit4.x, fruit4.y, "fruit4img")
        this.fruit5 = this.physics.add.sprite(fruit5.x, fruit5.y, "fruit3img")
        this.fruit6 = this.physics.add.sprite(fruit6.x, fruit6.y, "fruit1img")
        this.fruit7 = this.physics.add.sprite(fruit7.x, fruit7.y, "fruit2img")
        this.fruit8 = this.physics.add.sprite(fruit8.x, fruit8.y, "fruit3img")
        this.fruit9 = this.physics.add.sprite(fruit9.x, fruit9.y, "fruit4img")
        this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, "heartimg")
        this.heart2 = this.physics.add.sprite(heart2.x, heart2.y, "heartimg")
        this.trolley1 = this.physics.add.sprite(trolley1.x, trolley1.y, "trolleyimg")
        this.trolley2 = this.physics.add.sprite(trolley2.x, trolley2.y, "trolleyimg")
        this.skeleton1 = this.physics.add.sprite(skeleton1.x, skeleton1.y, "skeletonimg")
        this.skeleton2 = this.physics.add.sprite(skeleton2.x, skeleton2.y, "skeletonimg")
        this.skeleton3 = this.physics.add.sprite(skeleton3.x, skeleton3.y, "skeletonimg")
        this.skeleton4 = this.physics.add.sprite(skeleton4.x, skeleton4.y, "skeletonimg")
        this.skeleton5 = this.physics.add.sprite(skeleton5.x, skeleton5.y, "skeletonimg")
        this.skeleton6 = this.physics.add.sprite(skeleton6.x, skeleton6.y, "skeletonimg")
        this.skeleton7 = this.physics.add.sprite(skeleton7.x, skeleton7.y, "skeletonimg")
        this.skeleton8 = this.physics.add.sprite(skeleton8.x, skeleton8.y, "skeletonimg")
        this.skeleton9 = this.physics.add.sprite(skeleton9.x, skeleton9.y, "skeletonimg")

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
this.physics.add.overlap(this.player, [this.fruit1, this.fruit2, this.fruit3,this.fruit4,this.fruit5,this.fruit6,this.fruit7,this.fruit8,this.fruit9], this.collectheart, null, this);
this.physics.add.overlap(this.player, [this.heart1, this.heart2], this.collectheart, null, this);
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
    console.log("collectheart")
    this.heart.play()
    // this.cameras.main.shake(50) // 500ms
    item.disableBody(true, true)
    window.item1 = 1
    return false;
  }

  //update() {} /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
