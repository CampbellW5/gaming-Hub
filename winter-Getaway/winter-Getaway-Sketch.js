//Intialize variables
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

//Start all timeRunning clocks at 0
var timeRunning = 0;

var timeRunning2 = 0;

var timeRunning3 = 0;

var timeRunning4 = 0;

var timeRunningTotal = 0;

var snowflakes = []; //Array to hold snowflake objects

var rectColour;

var uncomingCarX;

var slowCarXMin;

var slowCarXMax;

var uncomingCarXOptions;

var uncomingSemiXOptions;

var oldSlowTruckXMin;

var oldSlowTryckXMax;

var uncomingSemiX;

//Start timers at 0
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

var windowResizedCounter = 0;

var movementScale;

var easyModeButtonTextColor;
var mediumModeButtonTextColor;
var hardModeButtonTextColor;

var speedModeNumber;

var victoryRoadImg;

var victoryRoadX;
var victoryRoadY;
var victoryRoadWidth;
var victoryRoadHeight;

let confettiColor = [],
  confetti = [];

var snowflakeTimer = 0;

var escapeMusic;
var postDeathSound;
var victoryMusic;

var postDeathSoundPlayAmount = 0;

var victoryMusicPlayAmount = 0;

var escapeMusicPlayAmount = 0;

//Preload images and sounds so they are ready when the game begins
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

  victoryRoadImg = loadImage(
    "winter-Getaway/winter-Getaway-Images/victory-Road.jpg"
  );

  escapeMusic = loadSound(
    "winter-Getaway/winter-Getaway-Sounds/escape-Music.mp3"
  );

  postDeathSound = loadSound(
    "winter-Getaway/winter-Getaway-Sounds/post-Death-Sound.mp3"
  );

  victoryMusic = loadSound(
    "winter-Getaway/winter-Getaway-Sounds/victory-Music.mp3"
  );
}

function setup() {
  /*Set canvas width and height based on the window dimensions
   *This ensures scalability
   */
  canvasWidth = windowWidth * 0.98;
  canvasHeight = windowHeight * 0.3998;

  winterGetawayCanvas = createCanvas(canvasWidth, canvasHeight);

  centerCanvas();

  //Set a pixel scale so that every element is scaled the same
  pixelScale = windowHeight * 0.0012;

  //Set a movement scale so that the speed of the game easily be adjusted
  movementScale = windowHeight * 0.0012;

  //The speed at which the road scrolls to the left
  scrollSpeed = pixelScale * 4;

  //Credit to slow_izzm on the p5.js web editor for this code
  confettiColor = [color("#00aeef"), color("#ec008c"), color("#72c8b6")];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(
      random(0, width),
      random(-height, 0),
      random(-1, 1)
    );
  }

  //The four Y positions the green luxury car may exist
  carImgYPosition1 = pixelScale * -2;
  carImgYPosition2 = pixelScale * 81;
  carImgYPosition3 = pixelScale * 172;
  carImgYPosition4 = pixelScale * 255;

  //The two Y positions the red car may exist
  uncomingCarYPosition1 = pixelScale * 85;
  uncomingCarYPosition2 = pixelScale * 255;

  //The two Y positions the blue semi may exist
  uncomingSemiYPosition1 = pixelScale * 89;
  uncomingSemiYPosition2 = pixelScale * 259;

  //The two Y positions the slow truck may exist
  oldSlowTruckYPosition1 = pixelScale * 2.75;
  oldSlowTruckYPosition2 = pixelScale * 172.5;

  //The two Y positions the slow car may exist
  slowCarYPosition1 = pixelScale * 2.75;
  slowCarYPosition2 = pixelScale * 172.5;

  //Set the starting of position of the green luxury car
  carImgX = 0;
  carImgY = pixelScale * -2;

  //Set the width and height of the green luxury car
  carImgWidth = pixelScale * 150;
  carImgHeight = pixelScale * 82;

  //Generate a random Y position from the two options for the red car
  uncomingCarYOptions = [uncomingCarYPosition1, uncomingCarYPosition2];

  //Generate the next random Y position from the two options for the red car
  uncomingCarY2Options = [uncomingCarYPosition1, uncomingCarYPosition2];

  /*Set the width and height of the red card
   *Notice pixelScale is used so that the car will be the proper size, no matter the window dimensions
   */
  uncomingCarWidth = pixelScale * 168;
  uncomingCarHeight = pixelScale * 82;

  //Generate a random Y position from the two options for the blue semi
  uncomingSemiYOptions = [uncomingSemiYPosition1, uncomingSemiYPosition2];
  //Generate the next random Y position for the two options for the blue semi
  uncomingSemiY2Options = [uncomingSemiYPosition1, uncomingSemiYPosition2];

  //Set the width and height of the blue semi
  uncomingSemiWidth = pixelScale * 442;
  uncomingSemiHeight = pixelScale * 70;

  //Generate a random Y position from the two options for the slow truck
  oldSlowTruckYOptions = [oldSlowTruckYPosition1, oldSlowTruckYPosition2];
  //Generate the next random Y position for the two options for the slow truck
  oldSlowTruckY2Options = [oldSlowTruckYPosition1, oldSlowTruckYPosition2];

  //Set the width and height of the slow truck
  oldSlowTruckWidth = pixelScale * 194;
  oldSlowTruckHeight = pixelScale * 76;

  //Generate a random Y position from the two options for the slow car
  slowCarYOptions = [slowCarYPosition1, slowCarYPosition2];
  //Generate the next random Y position for the two options for the slow car
  slowCarY2Options = [slowCarYPosition1, slowCarYPosition2];

  //Set the width and height of the slow car
  slowCarWidth = pixelScale * 190;
  slowCarHeight = pixelScale * 76;

  circleRadius = pixelScale * 30;

  //Set the maximum and minimum radius of a snowflake
  snowflakeMinRadius = pixelScale * 2;
  snowflakeMaxRadius = pixelScale * 5;

  //Set the position and dimensions of the victory road;
  victoryRoadX = width;
  victoryRoadY = 0;
  victoryRoadWidth = width;
  victoryRoadHeight = height;

  frameRate(60); //Set frame rate to 60 frames per second

  background("grey");

  x2 = width;

  //Define all variables that include width
  uncomingCarX = width + pixelScale * 4;

  slowCarXMin = width + pixelScale * 250;

  slowCarXMax = width + pixelScale * 400;

  //State the X options for the red car
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

  //State the X options for the blue semi
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

  /*State the maximum and minimum starting X position of the slow truck    *for when the vehicle is moved to the right of the canvas
   */
  oldSlowTruckXMin = width + pixelScale * 4;

  oldSlowTruckXMax = width + pixelScale * 100;

  //Set the starting X position of the blue semi
  uncomingSemiX = width + pixelScale * 4;

  //Randomly generates Y positions based on given options
  uncomingCarY = random(uncomingCarYOptions);

  uncomingSemiY = random(uncomingSemiYOptions);

  oldSlowTruckY = random(oldSlowTruckYOptions);

  slowCarY = random(slowCarYOptions);

  uncomingSemiX2 = floor(random(uncomingSemiXOptions));

  uncomingCarX2 = floor(random(uncomingCarXOptions));

  //Randomly set a time that must be reached before the red car appears to the right of the canvas
  uncomingCarAppear = floor(random(10, 50));

  //Randomly set a time that must be reached before the blue semi appears to the right of the canvas
  uncomingSemiAppear = floor(random(10, 50));

  //Randomly set a time that must be reached before the slow truck appears to the right of the canvas
  oldSlowTruckAppear = floor(random(10, 50));

  //Randomly set a time that must be reached before the slow car appears to the right of the canvas
  slowCarAppear = floor(random(10, 50));

  //Randomly set a starting X position of the slow truck that is between the maximum and minimum values
  oldSlowTruckX = floor(random(oldSlowTruckXMin, oldSlowTruckXMax));

  //Randomly set a starting X position of the slow car that is between the maximum and minimum values
  slowCarX = floor(random(slowCarXMin, slowCarXMax));

  //Removes the border around shapes
  noStroke();

  //Add the top road
  image(bgImg, x1, 0, width, pixelScale * 162);
  image(bgImg, x2, 0, width, pixelScale * 162);

  //Add the bottom road
  image(bgImg, x1, pixelScale * 170, width, pixelScale * 162);
  image(bgImg, x2, pixelScale * 170, width, pixelScale * 162);

  //Add the green luxury car
  image(carImg, carImgX, carImgY, carImgWidth, carImgHeight);

  //Specify the colour, X position, and Y position of the start game button
  startGameButtonColor = "#3f93dfff";
  startGameButtonX = windowWidth * 0.205;
  startGameButtonY = (windowHeight - height) / 1.5 + windowHeight * 0.4075;

  //Add and style the start/resume game button
  startGameButton = createButton("Start/Resume Game");
  startGameButton.mouseClicked(startGame);
  startGameButton.style("font-size", "1.5vh");
  startGameButton.style("color", "white");
  startGameButton.style("background-color", startGameButtonColor);
  startGameButton.position(startGameButtonX, startGameButtonY);

  //Specify the colour, X position, and Y position of the start game button
  pauseGameButtonColor = "#3f93dfff";
  pauseGameButtonX = windowWidth * 0.475;
  pauseGameButtonY = (windowHeight - height) / 1.5 + windowHeight * 0.4075;

  //Add and style the pause game button
  pauseGameButton = createButton("Pause Game");
  pauseGameButton.mouseClicked(pauseGame);
  pauseGameButton.style("font-size", "1.5vh");
  pauseGameButton.style("color", "white");
  pauseGameButton.style("background-color", pauseGameButtonColor);
  pauseGameButton.position(pauseGameButtonX, pauseGameButtonY);

  //Specify the colour, X position, and Y position of the restart game button
  restartGameButtonColor = "#3f93dfff";
  restartGameButtonX = windowWidth * 0.7275;
  restartGameButtonY = (windowHeight - height) / 1.5 + windowHeight * 0.4075;

  //Add and style the restart game button
  restartGameButton = createButton("Restart Game");
  restartGameButton.mouseClicked(restartGame);
  restartGameButton.style("font-size", "1.5vh");
  restartGameButton.style("background-color", restartGameButtonColor);
  restartGameButton.style("color", "white");
  restartGameButton.position(restartGameButtonX, restartGameButtonY);

  //Define the variables for the colour, X position, and Y position of the easy mode button
  easyModeButtonColor = "#3f93dfff";
  easyModeButtonX = windowWidth * 0.236;
  easyModeButtonY = windowHeight * 0.366;

  //Add and style the easy mode button
  easyModeButton = createButton("Easy");
  easyModeButton.mouseClicked(easyMode);
  easyModeButton.style("font-size", "1.5vh");
  easyModeButton.style("color", "black");
  easyModeButton.style("background-color", easyModeButtonColor);
  easyModeButton.position(easyModeButtonX, easyModeButtonY);

  //Define the variables for the colour, X position, and Y position of the medium mode button
  mediumModeButtonColor = "#3f93dfff";
  mediumModeButtonX = windowWidth * 0.4825;
  mediumModeButtonY = windowHeight * 0.366;

  //Add and style the medium mode button
  mediumModeButton = createButton("Medium");
  mediumModeButton.mouseClicked(mediumMode);
  mediumModeButton.style("font-size", "1.5vh");
  mediumModeButton.style("color", "white");
  mediumModeButton.style("background-color", mediumModeButtonColor);
  mediumModeButton.position(mediumModeButtonX, mediumModeButtonY);

  //Define the variables for the colour, X position, and Y position of the hard mode button
  hardModeButtonColor = "#3f93dfff";
  hardModeButtonX = windowWidth * 0.7425;
  hardModeButtonY = windowHeight * 0.366;

  //Add and style the hard mode button
  hardModeButton = createButton("Hard");
  hardModeButton.mouseClicked(hardMode);
  hardModeButton.style("font-size", "1.5vh");
  hardModeButton.style("background-color", hardModeButtonColor);
  hardModeButton.style("color", "white");
  hardModeButton.position(hardModeButtonX, hardModeButtonY);

  //Add the timer text
  timerText();
}

function draw() {
  /*The startGameNumber starts at 0
   *Pressing the start/resume game button makes the startGameNumber equal to one
   *Pressing the pause button makes the startGameNumber equal to two, essentially stopping the draw function
   *Pressing the restart game button makes the startGameNumber equal to two, also stopping most of the draw function
   */
  if (startGameNumber === 1) {
    fill("grey");

    timeElapsed++; //Start timeElapsed timer

    speedUpTimer++; //Start speedUpTimer

    snowflakeTimer++; //Start snowflakeTimer

    //Define text2Contents
    text2Contents =
      "You died. \n You survived " +
      round(timeElapsed / 60) +
      " seconds. \n Press the reset button to initiate another round.";

    /*Add the top and bottom roads again.
     *These roads will move
     */
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

    /*If and else if statements to control the Y Positions
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

    /*Use if and else if statements so that vehicles appear at random        *times
     *For example, if the timeRunning is equal to uncomingCarAppear
     *cancel out the timeRunning timer, draw the red car
     *and redefine uncomingCarX so that the red car will move to the left
     */
    if (timeRunning === uncomingCarAppear) {
      timeRunning = timeRunning - 1;

      image(
        uncomingCarImg,
        uncomingCarX,
        uncomingCarY,
        uncomingCarWidth,
        uncomingCarHeight
      );

      uncomingCarX = uncomingCarX - movementScale * 4;
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

      uncomingSemiX = uncomingSemiX - movementScale * 4;
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

      oldSlowTruckX = oldSlowTruckX - movementScale * 1;
    }

    if (timeRunning4 === slowCarAppear) {
      timeRunning4 = timeRunning4 - 1;

      image(slowCarImg, slowCarX, slowCarY, slowCarWidth, slowCarHeight);

      slowCarX = slowCarX - movementScale * 1;
    }

    /*If the controlled green luxury car hits another vehicle, game over, commence post death sequence
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

    /*Use if statements so that if a vehicle is off of the left side of the canvas
     *the vehicle will be moved off of the right side of the canvas
     *with a random Y position from the potential options
     */
    if (oldSlowTruckX <= pixelScale * -300) {
      oldSlowTruckY = random(oldSlowTruckY2Options);
      oldSlowTruckX = floor(random(oldSlowTruckXMin, oldSlowTruckXMax));
    }

    if (uncomingCarX <= pixelScale * -290) {
      uncomingCarY = random(uncomingCarY2Options);
      uncomingCarX = uncomingCarX2;
    }

    if (uncomingSemiX <= pixelScale * -550) {
      uncomingSemiY = random(uncomingSemiY2Options);
      uncomingSemiX = uncomingSemiX2;
    }

    if (slowCarX <= pixelScale * -296) {
      slowCarY = random(slowCarY2Options);
      slowCarX = floor(random(slowCarXMin, slowCarXMax));
    }

    //Rectangle to make divider between highways
    fill("grey");
    rect(0, pixelScale * 162, width, pixelScale * 8);

    /*Add the snowflakes to the screen
     *Credit to Aatish Bhatia for the code
     */
    if (startGameNumber === 1 && snowflakeTimer / 60 >= 2) {
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

    //Add timerText
    timerText();

    /*If the timeElapsed is greater than or equal to 285 seconds (4 minutes and 45 seconds)
     *and the vehicle is off of the canvas to the right,
     *stop the movement of the vehicle so that it does not appear again.
     *This is preperation for the victory sequence
     */
    if (timeElapsed / 60 >= 285) {
      if (uncomingCarX > width) {
        uncomingCarX = uncomingCarX + movementScale * 4;
      }
      if (uncomingSemiX > width) {
        uncomingSemiX = uncomingSemiX + movementScale * 4;
      }
      if (oldSlowTruckX > width) {
        oldSlowTruckX = oldSlowTruckX + movementScale * 1;
      }
      if (slowCarX > width) {
        slowCarX = slowCarX + movementScale * 1;
      }
    }
  }

  //If timeElapsed is equal to 300 seconds (5 minutes), add the victory road
  if (timeElapsed / 60 >= 300) {
    image(
      victoryRoadImg,
      victoryRoadX,
      victoryRoadY,
      victoryRoadWidth,
      victoryRoadHeight
    );

    //If victoryRoad fills the canvas, stop it from moving
    if (victoryRoadX > 0) {
      victoryRoadX -= scrollSpeed;
    }

    image(carImg, carImgX, carImgY, carImgWidth, carImgHeight);

    /*If victoryRoad fills the canvas:
     *add victoryText
     *add the green luxury car on top of the road
     *pause the game
     */

    if (victoryRoadX <= 0) {
      victoryText();

      victoryRoadX = victoryRoadX;

      image(carImg, carImgX, carImgY, carImgWidth, carImgHeight);

      pauseGame();

      /*VictoryMusicPlayAmount starts at 0.
       *Therefore, play the victoryMusic
       *and set the victoryMusicPlayAmount to 1,
       *so the music only plays once
       */

      if (victoryMusicPlayAmount === 0) {
        victoryMusic.play();
        victoryMusicPlayAmount = 1;
      }

      //Credit to slow_izzm on the p5.js web editor for this code
      for (let i = 0; i < confetti.length / 2; i++) {
        confetti[i].confettiDisplay();

        if (confetti[i].y > height) {
          confetti[i] = new Confetti(
            random(0, width),
            random(-height, 0),
            random(-1, 1)
          );
        }
      }

      for (let i = int(confetti.length / 2); i < confetti.length; i++) {
        confetti[i].confettiDisplay();

        if (confetti[i].y > height) {
          confetti[i] = new Confetti(
            random(0, width),
            random(-height, 0),
            random(-1, 1)
          );
        }
      }
    }
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

/*Snowflake class
 *Credit to Aatish Bhatia for the code
 */
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
    //X position follows a circle
    let w = 0.6; //Angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    //Different size snowflakes fall at slightly different Y speeds
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

/*Centre the canvas on the screen
*To suit the website, the Y position of the canvas is two-thirds of the way down the screen
*/
function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 1.5;
  winterGetawayCanvas.position(canvasX, canvasY);
}

//If the window is resized, pause the game and display an alert message to the user
function windowResized() {
  pauseGame();

  windowResizedCounter++;

  if (windowResizedCounter === 1) {
    windowResizedText();
  }
}

/*Stop most of the draw function
*Make it so the controls do not work
*Pause the escapeMusic and stop the postDeathMusic
*Set the escapeMusicPlayAmount to 0 so the escapeMusic will play when the game is resumed
*/
function pauseGame() {
  startGameNumber = 2;

  keyPressedIntializationNumber = 1;

  escapeMusic.pause();

  postDeathSound.stop();

  escapeMusicPlayAmount = 0;
}

/*Activate the keys
*Allow the drop function to execute
*Play the escapeMusic
*/
function startGame() {
  keyPressedIntializationNumber = 0;

  startGameNumber = 1;

  windowResizedCounter = 0;

  if (escapeMusicPlayAmount === 0) {
    escapeMusic.play();
    escapeMusicPlayAmount = 1;
  }
}

/*If the windowResizedCounter is equal to one, 
*meaning the windowResizedText is not displayed:
*Reset the X positions of the obstacle vehicles
*Reset all timers
*Activate the keys
*Stop all music
*Revert back to easy mode
*Add the two roads, the green luxury car and the timerText for display purposes
*Reset the victoryRoadX and the circleRadius to their original values
*/
function restartGame() {
  if (windowResizedCounter === 0) {
    keyPressedIntializationNumber = 0;

    snowflakeTimer = 0;

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

    circleRadius = 0;

    easyMode();

    victoryRoadX = width;

    escapeMusic.stop();

    postDeathSound.stop();

    victoryMusic.stop();

    postDeathSoundPlayAmount = 0;

    victoryMusicPlayAmount = 0;

    escapeMusicPlayAmount = 0;
    }
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
 *Variables for the ellipse include the name "circle"
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

  x1 += scrollSpeed; //Cancel out the scroll speed, in turn, stopping the roads from moving
  x2 += scrollSpeed;
  uncomingCarX = uncomingCarX + movementScale * 4; //Cancel out the vehicle movements, stopping them from moving
  uncomingSemiX = uncomingSemiX + movementScale * 4;
  oldSlowTruckX = oldSlowTruckX + movementScale * 1;
  slowCarX = slowCarX + movementScale * 1;
  circleY = height / 2;
  circleX = width / 2;
  explosion(); //Call explosion function

  timeElapsed--; //Cancel out the time elapsed timer

  //Stop escapeMusic
  escapeMusic.stop();

  //Stop victoryMusic
  victoryMusic.stop();

  //Start the postDeathMusic and make it only play once
  if (postDeathSoundPlayAmount === 0) {
    postDeathSound.play();
    postDeathSoundPlayAmount = 1;
  }

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

//Function for speedIncreaseText
function speedIncreaseText() {
  text3X = 0;
  text3Y = 0;
  text3Width = width;
  text3Height = height;

  speedIncreaseTextSize = pixelScale * 8;

  text3Contents = "Speed Increase in " + timeToSpeedIncrease;

  fill("white");
  textFont("Helvetica");
  textSize(speedIncreaseTextSize);
  textAlign(CENTER, CENTER);
  text(text3Contents, text3X, text3Y, text3Width, text3Height);
}

//Function for windowResizedText
function windowResizedText() {
  text4X = 0;
  text4Y = -(pixelScale * 40);
  text4Width = width;
  text4Height = height;

  windowResizedTextSize = pixelScale * 10;

  text4Contents =
    "The browser was resized \n Readjust the browser size to fit the game \n Alternatively, refresh the page to automatically resize the game";

  fill("red");
  textFont("Helvetica");
  textSize(speedIncreaseTextSize);
  textAlign(CENTER, BOTTOM);
  text(text4Contents, text4X, text4Y, text4Width, text4Height);
}

/*easyMode function
*Redefine the movement scale to its lowest setting
*The movement scale will alter the movement speed of any element that moves
*Recolour the text of the speed mode buttons to reflect the current speed setting
*/
function easyMode() {
  movementScale = windowHeight * 0.0012;
  scrollSpeed = pixelScale * 4;

  speedModeNumber = 1;

  easyModeButton.removeAttribute("color");
  easyModeButton.style("color", "black");

  mediumModeButton.removeAttribute("color");
  mediumModeButton.style("color", "white");

  hardModeButton.removeAttribute("color");
  hardModeButton.style("color", "white");
}

/*mediumMode function
*Set the movementScale to its medium setting
*Restyle the speed mode buttons to fit the scenario
*/
function mediumMode() {
  movementScale = windowHeight * 0.0015;
  scrollSpeed = pixelScale * 5;

  speedModeNumber = 2;

  easyModeButton.removeAttribute("color");
  easyModeButton.style("color", "white");

  mediumModeButton.removeAttribute("color");
  mediumModeButton.style("color", "black");

  hardModeButton.removeAttribute("color");
  hardModeButton.style("color", "white");
}

/*hardMode function
*Set the movementScale to its fastest setting
*Restyle the speed mode buttons to fit the scenario
*/
function hardMode() {
  movementScale = windowHeight * 0.0018;
  scrollSpeed = pixelScale * 6;

  speedModeNumber = 3;

  easyModeButton.removeAttribute("color");
  easyModeButton.style("color", "white");

  mediumModeButton.removeAttribute("color");
  mediumModeButton.style("color", "white");

  hardModeButton.removeAttribute("color");
  hardModeButton.style("color", "black");
}

/*Confetti class
*Credit to slow_izzm on the p5.js web editor for this code
*/
class Confetti {
  constructor(_x, _y, _s) {
    this.x = _x;
    this.y = _y;
    this.speed = _s;
    this.time = random(0, 100);
    this.color = random(confettiColor);
    this.amp = random(2, 30);
    this.phase = random(0.5, 2);
    this.size = random(height / 12, height / 50);
    this.form = round(random(0, 1));
  }

  confettiDisplay() {
    fill(this.color);
    // blendMode(SCREEN);
    noStroke();
    push();
    translate(this.x, this.y);
    translate(
      this.amp * sin(this.time * this.phase),
      this.speed * cos(2 * this.time * this.phase)
    );
    rotate(this.time);
    rectMode(CENTER);
    scale(cos(this.time / 4), sin(this.time / 4));
    if (this.form === 0) {
      rect(0, 0, this.size, this.size / 2);
    } else {
      ellipse(0, 0, this.size);
    }
    pop();

    this.time = this.time + 0.1;

    this.speed += 1 / 200;

    this.y += this.speed;
  }
}


//victoryText function
function victoryText() {
  var victoryTextX = 0;
  var victoryTextY = 0;

  var victoryTextWidth = width;
  var victoryTextHeight = height;

  var victoryTextSize = pixelScale * 20;

  var victoryTextStrokeWeight = pixelScale * 2;

  var victoryTextContents =
    "You have escaped. The police are off your tail. Enjoy your well-deserved confetti";

  fill("#0086FF");
  strokeWeight(victoryTextStrokeWeight);
  stroke("grey");
  textFont("Helvetica");
  textSize(victoryTextSize);
  textAlign(CENTER, CENTER);
  text(
    victoryTextContents,
    victoryTextX,
    victoryTextY,
    victoryTextWidth,
    victoryTextHeight
  );
}

//This is the end of the code. Thank you for reading.
