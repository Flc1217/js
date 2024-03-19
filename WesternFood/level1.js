class level1 extends Phaser.Scene {
  constructor() {
    super({
      key: "level1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level1", "assets/Kitchen.tmj");

    // Step 2 : Preload any images here
    this.load.image("basementimg", "assets/14_Basement_32x32.png");
    this.load.image("farmingimg", "assets/farming_fishing.png");
    this.load.image("chairsimg", "assets/gather_chairs_1.3.png");
    this.load.image("tableimg", "assets/gather_tables_2.1.png");
    this.load.image("kitchen1img", "assets/Kitchen1.png");
    this.load.image("marketimg", "assets/Market_1.png");
    this.load.image("miscimg", "assets/misc_atlas.png");
    this.load.image("pipoyaimg", "assets/pipoya.png");

    this.load.audio("collectmusic", "assets/collectmusic.wav");


    this.load.image('checklistimg', 'assets/checklist.png', { frameWidth: 64, frameHeight: 64 });


    this.load.spritesheet('gen', 'assets/gen.png', { frameWidth: 64, frameHeight: 64 });


  }

  create() {
    console.log("level1");

    // this.checklist1 = this.sound.add("collectmusic");
    this.checklist = this.sound.add("collectmusic");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level1" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let basementTiles = map.addTilesetImage("14_Basement_32x32", "basementimg");
    let farmingTiles = map.addTilesetImage("farming_fishing", "farmingimg");
    let chairsTiles = map.addTilesetImage("gather_chairs_1.3", "chairsimg");
    let tableTiles = map.addTilesetImage("gather_tables_2.1", "tableimg");
    let kitchen1Tiles = map.addTilesetImage("Kitchen1", "kitchen1img");
    let marketTiles = map.addTilesetImage("Market_1", "marketimg");
    let miscTiles = map.addTilesetImage("misc_atlas", "miscimg");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaimg");

    // Step 5  create an array of tiles
    let tilesArray = [
      basementTiles,
      farmingTiles,
      chairsTiles,
      tableTiles,
      kitchen1Tiles,
      marketTiles,
      miscTiles,
      pipoyaTiles
    ];

    // Step 6  Load in layers by layers
    this.Deco4Layer = map.createLayer("Deco4", tilesArray, 0, 0);
    this.FloorLayer = map.createLayer("Floor", tilesArray, 0, 0);
    this.WallLayer = map.createLayer("Wall", tilesArray, 0, 0);
    this.KitchenLayer = map.createLayer("Kitchen", tilesArray, 0, 0);
    this.Kitchen2Layer = map.createLayer("Kitchen2", tilesArray, 0, 0);
    this.Wall2Layer = map.createLayer("Wall2", tilesArray, 0, 0);
    this.DecoLayer = map.createLayer("Deco", tilesArray, 0, 0);
    this.Deco2Layer = map.createLayer("Deco2", tilesArray, 0, 0);
    this.TableLayer = map.createLayer("Table", tilesArray, 0, 0);
    this.Deco3Layer = map.createLayer("Deco3", tilesArray, 0, 0);
    // Add main player here with physics.add.sprite

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // load checklist layer
    let checklist1 = map.findObject("objectLayer", (obj) => obj.name === "checklist1");
    let checklist2 = map.findObject("objectLayer", (obj) => obj.name === "checklist2");
    let checklist3 = map.findObject("objectLayer", (obj) => obj.name === "checklist3");
    let checklist4 = map.findObject("objectLayer", (obj) => obj.name === "checklist4");

    // Define your items with objectLayer
    this.checklist1 = this.physics.add.sprite(checklist1.x, checklist1.y, "checklistimg")
    this.checklist2 = this.physics.add.sprite(checklist2.x, checklist2.y, "checklistimg")
    this.checklist3 = this.physics.add.sprite(checklist3.x, checklist3.y, "checklistimg")
    this.checklist4 = this.physics.add.sprite(checklist4.x, checklist4.y, "checklistimg")

    // When object overlap with player, call the this.collectFire function



    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    console.log("This is preloadScene spacebar V3");

    var spaceDown = this.input.keyboard.addKey('SPACE');

    spaceDown.on('down', function () {
      console.log("Space pressed, goto level2");
      this.scene.start("farm");
    }, this);

    var key1Down = this.input.keyboard.addKey(50);
    var key2Down = this.input.keyboard.addKey(51);
    var key3Down = this.input.keyboard.addKey(52);


    key1Down.on('down', function () {
      console.log("Key 2 pressed");
      this.scene.start("level2");
    }, this);

    key2Down.on('down', function () {
      console.log("Key 3 pressed");
      this.scene.start("level3");
    }, this);

    key3Down.on('down', function () {
      console.log("Key 4 pressed");
      this.scene.start("level4");
    }, this);

    this.player = this.physics.add.sprite(943, 1061, 'gen');
    window.player = this.player

    this.anims.create({
      key: 'gen-up',
      frames: this.anims.generateFrameNumbers('gen',
        { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'gen-left',
      frames: this.anims.generateFrameNumbers('gen',
        { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'gen-down',
      frames: this.anims.generateFrameNumbers('gen',
        { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'gen-right',
      frames: this.anims.generateFrameNumbers('gen',
        { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1
    });


    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 40)

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);


    this.WallLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.WallLayer)

    this.Deco4Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Deco4Layer)

    this.KitchenLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.KitchenLayer)

    this.Kitchen2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Kitchen2Layer)

    this.Wall2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Wall2Layer)

    this.DecoLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.DecoLayer)

    this.Deco2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Deco2Layer)

    this.TableLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.TableLayer)

    this.Deco3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.Deco3Layer)

    // camera follow player
    //this.cameras.main.startFollow(this.player);
    this.physics.add.overlap(this.player, [this.checklist1, this.checklist2, this.checklist3, this.checklist4], this.collectchecklist, null, this);
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
      this.player.x > 140 &&
      this.player.x < 177 &&
      this.player.y < 190

    ) {
      console.log("level2");
      this.level2();

    }
  }

  collectchecklist(player, item) {
    console.log("collectchecklist");
    //this.cameras.main.shake(200);
    window.checklist++
    item.disableBody(true, true); // remove fire
    return false;

  }

  // call this function when overlap
  collectchecklist(player, item) {
    console.log("collectchecklist")
    this.checklist.play()
    // this.cameras.main.shake(100) // 500ms
    item.disableBody(true, true)
    window.item1 = 1
    return false;
  }

  //update() {} /////////////////// end of update //////////////////////////////
  // Function to jump to room1
  level2(player, tile) {
    console.log("level2 function");
    this.scene.start("level2",);
  }
} //////////// end of class world ////////////////////////
