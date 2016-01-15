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

slider = createSlider(0,100,100);
slider.position(20,20);

}

function draw() {
var radius = map(mic.getLevel(), 0, 0.5, 200, 300);
var tubeRadius = map(mic.getLevel(), 0, 0.17, 1, 30);
var rotate = map(slider.value(), 0, 100, 0, 0.015);


  for (i = 0; i < 7; i++) {

      rotateX(frameCount * rotate);
      rotateY(frameCount * rotate);
      torus(radius, tubeRadius);

  }



}