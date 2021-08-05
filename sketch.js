    var player,bg,bgImg,shooterImg,shooter_shooting;

    function preload(){

      bgImg = loadImage("assets/bg.jpeg");

      shooterImg = loadImage("assets/shooter_2.png")

      shooter_shooting = loadImage("assets/shooter_3.png")

    }

    function setup(){

      createCanvas(windowWidth,windowHeight);

      bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
      bg.addImage(bgImg)
      bg.scale = 1.1

      player = createSprite(displayWidth-1150,displayHeight-300,50,50)
      player.addImage(shooterImg)
      player.scale = 0.5

    }

    function draw(){

      background("black")

      if(keyWentDown("space")){

        player.addImage(shooter_shooting)

      }
      else if(keyWentUp("space")){

        player.addImage(shooterImg)

      }

      if(keyDown("UP_ARROW")){

        player.y = player.y -30

      }

      if(keyDown("DOWN_ARROW")){

        player.y = player.y +30

      }

      if(keyDown("RIGHT_ARROW")){

        player.x = player.x +30

      }

      if(keyDown("LEFT_ARROW")){

        player.x = player.x -30

      }

      drawSprites();

    }