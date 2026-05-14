// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

let controllerImg;

function preload() {
  controllerImg = loadImage("assets/images/smiling.webp");
}

function setup() {
  createCanvas(800, 450);
  background(255, 255, 0);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(14);

  // --- Title: Exit 8 ---
  fill(0);
  textSize(36);
  textStyle(BOLD);
  text("Exit 8", width / 2, 40);
  textStyle(NORMAL);

  fill(180);
  textSize(14);
  text("Image loaded from assets/images/", width / 4, 65);
  text("Drawn using p5.js shapes", (width / 4) * 3, 65);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------
  image(controllerImg, 50, 85, 300, 300);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES — Smiling Man
  // ----------------------------------------------------------

  // Center the figure on the right half of the canvas
  let cx = (width / 4) * 3; // x = 600
  let cy = 200; // vertical center

  noStroke();

  // --- Head ---
  fill(255, 210, 160); // skin tone
  circle(cx, cy, 80);

  // --- Eyes ---
  fill(50);
  circle(cx - 14, cy - 8, 10);
  circle(cx + 14, cy - 8, 10);

  // --- Smile (arc) ---
  noFill();
  stroke(50);
  strokeWeight(3);
  arc(cx, cy + 5, 36, 28, 0, PI);

  // --- Neck ---
  noStroke();
  fill(255, 210, 160);
  rect(cx - 10, cy + 38, 20, 20);

  // --- Body / Shirt (white) ---
  fill(240, 240, 240);
  rect(cx - 38, cy + 58, 76, 90, 6);

  // --- Collar (shirt detail) ---
  fill(220);
  triangle(cx, cy + 62, cx - 14, cy + 58, cx + 14, cy + 58);

  // --- Belt ---
  fill(40, 30, 20);
  rect(cx - 38, cy + 148, 76, 10, 2);
  fill(80, 70, 60);
  rect(cx - 6, cy + 149, 12, 8, 1); // buckle

  // --- Trousers ---
  fill(50, 50, 80);
  rect(cx - 36, cy + 158, 34, 90, 4);
  rect(cx + 2, cy + 158, 34, 90, 4);

  // --- Left arm (holding briefcase) ---
  fill(255, 210, 160);
  rect(cx - 68, cy + 60, 30, 18, 6); // upper arm
  rect(cx - 72, cy + 76, 20, 50, 6); // forearm

  // --- Briefcase ---
  fill(40, 30, 20);
  rect(cx - 82, cy + 124, 36, 26, 4);
  stroke(80, 70, 60);
  strokeWeight(2);
  noFill();
  arc(cx - 64, cy + 124, 16, 14, PI, 0); // handle
  noStroke();
  fill(80, 70, 60);
  rect(cx - 68, cy + 135, 36, 4); // clasp line

  // --- Right arm (relaxed) ---
  fill(255, 210, 160);
  noStroke();
  rect(cx + 38, cy + 60, 30, 18, 6);
  rect(cx + 52, cy + 76, 20, 50, 6);

  // --- Hair (short, dark) ---
  fill(40, 30, 20);
  arc(cx, cy - 10, 80, 60, PI, 0); // top of head
  circle(cx - 38, cy - 4, 16); // left side
  circle(cx + 38, cy - 4, 16); // right side

  // --- Beard stubble suggestion ---
  fill(100, 80, 70, 120);
  ellipse(cx, cy + 22, 46, 20);
}

function draw() {
  // Nothing here — everything drawn once in setup()
}

function mousePressed() {
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

function keyPressed() {
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
