// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var mic;

function setup() {
createCanvas(windowWidth,windowHeight, WEBGL);
noStroke();
colorMode(HSB);

mic = new p5.AudioIn();
mic.start();

}

function draw() {
var d = map(mic.getLevel(), 0, 0.5, 1, 50);
var y = map(mic.getLevel(), 0, 0.5, height, 0);


  for (row = 1; row < 17; row++) {

    for (cube = 1; cube < row; cube++) {
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(d, y);
    }

  }



}