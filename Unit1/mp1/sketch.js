function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(0, 200, 255);
  noStroke();

  if (mouseIsPressed) {
    background(0, 200, 255);
    fill(75, 200, 50);
    rect(width / 2, 750, 600, 100);
    // stuff that shows when the mouse is pressed
    fill(75, 75, 30);
    rect(200, 415, 100, 650);
    triangle(246, 300, 246, 375, 409, 250);
    triangle(248, 90, 153, 125, 75, 0);
    triangle(151, 725, 213, 715, 116, 780);
    triangle(161, 723, 213, 710, 200, 787);
    triangle(202, 740, 245, 696, 306, 780);
    fill(0, 100, 50);
    circle(371, 267, 150);
    circle(316, 360, 100);
    circle(412, 365, 125);
    circle(75, 0, 200);
    circle(85, 155, 175);
    circle(270, 10, 200);
    circle(130, 30, 125);
    fill(255, 255, 60);
    ellipse(500, 100, 125, 125);
  } else {
    background(50, 125, 190);
    fill(100, 175, 50);
    rect(width / 2, 750, 600, 100);
    fill(75, 75, 30);
    rect(158, 730, 20, 75);
    triangle(148, 694, 169, 694, 123, 602);
    triangle(165, 710, 165, 735, 190, 695);

    fill(0, 100, 50);
    ellipse(120, 610, 30, 20);
    ellipse(200, 693, 30, 20);
    fill(95);
    arc(116, 87, 100, 100, PI, 0);
    arc(236, 87, 150, 200, PI, 0);
    arc(450, 136, 100, 100, PI, 0);
    arc(536, 136, 100, 50, PI, 0);
  }
  textSize(24);
  fill(0);
  text(
    "This is Berry the Sapling. She starts out as a small sapling, but with enough rain and sunshine, she turns into a tall, gorgeous tree!",
    430,
    575,
    300,
    200
  );
}
