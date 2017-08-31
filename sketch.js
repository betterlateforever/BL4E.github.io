function setup() {
  createCanvas(640, 480);
  background(50)
}

  function draw() {
    stroke(0);
    //background(50)
    fill(50, 50, 255, 25);
    ellipseMode(CENTER);

    ellipse(mouseX, mouseY, 100, 100);
    ellipse(mouseX, mouseY, 90, 90);
    ellipse(mouseX, mouseY, 80, 90);
    ellipse(mouseX, mouseY, 70, 90);
    ellipse(mouseX, mouseY, 60, 90);
    ellipse(mouseX, mouseY, 50, 90);
    ellipse(mouseX, mouseY, 40, 90);
    ellipse(mouseX, mouseY, 30, 90);
    ellipse(mouseX, mouseY, 20, 90);
    ellipse(mouseX, mouseY, 10, 90);

    fill(225, 50, 50, 25);
    ellipse(width-mouseX, mouseY, 90, 10);
    ellipse(width-mouseX, mouseY, 80, 20);
    ellipse(width-mouseX, mouseY, 70, 30);
    ellipse(width-mouseX, mouseY, 60, 40);
    ellipse(width-mouseX, mouseY, 50, 50);
    ellipse(width-mouseX, mouseY, 40, 60);
    ellipse(width-mouseX, mouseY, 30, 70);
    ellipse(width-mouseX, mouseY, 20, 80);
    ellipse(width-mouseX, mouseY, 10, 90);
  }
  
  function mousePressed (){
   background(random(255),random(255),random(255))
  }
