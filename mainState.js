var mainState = {

    
    create: function() {
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor ='#6F1409';   
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite (150, 100, 'fatDino');
        

        this.fireball = this.game.add.sprite(707, 0, 'fireball');

 
        this.fireball = this.game.add.sprite(700, 0, 'fireball');
        this.fireball2 = this.game.add.sprite(4000,0,'fireball');
        this.fireball3 = this.game.add.sprite(150,0,'fireball');
        this.fireball4 = this.game.add.sprite (850,0,'fireball');
        this.fireball = this.game.add.sprite(200, 0, 'fireball');

        this.fireball2 = this.game.add.sprite(400,0,'fireball');
        this.fireball3 = this.game.add.sprite(600,0,'fireball');
        this.fireball4 = this.game.add.sprite (800,0,'fireball');
        this.fireball5 = this.game.add.sprite (1000,0,'fireball');
        this.fireball6 = this.game.add.sprite (1200,0,'fireball');
        this.fireball7=this.game.add.sprite (1300,0,'fireball');
        this.fireball8 = this.game.add.sprite (600,0,'fireball');
        this.fireball9 = this.game.add.sprite (650,0,'fireball');
        this.fireball10= this.game.add.sprite (980,0,'fireball');
        this.fireball11= this.game.add.sprite (700,0,'fireball');
        this.fireball12= this.game.add.sprite (900,0,'fireball');
        this.fireball13= this.game.add.sprite (1100,0,'fireball');
        this.fireball14= this.game.add.sprite (100,0,'fireball');
        this.fireball15= this.game.add.sprite (780,0,'fireball');
        this.fireball16= this.game.add.sprite (5000,0,'fireball');
        this.fireball17= this.game.add.sprite (579,0,'fireball');
        this.fireball18= this.game.add.sprite (858,0,'fireball');
        this.fireball14= this.game.add.sprite (1000,0,'fireball');
        this.fireball15= this.game.add.sprite (1400,0,'fireball');
        this.fireball16= this.game.add.sprite (289,0,'fireball');
        this.fireball17= this.game.add.sprite (500,0,'fireball');
        this.fireball18= this.game.add.sprite (800,0,'fireball');
        this.fireball19= this.game.add.sprite (1000,0,'fireball');
        this.fireball20= this.game.add.sprite (980,0,'fireball');
        this.fireball21= this.game.add.sprite (800,0,'fireball');
        this.fireball22= this.game.add.sprite (408,0,'fireball');
        this.fireball23= this.game.add.sprite (1043,0,'fireball');
        this.fireball24= this.game.add.sprite (543,0,'fireball');
        this.fireball24= this.game.add.sprite (237,0,'fireball');
        this.fireball25= this.game.add.sprite (764,0,'fireball');
        this.fireball26= this.game.add.sprite (979,0,'fireball');
        this.fireball27= this.game.add.sprite (230,0,'fireball');
        this.fireball28= this.game.add.sprite (5089,0,'fireball');
        this.fireball29= this.game.add.sprite (867,0,'fireball');
        this.fireball30= this.game.add.sprite (4000,0,'fireball');
        this.fireball28= this.game.add.sprite (50,0,'fireball');
        this.fireball29= this.game.add.sprite (480,0,'fireball');
        this.fireball30= this.game.add.sprite (400,0,'fireball');
      

        this.player.body.gravity.y = 600;
        
        this.fireball.body.gravity.y = 100;
        this.fireball2.body.gravity.y= 68;
        this.fireball3.body.gravity.y= 100;
        this.fireball4.body.gravity.y= 300;
        this.fireball5.body.gravity.y= 150;
        this.fireball6.body.gravity.y= 25;
        this.fireball7.body.gravity.y= 1;
        this.fireball8.body.gravity.y=78;
        this.fireball9.body.gravity.y=8;
        this.fireball10.body.gravity.y=10;
        this.fireball11.body.gravity.y=20;
        this.fireball12.body.gravity.y=15;
        this.fireball13.body.gravity.y=100;
        this.fireball14.body.gravity.y=190;
        this.fireball7.body.gravity.y= 15;
        this.fireball8.body.gravity.y=16;
        this.fireball9.body.gravity.y=10;
        this.fireball10.body.gravity.y=10;
        this.fireball11.body.gravity.y=20;
        this.fireball12.body.gravity.y=15;
        this.fireball13.body.gravity.y=13;
        this.fireball14.body.gravity.y=100;
        this.fireball15.body.gravity.y=70;
        this.fireball16.body.gravity.y=120;
        this.fireball17.body.gravity.y=100;
        this.fireball18.body.gravity.y=10;
        this.fireball19.body.gravity.y=12;
        this.fireball20.body.gravity.y=20;
        this.fireball21.body.gravity.y=11;
        this.fireball22.body.gravity.y=90;
        this.fireball23.body.gravity.y=12;
        this.fireball24.body.gravity.y=90;
        this.fireball25.body.gravity.y=8;
        this.fireball26.body.gravity.y=45;
        this.fireball27.body.gravity.y=50;
        this.fireball28.body.gravity.y=23;
        this.fireball29.body.gravity.y=33;
        this.fireball30.body.gravity.y=20;

        
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
    this.physics.arcade.overlap(this.player,this.fireball, this.restart, null, this);

//        check if time reaches 0 -> end the game

    this.physics.arcade.overlap(this.player,this.fireball2, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball3, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball4, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball5, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball6, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball7, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball8, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball9, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball10, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball11, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball12, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball13, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball14, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball15, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball16, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball17, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball18, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball19, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball20, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball21, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball22, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball23, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball24, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball25, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball26,this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball27, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball28, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball29, this.restart, null, this);
    this.physics.arcade.overlap(this.player,this.fireball30, this.restart, null, this);
        
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