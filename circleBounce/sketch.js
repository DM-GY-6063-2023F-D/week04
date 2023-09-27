function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

let xPos = 0;
let xVelocity = 5;

function draw() {
  background('darkred');
  ellipse(xPos, 50, 50, 50);

  xPos = xPos + xVelocity;

  if (xPos > width) {
    xVelocity = -5;
  }
  if (xPos < 0) {
    xVelocity = 5;
  }
}
