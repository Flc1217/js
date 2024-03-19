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

    this.load.image('trolleyimg', 'assets/trolley.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('trolley2img', 'assets/trolley2.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('food1img', 'assets/food1.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('food2img', 'assets/food2.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('food3img', 'assets/food3.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('food4img', 'assets/food4.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('food5img', 'assets/food5.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('food6img', 'assets/food6.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });


    this.load.spritesheet('gen', 'assets/gen.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio("collectmusic", "assets/collectmusic.wav");

  }

  create() {
    console.log("level3");

      // this.checklist1 = this.sound.add("collectmusic");
      this.food = this.sound.add("collectmusic");
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

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // load checklist layer
    let trolley1 = map.findObject("objectLayer", (obj) => obj.name === "trolley1");
    let trolley2 = map.findObject("objectLayer", (obj) => obj.name === "trolley2");
    let trolley3 = map.findObject("objectLayer", (obj) => obj.name === "trolley3");
    let trolley4 = map.findObject("objectLayer", (obj) => obj.name === "trolley4");
    let trolley5 = map.findObject("objectLayer", (obj) => obj.name === "trolley5");
    let trolley6 = map.findObject("objectLayer", (obj) => obj.name === "trolley6");
    let trolley7 = map.findObject("objectLayer", (obj) => obj.name === "trolley7");
    let food1 = map.findObject("objectLayer", (obj) => obj.name === "food1");
    let food2 = map.findObject("objectLayer", (obj) => obj.name === "food2");
    let food3 = map.findObject("objectLayer", (obj) => obj.name === "food3");
    let food4 = map.findObject("objectLayer", (obj) => obj.name === "food4");
    let food5 = map.findObject("objectLayer", (obj) => obj.name === "food5");
    let food6 = map.findObject("objectLayer", (obj) => obj.name === "food6");
    let food7 = map.findObject("objectLayer", (obj) => obj.name === "food7");
    let heart1 = map.findObject("objectLayer", (obj) => obj.name === "heart1");
    let heart2 = map.findObject("objectLayer", (obj) => obj.name === "heart2");
    let heart3 = map.findObject("objectLayer", (obj) => obj.name === "heart3");

    // Define your items with objectLayer
    this.trolley1 = this.physics.add.sprite(trolley1.x, trolley1.y, "trolley2img")
    this.trolley2 = this.physics.add.sprite(trolley2.x, trolley2.y, "trolley2img")
    this.trolley3 = this.physics.add.sprite(trolley3.x, trolley3.y, "trolleyimg")
    this.trolley4 = this.physics.add.sprite(trolley4.x, trolley4.y, "trolleyimg")
    this.trolley5 = this.physics.add.sprite(trolley5.x, trolley5.y, "trolleyimg")
    this.trolley6 = this.physics.add.sprite(trolley6.x, trolley6.y, "trolleyimg")
    this.trolley7 = this.physics.add.sprite(trolley7.x, trolley7.y, "trolleyimg")
    this.food1 = this.physics.add.sprite(food1.x, food1.y, "food1img")
    this.food2 = this.physics.add.sprite(food2.x, food2.y, "food2img")
    this.food3 = this.physics.add.sprite(food3.x, food3.y, "food3img")
    this.food4 = this.physics.add.sprite(food4.x, food4.y, "food4img")
    this.food5 = this.physics.add.sprite(food5.x, food5.y, "food6img")
    this.food6 = this.physics.add.sprite(food6.x, food6.y, "food3img")
    this.food7 = this.physics.add.sprite(food7.x, food7.y, "food5img")
    this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, "heartimg")
    this.heart2 = this.physics.add.sprite(heart2.x, heart2.y, "heartimg")
    this.heart3 = this.physics.add.sprite(heart3.x, heart3.y, "heartimg")

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
    this.physics.add.overlap(this.player, [this.food1, this.food2, this.food3,this.food4,this.food5,this.food6,this.food7], this.collectfood, null, this);
    this.physics.add.overlap(this.player, [this.heart1, this.heart2, this.heart3], this.collectheart, null, this);
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
      this.player.y > 1050

    ) {
      console.log("level4");
      this.level4();

    }
  }

  //update() {} /////////////////// end of update //////////////////////////////
  collectfood(player, item) {
    console.log("collectfood");
    //this.cameras.main.shake(200);
    window.food++
    item.disableBody(true, true); // remove food
    return false;

  }



collectheart(player, item) {
  console.log("collectheart");
  //this.cameras.main.shake(200);
  window.fish++
  item.disableBody(true, true); // remove heart
  return false;

}


// call this function when overlap
collectfood(player, item) {
  console.log("collectfood")
  this.food.play()
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

  // Function to jump to room1
  level4(player, tile) {
    console.log("level4 function");
    this.scene.start("level4",);
  }
} //////////// end of class world ////////////////////////
