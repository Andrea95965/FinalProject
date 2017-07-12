var preload ={
    
    preload: function(){
        var loadingBar = this.add.sprite(160,240,"loading");
        console.log("loaded loading bar");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        
        this.game.load.image('fatDino','newDino1.png');
        this.game.load.image('food','cake.png');
//        this.game.load.image('gameover','gameoverRed.png');
        this.game.load.image('start','startbutton2.png');
        this.game.load.image('wall','grass.png');
        this.game.load.image('gameTitle','gameTitle.png');
        this.game.load.image('meteor','meteor.png');
        this.game.load.image('lava','lava.png');
        console.log("loaded all assets");
    },
    
    create: function(){
        console.log("starting gameTitle");
        this.game.state.start("gameTitle");
    }
};