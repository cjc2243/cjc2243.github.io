var x1 = 150;
var y1 = 0;
var x2 = 350;
var y2 = 0

function setup() {
  createCanvas(600, 600);


}

function draw() {
  background(240);

  // Put time in variables for easy testing
  var s = second();
  var m = minute();
  var h = hour();

  fill(255, 102, 102);
  ellipse(map(h, 0, 23, 5, 595), map(h, 0, 23, 5, 595), 200, 200);

  // make circle for minutes
  fill(255, 140, 102);
  ellipse(map(m, 0, 59, 5, 595), map(m, 0, 59, 5, 595), 110, 110);

  fill(255, 255, 102);
  ellipse(map(s, 0, 59, 5, 595), map(s, 0, 59, 5, 595), 15, 15);
 

}