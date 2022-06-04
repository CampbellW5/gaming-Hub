//Intialize variables and constants
var bgImg;
var x1 = 0;
var x2;

var carImgX = 0;
var carImgY = -2;

var carImgWidth = 150;
var carImgHeight = 82;

var scrollSpeed = 4;

var uncomingCarImg;

var uncomingCarY;

let uncomingCarYOptions = [85, 255];

let uncomingCarY2Options = [85, 255];

var uncomingCarY2;

var uncomingCarWidth = 168;
var uncomingCarHeight = 82;

var uncomingCarAppear;

var uncomingSemiImg;

var uncomingSemiY;

let uncomingSemiYOptions = [89, 259];

let uncomingSemiY2Options = [89, 259];

var uncomingSemiY2;

var uncomingSemiWidth = 442;
var uncomingSemiHeight = 70;

var uncomingSemiAppear;

var oldSlowTruckImg;

var oldSlowTruckY;

let oldSlowTruckYOptions = [2.75, 172.5];

let oldSlowTruckY2Options = [2.75, 172.5];

var oldSlowTruckY2;

var oldSlowTruckAppear;

var oldSlowTruckWidth = 194;
var oldSlowTruckHeight = 76;

var uncomingSemiX2;

var uncomingCarX2;

var slowCarImg;

var slowCarY;

let slowCarYOptions = [2.75, 172.5];

let slowCarY2Options = [2.75, 172.5];

var slowCarY2;

var slowCarAppear;

var slowCarWidth = 190;
var slowCarHeight = 76;

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

var circleRadius = 30;

var circleX;

var circleY;

var text2Contents;

var postDeathSequenceCounter = 0;

var text2X;

var text2Y;

var text2Width;

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
  createCanvas(windowWidth, 332); //Create canvas with window width, which adds transferability

  frameRate(60); //Set frame rate to 60 frames per second

  background("grey");

  x2 = width;

  //Initialize all variables that include width
  uncomingCarX = width + 4;

  slowCarXMin = width + 250;

  slowCarXMax = width + 400;

  uncomingCarXOptions = [
    4 + width,
    100 + width,
    200 + width,
    300 + width,
    400 + width,
    500 + width,
    600 + width,
    700 + width,
    800 + width,
    900 + width,
    1000 + width,
    1100 + width,
    1200 + width,
    1300 + width,
    1400 + width,
    1500 + width,
  ];

  uncomingSemiXOptions = [
    4 + width,
    100 + width,
    200 + width,
    300 + width,
    400 + width,
    500 + width,
    600 + width,
    700 + width,
    800 + width,
    900 + width,
    1000 + width,
    1100 + width,
    1200 + width,
    1300 + width,
    1400 + width,
    1500 + width,
  ];

  oldSlowTruckXMin = width + 4;

  oldSlowTruckXMax = width + 100;

  uncomingSemiX = width + 4;

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

  image(bgImg, x1, 0, width, 162);
  image(bgImg, x2, 0, width, 162);

  image(bgImg, x1, 170, width, 162);
  image(bgImg, x2, 170, width, 162);

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
    uncomingCarY === 85 &&
    uncomingSemiY === 89 &&
    uncomingCarX >= width &&
    uncomingSemiX <= width
  ) {
    uncomingCarY = 255;
  } else if (
    uncomingCarY === 255 &&
    uncomingSemiY === 259 &&
    uncomingCarX >= width &&
    uncomingSemiX <= width
  ) {
    uncomingCarY = 85;
  } else if (
    uncomingCarY === 255 &&
    uncomingSemiY === 259 &&
    uncomingCarX <= width &&
    uncomingSemiX >= width
  ) {
    uncomingSemiY = 89;
  } else if (
    uncomingCarY === 85 &&
    uncomingSemiY === 89 &&
    uncomingCarX <= width &&
    uncomingSemiX >= width
  ) {
    uncomingSemiY = 259;
  } else if (
    uncomingCarY === 85 &&
    uncomingSemiY === 89 &&
    uncomingSemiX >= width &&
    uncomingCarX >= width
  ) {
    uncomingCarY = 255;
  } else if (
    uncomingCarY === 255 &&
    uncomingSemiY === 259 &&
    uncomingSemiX >= width &&
    uncomingCarX >= width
  ) {
    uncomingCarY = 85;
  }

  if (
    slowCarY === 2.75 &&
    oldSlowTruckY === 2.75 &&
    slowCarX >= width &&
    oldSlowTruckX <= width
  ) {
    slowCarY = 172.5;
  } else if (
    slowCarY === 172.5 &&
    oldSlowTruckY === 172.5 &&
    slowCarX >= width &&
    oldSlowTruckX <= width
  ) {
    slowCarY = 2.75;
  } else if (
    slowCarY === 172.5 &&
    oldSlowTruckY === 172.5 &&
    slowCarX <= width &&
    oldSlowTruckX >= width
  ) {
    oldSlowTruckY = 2.75;
  } else if (
    slowCarY === 172.5 &&
    oldSlowTruckY === 172.5 &&
    slowCarX <= width &&
    oldSlowTruckX >= width
  ) {
    oldSlowTruckY = 2.75;
  } else if (
    slowCarY === 2.75 &&
    oldSlowTruckY === 2.75 &&
    slowCarX >= width &&
    oldSlowTruckX >= width
  ) {
    slowCarY = 172.5;
  } else if (
    slowCarY === 172.5 &&
    oldSlowTruckY === 172.5 &&
    slowCarX >= width &&
    oldSlowTruckX >= width
  ) {
    slowCarY = 2.75;
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
    uncomingCarY === 85 &&
    carImgY === 81 &&
    uncomingCarX <= 130 &&
    uncomingCarX >= -150
  ) {
    postDeathSequence();
  } else if (
    uncomingCarY === 255 &&
    carImgY === 255 &&
    uncomingCarX <= 130 &&
    uncomingCarX >= -150
  ) {
    postDeathSequence();
  }

  if (
    uncomingSemiY === 89 &&
    carImgY === 81 &&
    uncomingSemiX <= 134 &&
    uncomingSemiX >= -425
  ) {
    postDeathSequence();
  } else if (
    uncomingSemiY === 259 &&
    carImgY === 255 &&
    uncomingSemiX <= 134 &&
    uncomingSemiX >= -425
  ) {
    postDeathSequence();
  }

  if (
    oldSlowTruckY === 2.75 &&
    carImgY === -2 &&
    oldSlowTruckX <= 140 &&
    oldSlowTruckX >= -185
  ) {
    postDeathSequence();
  } else if (
    oldSlowTruckY === 172.5 &&
    carImgY === 172 &&
    oldSlowTruckX <= 140 &&
    oldSlowTruckX >= -185
  ) {
    postDeathSequence();
  }

  if (
    slowCarY === 2.75 &&
    carImgY === -2 &&
    slowCarX <= 140 &&
    slowCarX >= -181
  ) {
    postDeathSequence();
  } else if (
    slowCarY === 172.5 &&
    carImgY === 172 &&
    slowCarX <= 140 &&
    slowCarX >= -181
  ) {
    postDeathSequence();
  }

  /*For loop to make 40 vehicles of each type appear one after another
   *Y and x coordinates are random each time for each vehicle
   */
  for (let i = 0; i < 40; i++) {
    if (oldSlowTruckX <= -300) {
      oldSlowTruckY = random(oldSlowTruckY2Options);
      oldSlowTruckX = floor(random(oldSlowTruckXMin, oldSlowTruckXMax));
    }
  }

  for (let i = 0; i < 40; i++) {
    if (uncomingCarX <= -290) {
      uncomingCarY = floor(random(uncomingCarY2Options));
      uncomingCarX = uncomingCarX2;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (uncomingSemiX <= -550) {
      uncomingSemiY = floor(random(uncomingSemiY2Options));
      uncomingSemiX = uncomingSemiX2;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (slowCarX <= -296) {
      slowCarY = random(slowCarY2Options);
      slowCarX = floor(random(slowCarXMin, slowCarXMax));
    }
  }

  //Rectangle to make divider between highways
  fill("grey");
  rect(0, 162, width, 8);

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
  if (keyCode === UP_ARROW && carImgY === 81) {
    carImgY = carImgY - 83;
  } else if (keyCode === UP_ARROW && carImgY === 172) {
    carImgY = carImgY - 91;
  } else if (keyCode === UP_ARROW && carImgY === 255) {
    carImgY = carImgY - 83;
  } else if (keyCode === DOWN_ARROW && carImgY === -2) {
    carImgY = carImgY + 83;
  } else if (keyCode === DOWN_ARROW && carImgY === 81) {
    carImgY = carImgY + 91;
  } else if (keyCode === DOWN_ARROW && carImgY === 172) {
    carImgY = carImgY + 83;
  }

  if (keyCode === RIGHT_ARROW && carImgY === 81) {
    carImgY = carImgY - 83;
  } else if (keyCode === RIGHT_ARROW && carImgY === 172) {
    carImgY = carImgY - 91;
  } else if (keyCode === RIGHT_ARROW && carImgY === 255) {
    carImgY = carImgY - 83;
  } else if (keyCode === LEFT_ARROW && carImgY === -2) {
    carImgY = carImgY + 83;
  } else if (keyCode === LEFT_ARROW && carImgY === 81) {
    carImgY = carImgY + 91;
  } else if (keyCode === LEFT_ARROW && carImgY === 172) {
    carImgY = carImgY + 83;
  }
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
  var timerTextWidth = 130;

  var timerTextX = width - timerTextWidth;

  fill("white");
  textFont("Helvetica");
  textSize(12);
  textAlign(RIGHT, TOP);
  text(textContents, timerTextX, 8, timerTextWidth, 30);
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
  text2X = width / 300;
  text2Y = height / 33;
  text2Width = width;
  text2Height = height / 3;

  fill("white");
  textFont("Helvetica");
  textSize(24);
  textAlign(CENTER, TOP);
  text(text2Contents, text2X, text2Y, text2Width, text2Height);
}
