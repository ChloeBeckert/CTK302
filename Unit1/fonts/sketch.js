let f1, f2;
function setup() {
  createCanvas(1000, 1000);
  f1= loadFont("assets/Mindset.ttf")
  f2= loadFont("assets/Rich.otf")
  textAlign(CENTER);
}

function draw() {
  background("white");
  textFont(f1);
  textSize(48);
  text("Hello World!", width/2 ,300);

  textFont(f2);
  textSize(48)
  text("Go you Redbirds!", width/2, 150)

}
