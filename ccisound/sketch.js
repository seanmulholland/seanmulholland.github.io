// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill


function preload(){
  sound = loadSound('tuamie.mp3');
}

function setup() {
createCanvas(windowWidth,windowHeight, WEBGL);
noStroke();
colorMode(HSB);

  amplitude = new p5.Amplitude();
  sound.play();

slider = createSlider(0,100,100);
slider.position(20,20);

}

function draw() {

var level = amplitude.getLevel();
var radius = map(level, 0, 0.5, 200, 250);
var tubeRadius = map(level, 0, 0.5, 1, 30);
var rotate = map(slider.value(), 0, 100, 0, 0.01);


  for (i = 0; i < 7; i++) {

      rotateX(frameCount * rotate);
      rotateY(frameCount * rotate);
      torus(radius, tubeRadius);

  }



}
