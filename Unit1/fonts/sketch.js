var f1;
function setup() {
  createCanvas(1000, 1000);
  f1= loadFont("assets/Mindset.ttf")
}

function draw() {
  background("white");
  textFont(f1);
  textSize(120);
  text("Hello World!", 250,250);

}
