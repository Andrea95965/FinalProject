var dinoMite ={
    create:function(){
      var dinoMiteTitle =this.game.add.sprite(710,350,"dinoMite");
      dinoMiteTitle.anchor.setTo(0.5,0.5);
      var startButton = this.game.add.button(710,292,"replay",this.playTheGame,this);
      startButton.anchor.setTo(0.5,0.5);
        
    },

    playTheGame:function(){
        
        this.game.state.start("state1");
    
    
    }
};

