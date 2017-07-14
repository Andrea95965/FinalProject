var mainState = {

    
    create: function() {
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor ='#6F1409';   
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite (150, 100, 'fatDino');
        

        

        this.player.body.gravity.y = 600;
        
        
        

        
         var delay = 0;

    for (var i = 0; i < 40; i++)
    {
        var sprite = this.game.add.sprite(-100 + (this.game.world.randomX), -100, 'meteor');

        sprite.scale.set(this.game.rnd.realInRange(0.1, 0.6));

        var speed = this.game.rnd.between(4000, 6000);

        this.game.add.tween(sprite).to({ y: 700 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 200;
    }




        this.walls = this.game.add.group();
        this.foods = this.game.add.group();
        this.lavas = this.game.add.group();
        
        var level = [
        '!                                                                   !',
        '!                                    o                  o           !',
        '!                    o   o         xxxxx                            !',
        '!             o     xxxxxxx                          xxxxx          !',
        '!                                                                   !',
        '!                                                                   !',
        '!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    xxxxx                     !',   
        '!                                                            o      !',   
        '!                                                          xxxxx    !',   
        '!                                                                   !',  
        '!                                                                   !',         
        '!                                                                   !',
        '!                                 o                                 !',
        '!                                xxx                                !',
        '!  o                                                                !',
        '!xxxxx      xxxxxxxxxxxxxxxxx!!!!!!!!!!!!xxxxxxxx                   !',
        '!                                                    o              !',   
        '!      x                                            xxxx            !',
        '!         o                                                 o       !',
        '!      xxxxxx                                             xxxxxx    !',   
        '!               xxx    o               o                            !',   
        '!                     xxxxx         o xxxx                          !',   
        '!       o               o       o xxxxxxxxxxx               o       !',   
        '!                            o xxxxxxxxxxxxxxxxx            x       !',   
        '!             o             xxxxxxxxxxxxxxxxxxxxxxx                 !',    
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!xxx',
        
        
        
        ];
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {


                if (level[i][j] == 'x') {
                    var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }


                else if (level[i][j] == 'o') {
                    var food = this.game.add.sprite(30+20*j, 30+20*i, 'food');
                    this.foods.add(food);
                     
                }


                else if(level[i][j] == '!') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
                    this.lavas.add(enemy);
                }
            }
        }
    this.score = 0;
    this.text = this.game.add.text(10,10,"Score:"+ this.score,{ fontSize: '20px', fill:'#000'});
    this.text.addColor("#000000",0);
        
        this.total = 40;
    this.timer = this.game.time.create(false);
            this.timerText = this.game.add.text(1320,10,"Time:"+ this.total,{ fontSize: '20px', fill:'#000'});
    this.timer.loop(1000, this.updateCounter, this);
    this.timer.start();

    }, 
    update: function(){
    this.physics.arcade.collide(this.walls, this.player);
    this.physics.arcade.collide(this.player, this.foods, this.takeFood, null,this);
    this.physics.arcade.overlap(this.player, this.lavas, this.restart, null, this);
   
        //        check if time reaches 0 -> end the game
        if(this.total==0&&this.score<2000){
            this.game.state.start('gameOver');
        }
        
        if(this.total==0&&this.score==2000){
            this.game.state.start('dinoMite')
        }

        if(this.cursor.left.isDown){
           this.player.body.velocity.x = -200;
            this.player.scale.setTo(-1,1);   
        }
    else if(this.cursor.right.isDown){
        this.player.body.velocity.x = 200;
        this.player.scale.setTo(1,1);
    }
      else{
          this.player.body.velocity.x = 0;
          
      } 
  
        if(this.cursor.up.isDown && this.player.body.touching.down){
           this.player.body.velocity.y =  -275;
            
        }
        
        
        
        
        
        
        
        
    },
updateCounter: function() {

    this.total--;
        this.timerText.text = (10,10,"Time:"+ this.total);

},
takeFood: function(player,food){
        food.kill();
    this.score += 100;
    this.text.text = (10,10,"Score:"+ this.score);
        
},
    
    restart: function(){
        this.game.state.start('gameOver');
        
    }


};