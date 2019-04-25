let yoff = 0.0; // 2nd dimension of perlin noise
let montserrat;

function preload() {
  montserrat = loadFont('assets/Montserrat-SemiBold.ttf');
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  canvas.parent('sketch-holder');
}

function draw() {
  color(HSB);
  // background('#CF78BB');
  background('#ffffff');
  noStroke();

  // var col = lerpColor('#2cdaff', '#fc861d')

  fill('#BDFCE8');
  // We are going to draw a polygon out of the wave points
  beginShape();

  // let xoff = 0; // Option #1: 2D Noise
  let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = windowWidth/2-250; x <= windowWidth/2+250; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y+50);
    // Increment x dimension for noise
    xoff += 0.1;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth/2+250, height-450);
  vertex(windowWidth/2-250, height-100);
  endShape(CLOSE);

  fill('#CF78BB');
  textFont(montserrat);
  textAlign(CENTER, CENTER);

  push()
  translate(windowWidth/2, windowHeight/2);
  angleMode(DEGREES);
  rotate(-35);
  textSize(80);
  text('parallax',0, 0);
  pop()
}

//--------------------------------------------------------------