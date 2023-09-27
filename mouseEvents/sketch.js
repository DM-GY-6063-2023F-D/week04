function setup() {
  createCanvas(windowWidth, windowHeight);
  background('gold');
  fill(0);
}

function draw() {
}

function mouseClicked() {
  fill(random(100, 200), 0, 0);
  rect(mouseX, mouseY, 80, 80);
}

function mouseDragged() {
  stroke(0);
  line(0, 0, mouseX, mouseY);
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('myCanvas', 'jpg');
  } else if (key == 'r') {
    background('gold');
  }
}
