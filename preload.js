var preload ={
    
    preload: function(){
        

        this.game.load.image('player1','redDino.png');
        this.game.load.image('player2','fatDino.png');
        this.game.load.image('player3','spikyDino.png');

        this.game.load.image('fatDino','fatDino.png');
        this.game.load.image('donut','donut.png');
        this.game.load.image('steak','steak.png');
        this.game.load.image('pizza','pizza.png');
        this.game.load.image('popsicle','popsicle.png');
        this.game.load.image('taco','taco.png');
        this.game.load.image('sushi','sushi.png');
        this.game.load.image('pancake','pancake.png');
        this.game.load.image('gameover','gameoverRed.png');
        this.game.load.image('loading','loading.png');
        this.game.load.image('start','startButton.png');
        this.game.load.image('wall','grass.png');
        this.game.load.image('gameTitle','gameTitle.png');
    },
    
    create :function (){
    
    this.game.state.start("gameTitle");
    }
};