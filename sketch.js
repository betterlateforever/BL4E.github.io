function setup() {
  //canvas size
  createCanvas(640, 480);
  //background colours
  redBg = 50;
  greenBg = 50;
  blueBg = 50;
  background(redBg, greenBg, blueBg);
  //circle sprite location/size
  circleLocX = width / 2;
  circleSizeX = 100;
  circleLocY = height / 2;
  circleSizeY = 100;
  //diamond sprite location/size
  diamondLocX = width / 2;
  diamondSizeX = 90;
  diamondLocY = width / 2 - 80;
  diamondSizeY = 90;
}

function draw() {
  stroke(0);
  //background(redBg, greenBg, blueBg);
  fill(50, 50, 255, 25);
  ellipseMode(CENTER);

  if (circleLocX > width+50){
    circleLocX = width-width-50;
  }
    if (circleLocY > height+50){
    circleLocY = height-height-50;
  }

  circleLocX = circleLocX + 2;
  circleLocY = circleLocY + 2;
  circleSizeX = circleSizeX + random(-1,+1);
  circleSizeY = circleSizeY + random(-1,+1);
  
    if (diamondLocX < -50){
    diamondLocX = width+50;
  }
    if (diamondLocY < -50){
    diamondLocY = height+50;
  }
  
  diamondLocX = diamondLocX - 2;
  diamondLocY = diamondLocY - 2;
  diamondSizeX = diamondSizeX + random(-1,+1);
  diamondSizeY = diamondSizeY + random(-1,+1);
  
  ellipse(circleLocX, circleLocY, circleSizeX, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 10, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 20, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 30, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 40, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 50, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 60, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 70, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 80, circleSizeY);
  ellipse(circleLocX, circleLocY, circleSizeX - 90, circleSizeY);

  fill(225, 50, 50, 25);
  ellipse(diamondLocX, diamondLocY, diamondSizeX, diamondSizeY - 80);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 10, diamondSizeY - 70);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 20, diamondSizeY - 60);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 30, diamondSizeY - 50);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 40, diamondSizeY - 40);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 50, diamondSizeY - 30);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 60, diamondSizeY - 20);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 70, diamondSizeY - 10);
  ellipse(diamondLocX, diamondLocY, diamondSizeX - 80, diamondSizeY);
}

function mousePressed() {
  redBg = random(255);
  greenBg = random(255);
  blueBg = random(255);
}
