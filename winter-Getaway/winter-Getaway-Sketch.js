//Intialize variables and constants
var bgImg;
var x1 = 0;
var x2;

var carImgX;
var carImgY;

var carImgWidth;
var carImgHeight;

var scrollSpeed = 4;

var uncomingCarImg;

var uncomingCarY;

let uncomingCarYOptions;

let uncomingCarY2Options;

var uncomingCarY2;

var uncomingCarWidth;
var uncomingCarHeight;

var uncomingCarAppear;

var uncomingSemiImg;

var uncomingSemiY;

let uncomingSemiYOptions;

let uncomingSemiY2Options;

var uncomingSemiY2;

var uncomingSemiWidth;
var uncomingSemiHeight;

var uncomingSemiAppear;

var oldSlowTruckImg;

var oldSlowTruckY;

let oldSlowTruckYOptions;

let oldSlowTruckY2Options;

var oldSlowTruckY2;

var oldSlowTruckAppear;

var oldSlowTruckWidth;
var oldSlowTruckHeight;

var uncomingSemiX2;

var uncomingCarX2;

var slowCarImg;

var slowCarY;

let slowCarYOptions;

let slowCarY2Options;

var slowCarY2;

var slowCarAppear;

var slowCarWidth;
var slowCarHeight;

var timeRunning = 0;

var timeRunning2 = 0;

var timeRunning3 = 0;

var timeRunning4 = 0;

var timeRunningTotal = 0;

let snowflakes = []; //Array to hold snowflake objects

var rectColour;

var uncomingCarX;

var slowCarXMin;

var slowCarXMax;

var uncomingCarXOptions;

var uncomingSemiXOptions;

var oldSlowTruckXMin;

var oldSlowTryckXMax;

var uncomingSemiX;

var timeElapsed = 0;

var textContents;

var circleRadius;

var circleX;

var circleY;

var text2Contents;

var postDeathSequenceCounter = 0;

var text2X;

var text2Y;

var text2Width;

var canvasWidth;

var canvasHeight;

var pixelScale;

//Preload images so that they are ready when the game begins
function preload() {
  bgImg = loadImage("winter-Getaway/winter-Getaway-Images/moving-Road.jpeg");

  carImg = loadImage("winter-Getaway/winter-Getaway-Images/user-Car.png");

  uncomingCarImg = loadImage(
    "winter-Getaway/winter-Getaway-Images/uncoming-Car.png"
  );

  uncomingSemiImg = loadImage(
    "winter-Getaway/winter-Getaway-Images/uncoming-Semi.png"
  );

  oldSlowTruckImg = loadImage(
    "winter-Getaway/winter-Getaway-Images/old-Slow-Truck.png"
  );

  slowCarImg = loadImage("winter-Getaway/winter-Getaway-Images/slow-Car.png");
}

function setup() {
  pixelScale = windowWidth * 0.00066;

  canvasWidth = windowWidth * 0.66;
  canvasHeight = windowWidth * 0.22;

  createCanvas(canvasWidth, canvasHeight); //Create canvas with window width, which adds transferability

  carImgX = 0;
  carImgY = pixelScale * -2;

  carImgWidth = pixelScale * 150;
  carImgHeight = pixelScale * 82;

  uncomingCarYOptions = [pixelScale * 85, pixelScale * 255];
  uncomingCarY2Options = [pixelScale * 85, pixelScale * 255];
  
  uncomingCarWidth = pixelScale * 168;
  uncomingCarHeight = pixelScale * 82;
  
  uncomingSemiYOptions = [pixelScale * 89, pixelScale * 259];
  uncomingSemiY2Options = [pixelScale * 89, pixelScale * 259];
  
  uncomingSemiWidth = pixelScale * 442;
  uncomingSemiHeight = pixelScale * 70;
  
  oldSlowTruckYOptions = [pixelScale * 2.75, pixelScale * 172.5];
  oldSlowTruckY2Options = [pixelScale * 2.75, pixelScale * 172.5];
  
  oldSlowTruckWidth = pixelScale * 194;
  oldSlowTruckHeight = pixelScale * 76;
  
  slowCarYOptions = [pixelScale * 2.75, pixelScale * 172.5];
  slowCarY2Options = [pixelScale * 2.75, pixelScale * 172.5];
  
  slowCarWidth = pixelScale * 190;
  slowCarHeight = pixelScale * 76;
  
  circleRadius = pixelScale * 30;

  frameRate(60); //Set frame rate to 60 frames per second

  background("grey");

  x2 = width;

  //Initialize all variables that include width
  uncomingCarX = width + pixelScale * 4;

  slowCarXMin = width + pixelScale * 250;

  slowCarXMax = width + pixelScale * 400;

  uncomingCarXOptions = [
    pixelScale * 4 + width,
    pixelScale * 100 + width,
    pixelScale * 200 + width,
    pixelScale * 300 + width,
    pixelScale * 400 + width,
    pixelScale * 500 + width,
    pixelScale * 600 + width,
    pixelScale * 700 + width,
    pixelScale * 800 + width,
    pixelScale * 900 + width,
    pixelScale * 1000 + width,
    pixelScale * 1100 + width,
    pixelScale * 1200 + width,
    pixelScale * 1300 + width,
    pixelScale * 1400 + width,
    pixelScale * 1500 + width,
  ];

  uncomingSemiXOptions = [
    pixelScale * 4 + width,
    pixelScale * 100 + width,
    pixelScale * 200 + width,
    pixelScale * 300 + width,
    pixelScale * 400 + width,
    pixelScale * 500 + width,
    pixelScale * 600 + width,
    pixelScale * 700 + width,
    pixelScale * 800 + width,
    pixelScale * 900 + width,
    pixelScale * 1000 + width,
    pixelScale * 1100 + width,
    pixelScale * 1200 + width,
    pixelScale * 1300 + width,
    pixelScale * 1400 + width,
    pixelScale * 1500 + width,
  ];

  oldSlowTruckXMin = width + pixelScale * 4;

  oldSlowTruckXMax = width + pixelScale * 100;

  uncomingSemiX = width + pixelScale * 4;

  //Randomly generates y-positions based on given options
  uncomingCarY = floor(random(uncomingCarYOptions));

  uncomingSemiY = floor(random(uncomingSemiYOptions));

  oldSlowTruckY = random(oldSlowTruckYOptions);

  slowCarY = random(slowCarYOptions);

  uncomingSemiX2 = floor(random(uncomingSemiXOptions));

  uncomingCarX2 = floor(random(uncomingCarXOptions));

  //Randomly generates starting positions, in turn, changing when vehicles appear
  uncomingCarAppear = floor(random(10, 50));

  uncomingSemiAppear = floor(random(10, 50));

  oldSlowTruckAppear = floor(random(10, 50));

  slowCarAppear = floor(random(10, 50));

  oldSlowTruckX = floor(random(oldSlowTruckXMin, oldSlowTruckXMax));

  slowCarX = floor(random(slowCarXMin, slowCarXMax));

  noStroke();
}

function draw() {
  fill("grey");

  timeElapsed++; //Start time elapsed timer

  textContents = "Time Elapsed: " + round(timeElapsed / 60) + " s";
  //Divide by 60 and round to turn time elapsed into seconds

  text2Contents =
    "You died. \n You survived " +
    round(timeElapsed / 60) +
    " seconds. \n Press the play button to start another round.";

  image(bgImg, x1, 0, width, pixelScale * 162);
  image(bgImg, x2, 0, width, pixelScale * 162);

  image(bgImg, x1, pixelScale * 170, width, pixelScale * 162);
  image(bgImg, x2, pixelScale * 170, width, pixelScale * 162);

  if (x1 < -width) {
    x1 = width;
  }
  if (x2 < -width) {
    x2 = width;
  }

  x1 -= scrollSpeed; //Make it so the two roads will scroll to the left
  x2 -= scrollSpeed;

  /*If and else if statements to control the y-positions
   *Eliminates instances where vehicles appear on top of each other
   */
  if (
    uncomingCarY === pixelScale * 85 &&
    uncomingSemiY === pixelScale * 89 &&
    uncomingCarX >= width &&
    uncomingSemiX <= width
  ) {
    uncomingCarY = pixelScale * 255;
  } else if (
    uncomingCarY === pixelScale * 255 &&
    uncomingSemiY === pixelScale * 259 &&
    uncomingCarX >= width &&
    uncomingSemiX <= width
  ) {
    uncomingCarY = pixelScale * 85;
  } else if (
    uncomingCarY === pixelScale * 255 &&
    uncomingSemiY === pixelScale * 259 &&
    uncomingCarX <= width &&
    uncomingSemiX >= width
  ) {
    uncomingSemiY = pixelScale * 89;
  } else if (
    uncomingCarY === pixelScale * 85 &&
    uncomingSemiY === pixelScale * 89 &&
    uncomingCarX <= width &&
    uncomingSemiX >= width
  ) {
    uncomingSemiY = pixelScale * 259;
  } else if (
    uncomingCarY === pixelScale * 85 &&
    uncomingSemiY === pixelScale * 89 &&
    uncomingSemiX >= width &&
    uncomingCarX >= width
  ) {
    uncomingCarY = pixelScale * 255;
  } else if (
    uncomingCarY === pixelScale * 255 &&
    uncomingSemiY === pixelScale * 259 &&
    uncomingSemiX >= width &&
    uncomingCarX >= width
  ) {
    uncomingCarY = pixelScale * 85;
  }

  if (
    slowCarY === pixelScale * 2.75 &&
    oldSlowTruckY === pixelScale * 2.75 &&
    slowCarX >= width &&
    oldSlowTruckX <= width
  ) {
    slowCarY = pixelScale * 172.5;
  } else if (
    slowCarY === pixelScale * 172.5 &&
    oldSlowTruckY === pixelScale * 172.5 &&
    slowCarX >= width &&
    oldSlowTruckX <= width
  ) {
    slowCarY = pixelScale * 2.75;
  } else if (
    slowCarY === pixelScale * 2.75 &&
    oldSlowTruckY === pixelScale * 2.75 &&
    slowCarX <= width &&
    oldSlowTruckX >= width
  ) {
    oldSlowTruckY = pixelScale * 172.5;
  } else if (
    slowCarY === pixelScale * 172.5 &&
    oldSlowTruckY === pixelScale * 172.5 &&
    slowCarX <= width &&
    oldSlowTruckX >= width
  ) {
    oldSlowTruckY = pixelScale * 2.75;
  } else if (
    slowCarY === pixelScale * 2.75 &&
    oldSlowTruckY === pixelScale * 2.75 &&
    slowCarX >= width &&
    oldSlowTruckX >= width
  ) {
    slowCarY = pixelScale * 172.5;
  } else if (
    slowCarY === pixelScale * 172.5 &&
    oldSlowTruckY === pixelScale * 172.5 &&
    slowCarX >= width &&
    oldSlowTruckX >= width
  ) {
    slowCarY = pixelScale * 2.75;
  }

  //Start time running clocks
  timeRunning = timeRunning + 1;

  timeRunning2 = timeRunning2 + 1;

  timeRunning3 = timeRunning3 + 1;

  timeRunning4 = timeRunning4 + 1;

  timeRunningTotal = timeRunningTotal + 1;

  image(carImg, carImgX, carImgY, carImgWidth, carImgHeight);

  if (carImgX >= 400) {
    carImgX = 0;
  }

  //Use if and else if statements so that vehicles appear at random times
  if (timeRunning === uncomingCarAppear) {
    timeRunning--;

    image(
      uncomingCarImg,
      uncomingCarX,
      uncomingCarY,
      uncomingCarWidth,
      uncomingCarHeight
    );

    uncomingCarX = uncomingCarX - 4;
  }

  if (timeRunning2 === uncomingSemiAppear) {
    timeRunning2--;

    image(
      uncomingSemiImg,
      uncomingSemiX,
      uncomingSemiY,
      uncomingSemiWidth,
      uncomingSemiHeight
    );

    uncomingSemiX = uncomingSemiX - 4;
  }

  if (timeRunning3 === oldSlowTruckAppear) {
    timeRunning3--;

    image(
      oldSlowTruckImg,
      oldSlowTruckX,
      oldSlowTruckY,
      oldSlowTruckWidth,
      oldSlowTruckHeight
    );

    oldSlowTruckX = oldSlowTruckX - 1;
  }

  if (timeRunning4 === slowCarAppear) {
    timeRunning4--;

    image(slowCarImg, slowCarX, slowCarY, slowCarWidth, slowCarHeight);

    slowCarX = slowCarX - 1;
  }

  /*If the controlled green luxury car hits another vehicle, game over, commence post death
   *sequence
   */
  if (
    uncomingCarY === pixelScale * 85 &&
    carImgY === pixelScale * 81 &&
    uncomingCarX <= pixelScale * 130 &&
    uncomingCarX >= pixelScale * -150
  ) {
    postDeathSequence();
  } else if (
    uncomingCarY === pixelScale * 255 &&
    carImgY === pixelScale * 255 &&
    uncomingCarX <= pixelScale * 130 &&
    uncomingCarX >= pixelScale * -150
  ) {
    postDeathSequence();
  }

  if (
    uncomingSemiY === pixelScale * 89 &&
    carImgY === pixelScale * 81 &&
    uncomingSemiX <= pixelScale * 134 &&
    uncomingSemiX >= pixelScale * -425
  ) {
    postDeathSequence();
  } else if (
    uncomingSemiY === pixelScale * 259 &&
    carImgY === pixelScale * 255 &&
    uncomingSemiX <= pixelScale * 134 &&
    uncomingSemiX >= pixelScale * -425
  ) {
    postDeathSequence();
  }

  if (
    oldSlowTruckY === pixelScale * 2.75 &&
    carImgY === pixelScale * -2 &&
    oldSlowTruckX <= pixelScale * 140 &&
    oldSlowTruckX >= pixelScale * -185
  ) {
    postDeathSequence();
  } else if (
    oldSlowTruckY === pixelScale * 172.5 &&
    carImgY === pixelScale * 172 &&
    oldSlowTruckX <= pixelScale * 140 &&
    oldSlowTruckX >= pixelScale * -185
  ) {
    postDeathSequence();
  }

  if (
    slowCarY === pixelScale * 2.75 &&
    carImgY === pixelScale * -2 &&
    slowCarX <= pixelScale * 140 &&
    slowCarX >= pixelScale * -181
  ) {
    postDeathSequence();
  } else if (
    slowCarY === pixelScale * 172.5 &&
    carImgY === pixelScale * 172 &&
    slowCarX <= pixelScale * 140 &&
    slowCarX >= pixelScale * -181
  ) {
    postDeathSequence();
  }

  /*For loop to make 40 vehicles of each type appear one after another
   *Y and x coordinates are random each time for each vehicle
   */
  for (let i = 0; i < 40; i++) {
    if (oldSlowTruckX <= pixelScale * -300) {
      oldSlowTruckY = random(oldSlowTruckY2Options);
      oldSlowTruckX = floor(random(oldSlowTruckXMin, oldSlowTruckXMax));
    }
  }

  for (let i = 0; i < 40; i++) {
    if (uncomingCarX <= pixelScale * -290) {
      uncomingCarY = floor(random(uncomingCarY2Options));
      uncomingCarX = uncomingCarX2;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (uncomingSemiX <= pixelScale * -550) {
      uncomingSemiY = floor(random(uncomingSemiY2Options));
      uncomingSemiX = uncomingSemiX2;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (slowCarX <= pixelScale * -296) {
      slowCarY = random(slowCarY2Options);
      slowCarX = floor(random(slowCarXMin, slowCarXMax));
    }
  }

  //Rectangle to make divider between highways
  fill("grey");
  rect(0, pixelScale * 162, width, pixelScale * 8);

  let t = frameCount / 60; //Update time

  //Create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); //Append snowflake object
  }

  //Loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); //Update snowflake position
    flake.display(); //Draw snowflake
  }

  timerText(); //Execute timerText function
}

//Use the keyPressed function to initiate the keys
function keyPressed() {
  if (keyCode === UP_ARROW && carImgY === pixelScale * 81) {
    carImgY = carImgY - pixelScale * 83;
  } else if (keyCode === UP_ARROW && carImgY === pixelScale * 172) {
    carImgY = carImgY - pixelScale * 91;
  } else if (keyCode === UP_ARROW && carImgY === pixelScale * 255) {
    carImgY = carImgY - pixelScale * 83;
  } else if (keyCode === DOWN_ARROW && carImgY === pixelScale * -2) {
    carImgY = carImgY + pixelScale * 83;
  } else if (keyCode === DOWN_ARROW && carImgY === pixelScale * 81) {
    carImgY = carImgY + pixelScale * 91;
  } else if (keyCode === DOWN_ARROW && carImgY === pixelScale * 172) {
    carImgY = carImgY + pixelScale * 83;
  }

  if (keyCode === RIGHT_ARROW && carImgY === pixelScale * 81) {
    carImgY = carImgY - pixelScale * 83;
  } else if (keyCode === RIGHT_ARROW && carImgY === pixelScale * 172) {
    carImgY = carImgY - pixelScale * 91;
  } else if (keyCode === RIGHT_ARROW && carImgY === pixelScale * 255) {
    carImgY = carImgY - pixelScale * 83;
  } else if (keyCode === LEFT_ARROW && carImgY === pixelScale * -2) {
    carImgY = carImgY + pixelScale * 83;
  } else if (keyCode === LEFT_ARROW && carImgY === pixelScale * 81) {
    carImgY = carImgY + pixelScale * 91;
  } else if (keyCode === LEFT_ARROW && carImgY === pixelScale * 172) {
    carImgY = carImgY + pixelScale * 83;
  }
  
  windowResized
}

//Snowflake class
function snowflake() {
  //Initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  //Radius of snowflake spiral
  //Chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    //X-position follows a circle
    let w = 0.6; //Angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    //Different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    //Delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
    fill("white");
  };

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}

//Function for the time elapsed text in the top right corner
function timerText() {
  var timerTextWidth = pixelScale * 130;

  var timerTextX = width - timerTextWidth;

  fill("white");
  textFont("Helvetica");
  textSize(12);
  textAlign(RIGHT, TOP);
  text(
    textContents,
    timerTextX,
    pixelScale * 8,
    timerTextWidth,
    pixelScale * 30
  );
}

/*Function for the explosion circle/ellipse
 *Variables for the ellipse include the name 'circle'
 *Same meaning and does not have an impact
 */
function explosion() {
  fill("grey");
  ellipse(circleX, circleY, circleRadius);

  for (let i = 0; i < 10; i++) {
    circleRadius++;
  }
}

//Function for the post death sequence
function postDeathSequence() {
  postDeathSequenceCounter++;

  x1 += scrollSpeed; //Cancel out the scroll speed, in turn, stopping the highway from moving
  x2 += scrollSpeed;
  uncomingCarX = uncomingCarX + 4; //Cancel out the vehicle movements, stopping them from moving
  uncomingSemiX = uncomingSemiX + 4;
  oldSlowTruckX = oldSlowTruckX + 1;
  slowCarX = slowCarX + 1;
  circleY = height / 2;
  circleX = width / 2;
  explosion();

  timeElapsed--; //Cancel out the time elapsed timer

  //Once the circle covers the screen, display post death text
  if (postDeathSequenceCounter >= 120) {
    postDeathText();
  }
}

//Function for post death text
function postDeathText() {
  text2X = width / (pixelScale * 300);
  text2Y = height / (pixelScale * 33);
  text2Width = width;
  text2Height = height / (pixelScale * 3);

  fill("white");
  textFont("Helvetica");
  textSize(24);
  textAlign(CENTER, TOP);
  text(text2Contents, text2X, text2Y, text2Width, text2Height);
}

function windowResized() {
  resizeCanvas(canvasWidth, canvasHeight);
}
