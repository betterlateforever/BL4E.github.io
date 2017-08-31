function setup() {
  createCanvas(640, 480);
  background(50)
}

  function draw() {
    stroke(0);
    //background(50)
    fill(50, 50, 255, 25);
    ellipseMode(CENTER);

    ellipse(mouseX, height / 2, 100, 100);
    ellipse(mouseX, height / 2, 90, 90);
    ellipse(mouseX, height / 2, 80, 90);
    ellipse(mouseX, height / 2, 70, 90);
    ellipse(mouseX, height / 2, 60, 90);
    ellipse(mouseX, height / 2, 50, 90);
    ellipse(mouseX, height / 2, 40, 90);
    ellipse(mouseX, height / 2, 30, 90);
    ellipse(mouseX, height / 2, 20, 90);
    ellipse(mouseX, height / 2, 10, 90);

    fill(225, 50, 50, 25);
    ellipse(width / 2, mouseY, 90, 10);
    ellipse(width / 2, mouseY, 80, 20);
    ellipse(width / 2, mouseY, 70, 30);
    ellipse(width / 2, mouseY, 60, 40);
    ellipse(width / 2, mouseY, 50, 50);
    ellipse(width / 2, mouseY, 40, 60);
    ellipse(width / 2, mouseY, 30, 70);
    ellipse(width / 2, mouseY, 20, 80);
    ellipse(width / 2, mouseY, 10, 90);
  }
  
  function mousePressed (){
   background(+30,+60,+50) 
  }
