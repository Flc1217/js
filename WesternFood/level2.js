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

    this.load.image('trolleyimg', 'assets/trolley.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('chickenimg', 'assets/chicken.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('fishimg', 'assets/fish.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('heartimg', 'assets/heart.png', { frameWidth: 64, frameHeight: 64 });

    this.load.spritesheet('gen', 'assets/gen.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio("collectmusic", "assets/collectmusic.wav");

  }

  create() {
    console.log("level2");

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
    let heart1 = map.findObject("objectLayer", (obj) => obj.name === "heart1");
    let heart2 = map.findObject("objectLayer", (obj) => obj.name === "heart2");

    // Define your items with objectLayer
    this.trolley1 = this.physics.add.sprite(trolley1.x, trolley1.y, "trolleyimg")
    this.trolley2 = this.physics.add.sprite(trolley2.x, trolley2.y, "trolleyimg")
    this.trolley3 = this.physics.add.sprite(trolley3.x, trolley3.y, "trolleyimg")
    this.chicken1 = this.physics.add.sprite(chicken1.x, chicken1.y, "chickenimg")
    this.chicken2 = this.physics.add.sprite(chicken2.x, chicken2.y, "chickenimg")
    this.fish1 = this.physics.add.sprite(fish1.x, fish1.y, "fishimg")
    this.fish2 = this.physics.add.sprite(fish2.x, fish2.y, "fishimg")
    this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, "heartimg")
    this.heart2 = this.physics.add.sprite(heart2.x, heart2.y, "heartimg")

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
    this.physics.add.overlap(this.player, [this.fish1, this.fish2], this.collectfish, null, this);
    this.physics.add.overlap(this.player, [this.heart1, this.heart2], this.collectheart, null, this);

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
      console.log("level3");
      this.level3();

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
  window.fish++
  item.disableBody(true, true); // remove fire
  return false;

}

  // call this function when overlap
  collectchicken(player, item) {
    console.log("collectchicken")
    this.chicken.play()
    // this.cameras.main.shake(50) // 500ms
    item.disableBody(true, true)
    window.item1 = 1
    return false;
  }

    collectfish(player, item) {
      console.log("collectfish")
      this.fish.play()
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
  level3(player, tile) {
    console.log("level3 function");
    this.scene.start("level3",);
  }
} //////////// end of class world ////////////////////////
