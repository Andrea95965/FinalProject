var preload ={
    
    preload: function(){
        var loadingBar = this.add.sprite(160,240,"loading");
        console.log("loaded loading bar");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        
        this.game.load.image('fatDino','newDino2.png');
        this.game.load.image('food','cake.png');
        this.game.load.image('gameover','gameover6.png');
        this.game.load.image('start','startbutton2.png');
        this.game.load.image('wall','betterRock.png');
        this.game.load.image('gameTitle','gameTitle.png');
        this.game.load.image('meteor','meteor.png');
        this.game.load.image('lava','lava.png'); 
        this.game.load.image('fireball','coolFireball.png')
       this.game.load.image('replay','New Piskel(2).png')
        console.log("loaded all assets");
    },
    
    create: function(){
        console.log("starting gameTitle");
        this.game.state.start("gameTitle");
    }
};