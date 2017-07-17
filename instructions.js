var instructions ={
    
    create: function (){
      
        var instructionsScreen = this.game.add.sprite(710,350,'instructions');
        instructionsScreen.anchor.setTo(0.5,0.5);
    
        var startButton = this.game.add.button(710,292,'start',this.playTheGame,this);
        startButton.anchor.setTo(0.5,0.5)
    
    
    },
    playTheGame:function(){
        
        this.game.state.start('state1');
    }
    
};