var mainState = {

    
    create: function() {
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor ='#87CEEB';   
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite (150, 100, 'fatDino');
        
        this.meteor = this.game.add.sprite(400, 100, 'meteor');
    
        this.player.body.gravity.y = 600;
        
        this.meteor.body.gravity.y = 100;

        
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
        '                                                                     ',
        '                                   o  o               o              ',
        '                     o   o      o xxxxx                              ',
        '              o     xxxxxxx     x                   xxxxx            ',
        '    o  o  o                                                          ',
        '                                                                     ',
        ' xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxx                        ',   
        '                                                                     ',   
        '                                                                     ',   
        '                                                                     ',  
        'xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   o  !!!!!!!!!                ',         
        '                    o              o                                 ',
        '                  o   o        xxxxxxxxx     o                       ',
        '                o       o                                            ',
        '              o           o                                          ',
        'xxxxxx      xxxxxxxxxxxxxxxxx!!!!!!!!!!!!xxxxxxxx                    ',
        '                                                                     ',   
        '                                                                     ',
        '     xxxxxx   o                                        ',
        '              !!!!!!       xxx                                       ',   
        '              !!!!!!   o               o                             ',   
        '                     xxxxx          o xxxx                           ',   
        '        o               o       o xxxxxxxxxxx                        ',   
        '                     xxxxx   o xxxxxxxxxxxxxxxxx                     ',   
        ' o            o             xxxxxxxxxxxxxxxxxxxxxxx                  ',    
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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


    }, 
    update: function(){
    this.physics.arcade.collide(this.walls, this.player);
    this.physics.arcade.collide(this.player, this.foods, this.takeFood, null,this);
    this.physics.arcade.overlap(this.player, this.lavas, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.meteor, this.restart, null, this);
    
        if(this.cursor.left.isDown){
           this.player.body.velocity.x = -200;
           }
    else if(this.cursor.right.isDown){
        this.player.body.velocity.x = 200;
    }
      else{
          this.player.body.velocity.x = 0;
          
      } 
  
        if(this.cursor.up.isDown && this.player.body.touching.down){
           this.player.body.velocity.y =  -300;
            
        }
        
        
        
        
        
    },
takeFood: function(player,food){
        food.kill();
        
},
    
    restart: function(){
        this.game.state.start('gameOver');
        
    }


};