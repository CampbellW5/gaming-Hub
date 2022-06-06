//Intialize variables and constants
let bgImg;
var x1 = 0;
var x2;

let carImg;

var carImgX;
var carImgY;

var carImgWidth;
var carImgHeight;

var scrollSpeed;

let uncomingCarImg;

var uncomingCarY;

let uncomingCarYOptions;

let uncomingCarY2Options;

var uncomingCarY2;

var uncomingCarWidth;
var uncomingCarHeight;

var uncomingCarAppear;

let uncomingSemiImg;

var uncomingSemiY;

let uncomingSemiYOptions;

let uncomingSemiY2Options;

var uncomingSemiY2;

var uncomingSemiWidth;
var uncomingSemiHeight;

var uncomingSemiAppear;

let oldSlowTruckImg;

var oldSlowTruckY;

let oldSlowTruckYOptions;

let oldSlowTruckY2Options;

var oldSlowTruckY2;

var oldSlowTruckAppear;

var oldSlowTruckWidth;
var oldSlowTruckHeight;

var uncomingSemiX2;

var uncomingCarX2;

let slowCarImg;

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

var speedUpTimer = 0;

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

var carImgYPosition1;
var carImgYPosition2;
var carImgYPosition3;
var carImgYPosition4;

var uncomingCarYPosition1;
var uncomingCarYPosition2;

var uncomingSemiYPosition1;
var uncomingSemiYPosition2;

var oldSlowTruckYPosition1;
var oldSlowTruckYPosition2;

var slowCarYPosition1;
var slowCarYPosition1;

var snowflakeMinRadius;
var snowflakeMaxRadius;

var keyPressedIntializationNumber = 0;

var startGameButton;
var restartGameButton;
var pauseGameButton;

var startGameNumber = 0;

var winterGetawayCanvas;

var winterGetawayCanvas2;

var snowflakePhase = 1;

var text3X;
var text3Y;
var text3Width;
var text3Height;
  
var speedIncreaseTextSize;
  
var text3Contents;

var winterGetawayCanvas;
var canvasX;
var canvasY;

var pauseGameButtonFontSize;
var pauseGameButtonColor;
var pauseGameButtonX;
var pauseGameButtonY;

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
  canvasWidth = windowWidth * 0.98;
  canvasHeight = windowHeight * 0.3998

  winterGetawayCanvas = createCanvas(canvasWidth, canvasHeight); //Create canvas with window width, which adds transferability
  
  centerCanvas();

  pixelScale = windowHeight * 0.0012;

  scrollSpeed = pixelScale * 4;

  carImgYPosition1 = pixelScale * -2;
  carImgYPosition2 = pixelScale * 81;
  carImgYPosition3 = pixelScale * 172;
  carImgYPosition4 = pixelScale * 255;

  uncomingCarYPosition1 = pixelScale * 85;
  uncomingCarYPosition2 = pixelScale * 255;

  uncomingSemiYPosition1 = pixelScale * 89;
  uncomingSemiYPosition2 = pixelScale * 259;

  oldSlowTruckYPosition1 = pixelScale * 2.75;
  oldSlowTruckYPosition2 = pixelScale * 172.5;

  slowCarYPosition1 = pixelScale * 2.75;
  slowCarYPosition2 = pixelScale * 172.5;

  carImgX = 0;
  carImgY = pixelScale * -2;

  carImgWidth = pixelScale * 150;
  carImgHeight = pixelScale * 82;

  uncomingCarYOptions = [uncomingCarYPosition1, uncomingCarYPosition2];
  uncomingCarY2Options = [uncomingCarYPosition1, uncomingCarYPosition2];

  uncomingCarWidth = pixelScale * 168;
  uncomingCarHeight = pixelScale * 82;

  uncomingSemiYOptions = [uncomingSemiYPosition1, uncomingSemiYPosition2];
  uncomingSemiY2Options = [uncomingSemiYPosition1, uncomingSemiYPosition2];

  uncomingSemiWidth = pixelScale * 442;
  uncomingSemiHeight = pixelScale * 70;

  oldSlowTruckYOptions = [oldSlowTruckYPosition1, oldSlowTruckYPosition2];
  oldSlowTruckY2Options = [oldSlowTruckYPosition1, oldSlowTruckYPosition2];

  oldSlowTruckWidth = pixelScale * 194;
  oldSlowTruckHeight = pixelScale * 76;

  slowCarYOptions = [slowCarYPosition1, slowCarYPosition2];
  slowCarY2Options = [slowCarYPosition1, slowCarYPosition2];

  slowCarWidth = pixelScale * 190;
  slowCarHeight = pixelScale * 76;

  circleRadius = pixelScale * 30;

  snowflakeMinRadius = pixelScale * 2;
  snowflakeMaxRadius = pixelScale * 5;

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
  uncomingCarY = random(uncomingCarYOptions);

  uncomingSemiY = random(uncomingSemiYOptions);

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

  image(bgImg, x1, 0, width, pixelScale * 162);
  image(bgImg, x2, 0, width, pixelScale * 162);

  image(bgImg, x1, pixelScale * 170, width, pixelScale * 162);
  image(bgImg, x2, pixelScale * 170, width, pixelScale * 162);

  image(carImg, carImgX, carImgY, carImgWidth, carImgHeight);
  
  startGameButtonColor = "white";
  startGameButtonX = width * 0.178;
  startGameButtonY = canvasY + windowHeight * 0.3998;

  startGameButton = createButton("Start/Resume Game");
  startGameButton.mouseClicked(startGame);
  startGameButton.style("font-size", "1.5vw");
  startGameButton.style("color", "#3f93dfff");
  startGameButton.style("background-color", startGameButtonColor);
  startGameButton.position(startGameButtonX, startGameButtonY);

  
  pauseGameButtonColor = "white"
  pauseGameButtonX = width * 0.462;
  pauseGameButtonY = canvasY + windowHeight * 0.3998;
  
  pauseGameButton = createButton("Pause Game");
  pauseGameButton.mouseClicked(pauseGame);
  pauseGameButton.style("font-size", "1.5vw");
  pauseGameButton.style("color", "#3f93dfff");
  pauseGameButton.style("background-color", pauseGameButtonColor);
  pauseGameButton.position(pauseGameButtonX, pauseGameButtonY);

  
  restartGameButtonColor = "white";
  restartGameButtonX = width * 0.715;
  restartGameButtonY = canvasY + windowHeight * 0.3998;
    
  restartGameButton = createButton("Restart Game");
  restartGameButton.mouseClicked(restartGame);
  restartGameButton.style("font-size", "1.5vw");
  restartGameButton.style("background-color", restartGameButtonColor);
  restartGameButton.style("color", "#3f93dfff");
  restartGameButton.position(restartGameButtonX, restartGameButtonY);
  

  timerText();
  
  speedIncreaseText();
}

function draw() {
  
  if (startGameNumber === 1) {
    fill("grey");

    timeElapsed++; //Start time elapsed timer

    speedUpTimer++;
    
    speedIncreaseText();

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
      uncomingCarY === uncomingCarYPosition1 &&
      uncomingSemiY === uncomingSemiYPosition1 &&
      uncomingCarX >= width &&
      uncomingSemiX <= width
    ) {
      uncomingCarY = uncomingCarYPosition2;
    } else if (
      uncomingCarY === uncomingCarYPosition2 &&
      uncomingSemiY === uncomingSemiYPosition2 &&
      uncomingCarX >= width &&
      uncomingSemiX <= width
    ) {
      uncomingCarY = uncomingCarYPosition1;
    } else if (
      uncomingCarY === uncomingCarYPosition2 &&
      uncomingSemiY === uncomingSemiYPosition2 &&
      uncomingCarX <= width &&
      uncomingSemiX >= width
    ) {
      uncomingSemiY = uncomingSemiYPosition1;
    } else if (
      uncomingCarY === uncomingCarYPosition1 &&
      uncomingSemiY === uncomingSemiYPosition1 &&
      uncomingCarX <= width &&
      uncomingSemiX >= width
    ) {
      uncomingSemiY = uncomingSemiYPosition2;
    } else if (
      uncomingCarY === uncomingCarYPosition1 &&
      uncomingSemiY === uncomingSemiYPosition1 &&
      uncomingSemiX >= width &&
      uncomingCarX >= width
    ) {
      uncomingCarY = uncomingCarYPosition2;
    } else if (
      uncomingCarY === uncomingCarYPosition2 &&
      uncomingSemiY === uncomingSemiYPosition2 &&
      uncomingSemiX >= width &&
      uncomingCarX >= width
    ) {
      uncomingCarY = uncomingCarYPosition1;
    }

    if (
      slowCarY === slowCarYPosition1 &&
      oldSlowTruckY === oldSlowTruckYPosition1 &&
      slowCarX >= width &&
      oldSlowTruckX <= width
    ) {
      slowCarY = slowCarYPosition2;
    } else if (
      slowCarY === slowCarYPosition2 &&
      oldSlowTruckY === oldSlowTruckYPosition2 &&
      slowCarX >= width &&
      oldSlowTruckX <= width
    ) {
      slowCarY = slowCarYPosition1;
    } else if (
      slowCarY === slowCarYPosition1 &&
      oldSlowTruckY === slowCarYPosition1 &&
      slowCarX <= width &&
      oldSlowTruckX >= width
    ) {
      oldSlowTruckY = oldSlowTruckYPosition2;
    } else if (
      slowCarY === slowCarYPosition2 &&
      oldSlowTruckY === oldSlowTruckYPosition2 &&
      slowCarX <= width &&
      oldSlowTruckX >= width
    ) {
      oldSlowTruckY = oldSlowTruckYPosition1;
    } else if (
      slowCarY === slowCarYPosition1 &&
      oldSlowTruckY === oldSlowTruckYPosition1 &&
      slowCarX >= width &&
      oldSlowTruckX >= width
    ) {
      slowCarY = slowCarYPosition2;
    } else if (
      slowCarY === slowCarYPosition2 &&
      oldSlowTruckY === oldSlowTruckYPosition2 &&
      slowCarX >= width &&
      oldSlowTruckX >= width
    ) {
      slowCarY = slowCarYPosition1;
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
      timeRunning = timeRunning - 1;

      image(
        uncomingCarImg,
        uncomingCarX,
        uncomingCarY,
        uncomingCarWidth,
        uncomingCarHeight
      );

      uncomingCarX = uncomingCarX - pixelScale * 4;
    }

    if (timeRunning2 === uncomingSemiAppear) {
      timeRunning2 = timeRunning2 - 1;

      image(
        uncomingSemiImg,
        uncomingSemiX,
        uncomingSemiY,
        uncomingSemiWidth,
        uncomingSemiHeight
      );

      uncomingSemiX = uncomingSemiX - pixelScale * 4;
    }

    if (timeRunning3 === oldSlowTruckAppear) {
      timeRunning3 = timeRunning3 - 1;

      image(
        oldSlowTruckImg,
        oldSlowTruckX,
        oldSlowTruckY,
        oldSlowTruckWidth,
        oldSlowTruckHeight
      );

      oldSlowTruckX = oldSlowTruckX - pixelScale * 1;
    }

    if (timeRunning4 === slowCarAppear) {
      timeRunning4 = timeRunning4 - 1;

      image(slowCarImg, slowCarX, slowCarY, slowCarWidth, slowCarHeight);

      slowCarX = slowCarX - pixelScale * 1;
    }

    /*while (speedUpTimer / 60 >= 100 && speedUpTimer / 60 <= 199) {
      scrollSpeed = pixelScale * 4 * 1.05;

      uncomingCarX = uncomingCarX - pixelScale * 4 * 1.05;

      uncomingSemiX = uncomingSemiX - pixelScale * 4 * 1.05;

      slowCarX = slowCarX - pixelScale * 1 * 1.05;

      oldSlowTruckX = oldSlowTruckX - pixelScale * 1 * 1.05;
    }

    while (speedUpTimer / 60 >= 200 && speedUpTimer / 60 <= 299) {
      scrollSpeed = pixelScale * 4 * 1.1;

      uncomingCarX = uncomingCarX - pixelScale * 4 * 1.1;

      uncomingSemiX = uncomingSemiX - pixelScale * 4 * 1.1;

      slowCarX = slowCarX - pixelScale * 1 * 1.1;

      oldSlowTruckX = oldSlowTruckX - pixelScale * 1 * 1.1;
    }

    while (speedUpTimer / 60 >= 300 && speedUpTimer / 60 <= 399) {
      scrollSpeed = pixelScale * 4 * 1.15;

      uncomingCarX = uncomingCarX - pixelScale * 4 * 1.15;

      uncomingSemiX = uncomingSemiX - pixelScale * 4 * 1.15;

      slowCarX = slowCarX - pixelScale * 1 * 1.15;

      oldSlowTruckX = oldSlowTruckX - pixelScale * 1 * 1.15;
    }

    while (speedUpTimer / 60 >= 400 && speedUpTimer / 60 <= 499) {
      scrollSpeed = pixelScale * 4 * 1.2;

      uncomingCarX = uncomingCarX - pixelScale * 4 * 1.2;

      uncomingSemiX = uncomingSemiX - pixelScale * 4 * 1.2;

      slowCarX = slowCarX - pixelScale * 1 * 1.2;

      oldSlowTruckX = oldSlowTruckX - pixelScale * 1 * 1.2;
    }

    while (speedUpTimer / 60 >= 500 && speedUpTimer / 60 <= 599) {
      scrollSpeed = pixelScale * 4 * 1.25;

      uncomingCarX = uncomingCarX - pixelScale * 4 * 1.25;

      uncomingSemiX = uncomingSemiX - pixelScale * 4 * 1.25;

      slowCarX = slowCarX - pixelScale * 1 * 1.25;

      oldSlowTruckX = oldSlowTruckX - pixelScale * 1 * 1.25;
    }
    */

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
        uncomingCarY = random(uncomingCarY2Options);
        uncomingCarX = uncomingCarX2;
      }
    }

    for (let i = 0; i < 10; i++) {
      if (uncomingSemiX <= pixelScale * -550) {
        uncomingSemiY = random(uncomingSemiY2Options);
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

    if (startGameNumber === 1) {
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
    }

    timerText();
  }
}

//Use the keyPressed function to initiate the keys
function keyPressed() {
  if (keyPressedIntializationNumber === 0) {
    if (keyCode === UP_ARROW && carImgY === carImgYPosition2) {
      carImgY = carImgYPosition1;
    } else if (keyCode === UP_ARROW && carImgY === carImgYPosition3) {
      carImgY = carImgYPosition2;
    } else if (keyCode === UP_ARROW && carImgY === carImgYPosition4) {
      carImgY = carImgYPosition3;
    } else if (keyCode === DOWN_ARROW && carImgY === carImgYPosition1) {
      carImgY = carImgYPosition2;
    } else if (keyCode === DOWN_ARROW && carImgY === carImgYPosition2) {
      carImgY = carImgYPosition3;
    } else if (keyCode === DOWN_ARROW && carImgY === carImgYPosition3) {
      carImgY = carImgYPosition4;
    }

    if (keyCode === RIGHT_ARROW && carImgY === carImgYPosition2) {
      carImgY = carImgYPosition1;
    } else if (keyCode === RIGHT_ARROW && carImgY === carImgYPosition3) {
      carImgY = carImgYPosition2;
    } else if (keyCode === RIGHT_ARROW && carImgY === carImgYPosition4) {
      carImgY = carImgYPosition3;
    } else if (keyCode === LEFT_ARROW && carImgY === carImgYPosition1) {
      carImgY = carImgYPosition2;
    } else if (keyCode === LEFT_ARROW && carImgY === carImgYPosition2) {
      carImgY = carImgYPosition3;
    } else if (keyCode === LEFT_ARROW && carImgY === carImgYPosition3) {
      carImgY = carImgYPosition4;
    }
  }
}

//Snowflake class
function snowflake() {
    //Initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(snowflakeMinRadius, snowflakeMaxRadius);

    //Radius of snowflake spiral
    //Chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function (time) {
      //X-position follows a circle
      let w = 0.6; //Angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);

      //Different size snowflakes fall at slightly different y speeds
      this.posY += pow(this.size, pixelScale * 0.5);

      //Delete snowflake if past end of screen
      if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };
  fill("white");

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}

function pauseGame() {
  startGameNumber = 2;

  keyPressedIntializationNumber = 0;
}

function startGame() {
  keyPressedIntializationNumber = 0;

  startGameNumber = 1;
  
  speedIncreaseText();
}

function restartGame() {
  keyPressedIntializationNumber = 0;

  snowflakePhase = 2;

  //Rectangle to make snowflakes disappear
  fill("grey");
  rect(0, pixelScale * 162, width, pixelScale * 8);

  uncomingCarX = random(uncomingCarXOptions);
  uncomingSemiX = random(uncomingSemiXOptions);
  oldSlowTruckX = floor(random(oldSlowTruckXMin, oldSlowTruckXMax));
  slowCarX = floor(random(slowCarXMin, slowCarXMax));

  timeRunning = 0;
  timeRunning2 = 0;
  timeRunning3 = 0;
  timeRunning4 = 0;
  timeRunningTotal = 0;

  timeElapsed = 0;
  speedUpTimer = 0;

  image(bgImg, x1, 0, width, pixelScale * 162);
  image(bgImg, x2, 0, width, pixelScale * 162);

  image(bgImg, x1, pixelScale * 170, width, pixelScale * 162);
  image(bgImg, x2, pixelScale * 170, width, pixelScale * 162);

  carImgY = carImgYPosition1;

  image(carImg, carImgX, carImgY, carImgWidth, carImgHeight);

  startGameNumber = 2;

  timerText();
}

//Function for the time elapsed text in the top right corner
function timerText() {
  textContents = "Time Elapsed: " + round(timeElapsed / 60) + " s";

  var timerTextWidth = pixelScale * 160;

  var timerTextX = width - timerTextWidth;

  var fontSize = pixelScale * 15;

  fill("white");
  textFont("Helvetica");
  textSize(fontSize);
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
  keyPressedIntializationNumber = 1;

  postDeathSequenceCounter++;

  x1 += scrollSpeed; //Cancel out the scroll speed, in turn, stopping the highway from moving
  x2 += scrollSpeed;
  uncomingCarX = uncomingCarX + pixelScale * 4; //Cancel out the vehicle movements, stopping them from moving
  uncomingSemiX = uncomingSemiX + pixelScale * 4;
  oldSlowTruckX = oldSlowTruckX + pixelScale * 1;
  slowCarX = slowCarX + pixelScale * 1;
  circleY = height / 2;
  circleX = width / 2;
  explosion();

  timeElapsed--; //Cancel out the time elapsed timer

  //Once the circle covers the screen, display post death text
  if (circleRadius >= width * 1.5) {
    postDeathText();
  }
}

//Function for post death text
function postDeathText() {
  text2X = width / (pixelScale * 300);
  text2Y = height / (pixelScale * 33);
  text2Width = width;
  text2Height = height;

  var postDeathTextSize = pixelScale * 24;

  fill("white");
  textFont("Helvetica");
  textSize(postDeathTextSize);
  textAlign(CENTER, TOP);
  text(text2Contents, text2X, text2Y, text2Width, text2Height);
}

function speedIncreaseText() {
  text3X = width / 2;
  text3Y = height / 2;
  text3Width = width / 2;
  text3Height = height/ 2;
  
  speedIncreaseTextSize = pixelScale * 7;
  
  text3Contents = "Speed Increase >>>";
  
  fill("white");
  textFont("Helvetica");
  textSize(speedIncreaseTextSize);
  textAlign(LEFT, TOP);
  text(text3Contents, text3X, text3Y, text3Width, text3Height);
}

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 1.5;
  winterGetawayCanvas.position(canvasX, canvasY);
}

function windowResized() {
  pauseGame();
}
