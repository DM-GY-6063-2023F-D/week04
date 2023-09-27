function drawMarilyn(x, y, w, hairColor, eyeLinerColor) {
  fill('pink');
  ellipse(x, y, w, 100);

  fill(hairColor);
  arc(x, y - 20, w, 80, PI, 0, CHORD);

  fill('black');
  ellipse(x - 20, y - 5, 10, 10);
  ellipse(x + 20, y - 5, 10, 10);

  fill(eyeLinerColor);
  ellipse(x - 20, y - 10, 20, 10);
  ellipse(x + 20, y - 10, 20, 10);

  fill('hotpink');
  arc(x, y + 20, 30, 20, PI / 10, PI - PI / 10, PIE);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('gold');
  randomSeed(10);

  drawMarilyn(50, 120, 80, 'hotpink', 'cyan');
  drawMarilyn(150, 320, 80, 'dodgerblue', 'goldenrod');
  drawMarilyn(250, 220, 80, 'grey', 'LightGreen');

  for (let xPos = 50; xPos < width; xPos += 100) {
    let hair = color(random(100, 255), random(100, 255), random(100, 255));
    let eye = color(random(100, 255), random(100, 255), random(100, 255));
    drawMarilyn(xPos, height / 2, 80, hair, eye);
  }
}
