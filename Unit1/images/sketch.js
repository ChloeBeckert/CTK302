let img1, img2, img3 ;

function setup() {
  createCanvas(500, 500);

  imageMode(CENTER);
  img1=loadImage("assets/plants.jpg");
  img2=loadImage("assets/kitten.jfif");
  img3=loadImage("assets/music.png");
}

function draw() {
background(220);
image(img1,width/2,height/2,100,100);
image(img2,width/2,height/2-120,100,100);
image(img3,width/2,height/2+120,100,100);
}
