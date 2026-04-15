function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  stroke(255, 100); // Faint white lines
  translate(width / 2, height); // Start at the bottom center
  drawBranch(100); // Start drawing the "tree"
}

function drawBranch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(map(mouseX, 0, width, 0, PI/2)); // Mouse moves the branches!
    drawBranch(len * 0.67);
    pop();
    push();
    rotate(-map(mouseX, 0, width, 0, PI/2));
    drawBranch(len * 0.67);
    pop();
  }
}
