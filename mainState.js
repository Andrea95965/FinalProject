var mainState = {

    
    create: function(){
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor = '#87CEEB';   
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite(70, 100, 'player');
    
        this.player.body.gravity.y = 600;
        
        this.walls = this.game.add.group();
        this.foods =this.game.add.group();
        this.lavas = this.game.add.group();
