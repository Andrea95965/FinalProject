var preload ={
    
    preload: function(){
        
        this.game.load.image('fatDino','fatDino.png');
        this.game.load.image('food','cake.png')
        this.game.load.image('gameover','gameoverRed.png');
        this.game.load.image('loading','loading.png');
        this.game.load.image('start','startbutton2.png');
        this.game.load.image('wall','grass.png');
        this.game.load.image('gameTitle','gameTitle.png');
        this.game.load.image('meteor','meteor.png');
        this.game.load.image('lava','lava.png');
    },
    
    create :function (){
    this.game.state.start("gameTitle");
    }
};