var preload ={
    
    preload: function(){
        

        this.game.load.image('player1','redDino.png');
        this.game.load.image('player2','fatDino.png');
        this.game.load.image('player3','spikyDino.png');

        this.game.load.image('fatDino','fatDino.png');
        this.game.load.image('food','cake.png')
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