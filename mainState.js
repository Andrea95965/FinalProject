var mainState = {

    
    create: function() {
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor ='#6F1409';   
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite (150, 100, 'fatDino');
        
        this.fireball = this.game.add.sprite(200, 0, 'fireball');
        this.fireball2 = this.game.add.sprite(400,0,'fireball');
        this.fireball3 = this.game.add.sprite(600,0,'fireball');
        this.fireball4 = this.game.add.sprite (800,0,'fireball');
        this.fireball5 = this.game.add.sprite (1000,0,'fireball');
        this.fireball6 = this.game.add.sprite (1200,0,'fireball');
        this.fireball7=this.game.add.sprite (1300,0,'fireball');
        this.fireball8 = this.game.add.sprite (200,0,'fireball');
    
        this.player.body.gravity.y = 600;
        
        this.fireball.body.gravity.y = 400;
        this.fireball2.body.gravity.y= 300;
        this.fireball3.body.gravity.y= 200;
        this.fireball4.body.gravity.y= 100;
        this.fireball5.body.gravity.y= 50;
        this.fireball6.body.gravity.y= 25;
        this.fireball7.body.gravity.y= 15;
        this.fireball8.body.gravity.y=10

        
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
        '                     o   o         xxxxx                             ',
        '              o     xxxxxxx                          xxxxx           ',
        '    o  o  o                                                          ',
        '                                                                     ',
        ' xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    xxxxx                      ',   
        '                                                                     ',   
        '                                                           xxxxx     ',   
        '                                                                     ',  
        '                                                                     ',         
        '                                                                     ',
        '                                                                     ',
        '                                                     xxxxx           ',
        '                                                                     ',
        'xxxxxx      xxxxxxxxxxxxxxxxx!!!!!!!!!!!!xxxxxxxx                    ',
        '                                                                     ',   
        '                                                                     ',
        '         o                                                  o        ',
        '       xxxxxx                                             xxxxxx     ',   
        '                       o               o                             ',   
        '                      xxxxx         o xxxx                           ',   
        '        o               o       o xxxxxxxxxxx                        ',   
        '                             o xxxxxxxxxxxxxxxxx                     ',   
        ' o            o             xxxxxxxxxxxxxxxxxxxxxxx                  ',    
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


    }, 
    update: function(){
    this.physics.arcade.collide(this.walls, this.player);
    this.physics.arcade.collide(this.player, this.foods, this.takeFood, null,this);
    this.physics.arcade.overlap(this.player, this.lavas, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball, this.restart, null, this);
    
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
  
        if(this.cursor.up.isDown){
           this.player.body.velocity.y =  -100;
            
        }
        
        
        
        
        
    },
takeFood: function(player,food){
        food.kill();
        
},
    
    restart: function(){
        this.game.state.start('gameOver');
        
    }


};