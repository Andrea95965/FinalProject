var gameOver = {
    
    create:function(){
        var gameOverTitle=this.game.add.sprite(250,75,"gameover");
       gameOverTitle.anchor.setTo(0.5,0.5);
        var startButton = this.game.add.button(250,160,"start",this.playTheGame,this);
        startButton.anchor.setTo(0.5,0.5);
    },
    
    playTheGame:function(){
        
        this.game.state.start("state1");
    }
};
