function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

function draw() {
  background('darkblue');
  let secondsNow = second();
  let myDiameter = map(secondsNow, 0, 59, 100, height);
  ellipse(width / 2, height / 2, myDiameter, myDiameter);
}
