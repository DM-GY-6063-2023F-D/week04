// pseudo-code:
  // translate
  // rotate
  // draw
  // un-rotate
  // un-translate

function rotatedRect(x, y, w, h, rotateAngleDegrees) {
  translate(x, y);
  rotate(radians(rotateAngleDegrees));
  rect(0, 0, w, h);
  rotate(radians(-rotateAngleDegrees));
  translate(-x, -y);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('gold');
  fill(0);
  rotatedRect(100, 100, 80, 100, 10);

  rotatedRect(250, 100, 80, 100, 25);

  rotatedRect(400, 100, 80, 100, 50);
}
