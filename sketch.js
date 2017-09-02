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
  circleSpeedX = 2;
  circleSpeedY = 2;
  diamondSpeedX = 2;
  diamondSpeedY = 2;
  motion = false;
}
function draw() {
  stroke(0);
  fill(50, 50, 255, 25);
  ellipseMode(CENTER);
//motion and size conditions
if (motion) {
  circleLocX = circleLocX + circleSpeedX;
  circleLocY = circleLocY + circleSpeedY;
  diamondLocX = diamondLocX - diamondSpeedX;
  diamondLocY = diamondLocY - diamondSpeedY;
//size
  circleSizeX = circleSizeX + random(-1, 1);
  circleSizeY = circleSizeY + random(-1, 1);
  diamondSizeX = diamondSizeX + random(-1, 1);
  diamondSizeY = diamondSizeX + random(-1, 1);
}
//circle boundary conditions
if (circleLocX > width || circleLocX < width - width) {
  circleSpeedX = circleSpeedX * -1;
}
if (circleLocY > height || circleLocY < height - height) {
  circleSpeedY = circleSpeedY * -1;
}
//diamond boundary conditions
if (diamondLocX > width || diamondLocX < width - width) {
  diamondSpeedX = diamondSpeedX * -1;
}
if (diamondLocY > height || diamondLocY < height - height) {
  diamondSpeedY = diamondSpeedY * -1;
}
  //circle structure
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
  //diamond structure
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
  //boolean switching on mouse press
  motion = !motion;
}
