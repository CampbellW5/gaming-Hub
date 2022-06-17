//Initialize all variables
var investingSimulatorCanvas;

var investingSimulatorrCanvasWidth;
var investingSimulatorCanvasHeight;

var investingSimulatorCanvasX;
var investingSimulatorrCanvasY;

var buyButton;
var buyButtonColor;
var buyButtonX;
var buyButtonY;
var buyButtonSize;

var sellButton;
var sellButtonColor;
var sellButtonX;
var sellButtonY;
var buyButtonSize;

var amountInput;
var amountInputX;
var amountInputY;
var amountInputSize;

var submitButton;
var submitButtonX;
var submitButtonY;
var submitButtonSize;

/*Set timeToPriceChange to 7
*This number will be counted down to 0;
*/
var timeToPriceChange = 7;

//Set the starting book value to 0 CAD
var totalAmountCAD = 0;
//Set the starting number of shares to 0
var totalShares = 0;
//Set the starting spending power to 5000 CAD
var spendingPower = 5000;
var pricePerShare;
var originalPricePerShare;

//Introduce all the variables required for text
var timeToPriceChangeTextX;
var timeToPriceChangeTextY;
var timeToPriceChangeTextWidth;
var timeToPriceChangeTextHeight;
var timeToPriceChangeTextSize;
var timeToPriceChangeTextContents

var totalAmountTextX;
var totalAmountTextY;
var totalAmountTextWidth;
var totalAmountTextHeight;
var totalAmountTextSize;
var totalAmountTextContents;

var sharesTextX;
var sharesTextY;
var sharesTextWidth;
var sharesTextHeight;
var sharesTextSize;
var sharesTextContents;

var spendingPowerTextX;
var spendingPowerTextY;
var spendingPowerTextWidth;
var spendingPowerTextHeight;
var spendingPowerTextSize;
var spendingPowerTextContents;

var pricePerShareTextX;
var pricePerShareTextY;
var pricePerShareTextWidth;
var pricePerShareTextextHeight;
var pricePerShareTextSize;
var pricePerShareTextContents;

var whiteRectangleX;
var whiteRectangleY;
var whiteRectangleWidth;
var whiteRectangleHeight;

var blueRectangleX;
var blueRectangleY;
var blueRectangleWidth;
var blueRectangleHeight;

var newsStory1X;
var newsStory1Y;
var newsStory1Width;
var newsStory1Height;
var newsStory1TextSize;
var newsStory1Contents;

var newsStory2X;
var newsStory2Y;
var newsStory2Width;
var newsStory2Height;
var newsStory2TextSize;
var newsStory2Contents;

var newsStory3X;
var newsStory3Y;
var newsStory3Width;
var newsStory3Height;
var newsStory3TextSize;
var newsStory3Contents;

var newsStory4X;
var newsStory4Y;
var newsStory4Width;
var newsStory4Height;
var newsStory4TextSize;
var newsStory4Contents;

var newsStory5X;
var newsStory5Y;
var newsStory5Width;
var newsStory5Height;
var newsStory5TextSize;
var newsStory5Contents;

var newsStory6X;
var newsStory6Y;
var newsStory6Width;
var newsStory6Height;
var newsStory6TextSize;
var newsStory6Contents;

var newsStory7X;
var newsStory7Y;
var newsStory7Width;
var newsStory7Height;
var newsStory7TextSize;
var newsStory7Contents;

var newsStory8X;
var newsStory8Y;
var newsStory8Width;
var newsStory8Height;
var newsStory8TextSize;
var newsStory8Contents;

var newsStory9X;
var newsStory9Y;
var newsStory9Width;
var newsStory9Height;
var newsStory9TextSize;
var newsStory9Contents;

var newsStory10X;
var newsStory10Y;
var newsStory10Width;
var newsStory10Height;
var newsStory10TextSize;
var newsStory10Contents;

var tooExpensiveTextX;
var tooExpensiveTextY;
var tooExpensiveTextWidth;
var tooExpensiveTextHeight;
var tooExpensiveTextSize;
var tooExpensiveTextContents;

var tooManySharesTextX;
var tooManySharesTextY;
var tooManySharesTextWidth;
var tooManySharesTextHeight;
var tooManySharesTextSize;
var tooManySharesTextContents;

var priceChangeTextX;
var priceChangeTextY;
var priceChangeTextWidth;
var priceChangeTextHeight;
var priceChangeTextSize;
var priceChangeTextContents;

//Set the timePassed to start at 0;
var timePassed = 0;

var newsStoryNumber;

/*Set buySellDeterminer to 0, 
*meaning the user is neither buying or selling at the start of the game
*/
var buySellDeterminer = 0;
var priceChangeTextDeterminer = 0;

//Set the tooExpensiveTextNumber to 0, as this text does not appear at the start of the game
var tooExpensiveTextNumber = 0;

var sharePurchaseAmount = 0;

function setup() {
  /*Set the canvas width and height using windowWidth
  *This makes it so that the canvas will scale, no matter the width of the window
  */
  investingSimulatorCanvasWidth = windowWidth / 2;
  investingSimulatorCanvasHeight = windowWidth / 4;

  investingSimulatorCanvas = createCanvas(
    investingSimulatorCanvasWidth,
    investingSimulatorCanvasHeight
  );

  //Define the style, position, and size of the buy button
  buyButtonColor = "white";
  buyButtonX = (windowWidth - width) / 2;
  buyButtonY = (windowHeight - height) / 1.5 + windowWidth * 0.05;
  buyButtonSize = windowWidth * 0.05;

  //Create and style the buy button
  buyButton = createButton("Buy");
  buyButton.mouseClicked(buyStocks);
  buyButton.style("font-size", "1vw");
  buyButton.style("font-family", "Trebuchet MS");
  buyButton.style("background-color", buyButtonColor);
  buyButton.style("color", "#3f93df");
  buyButton.size(buyButtonSize);
  buyButton.position(buyButtonX, buyButtonY);

  //Define the style, position, and size of the sell button
  sellButtonColor = "white";
  sellButtonX = buyButton.x + buyButton.width;
  sellButtonY = (windowHeight - height) / 1.5 + windowWidth * 0.05;
  sellButtonSize = windowWidth * 0.05;

  //Create and style the sell button
  sellButton = createButton("Sell");
  sellButton.mouseClicked(sellStocks);
  sellButton.style("font-size", "1vw");
  sellButton.style("font-family", "Trebuchet MS");
  sellButton.style("background-color", sellButtonColor);
  sellButton.style("color", "#3f93df");
  sellButton.size(sellButtonSize);
  sellButton.position(sellButtonX, sellButtonY);

  //Define the position and size of the input box
  amountInputX = (windowWidth - width) / 2;
  amountInputY = buyButton.y + buyButton.height;
  amountInputSize = width / 3;

  //Create and style the input box
  amountInput = createInput("");
  amountInput.style("font-size", "1vw");
  amountInput.style("font-family", "Trebuchet MS");
  amountInput.style("background-color", "#3f93df");
  amountInput.style("color", "white");
  amountInput.size(amountInputSize);
  amountInput.position(amountInputX, amountInputY);

  //Define the style, position, and size of the submit button
  submitButtonColor = "white";
  submitButtonX = amountInput.x + amountInput.width;
  submitButtonY = buyButton.y + buyButton.height;
  submitButtonSize = windowWidth * 0.1;

  //Create and style the submit button
  submitButton = createButton("Submit");
  submitButton.mouseClicked(submit);
  submitButton.style("font-size", "1vw");
  submitButton.style("font-family", "Trebuchet MS");
  submitButton.style("background-color", submitButtonColor);
  submitButton.style("color", "#3f93df");
  submitButton.size(submitButtonSize);
  submitButton.position(submitButtonX, submitButtonY);

  //Set the frame rate to 60
  frameRate(60);
  
  //Generate a random price per share between 25 and 100 CAD
  pricePerShare = random(25, 100);
  /*The below code rounds the pricePerShare to two decimal places
   *Number.EPSILON is a very small number that ensures accurate rounding
   */
  pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  
  originalPricePerShare = pricePerShare;

  //Introduce the formulas for book value, shares, and spending power
  totalShares = totalShares + amountInput.value() * 1;
  totalAmountCAD = totalAmountCAD + amountInput.value() * pricePerShare;
  totalAmountCAD = Math.round((totalAmountCAD + Number.EPSILON) * 100) / 100;
  spendingPower = spendingPower - amountInput.value() * pricePerShare;
  spendingPower = Math.round((spendingPower + Number.EPSILON) * 100) / 100;
}

function draw() {
  centerCanvas();

  //Add the blue rectangle to the top part of the canvas
  blueRectangle();
  //Add the white rectangle to the rest of the canvas
  whiteRectangle();

  //Add totalAmountText
  totalAmountText();
  //Add timeToPriceChangeText
  timeToPriceChangeText();
  //Add sharesText
  sharesText();
  //Add spendingPowerText
  spendingPowerText();
  //Add pricePerShareText
  pricePerShareText();

  //Start the time passed timer
  timePassed++;

  //Add the newsStoryPeriod function
  newsStoryPeriod();
  
  /*If the priceChangeTextDeterminer is equal to one:
  *Stop the newsStoryText from appearing by setting the newsStoryNumber to zero
  *There is not a news story that has a newsStoryNumber of zero.
  *Therefore, newsStoryText will not appear
  *Also, add priceChangeText
  */
  
  if (priceChangeTextDeterminer === 1) {
    newsStoryNumber = 0;
    priceChangeText();
  }

  /*If the buySellDeterminer is equal to one,
  *the user has clicked the buy button and intends to buy shares
  *However, if the spendingPower is less than the price of the purchase,
  *the user cannot afford to purchase that number of shares.
  *In response, display the tooExpensiveText
  */
  if (
    buySellDeterminer === 1 &&
    spendingPower < amountInput.value() * pricePerShare
  ) {
    tooExpensiveText();
  }
  
  /*If the buySellDeterminer is equal to two,
  *the user has clicked the sell button and intends to sell shares.
  *However, if the user does not own the number of shares they intend to sell,
  *the transaction cannot be completed.
  *In response, display the tooManySharesText
  */
  if (buySellDeterminer === 2 && totalShares < amountInput.value()) {
    tooManySharesText();
  }
}

/*Center the canvas
*To suit the website, the Y position of the canvas should be two-thirds of the way down the page
*/
function centerCanvas() {
  investingSimulatorCanvasX = (windowWidth - width) / 2;
  investingSimulatorCanvasY = (windowHeight - height) / 1.5;
  investingSimulatorCanvas.position(
    investingSimulatorCanvasX,
    investingSimulatorCanvasY
  );
}

/*If the window is resized:
*Resize the canvas based on the width of the window
*Reposition and resize the buy button
*Reposition and resize the sell button
*Reposition and resize the amount input
*Reposition and resize the submit button
*/
function windowResized() {
  resizeCanvas(windowWidth / 2, windowWidth / 4);
  centerCanvas();

  buyButton.position((windowWidth - width) / 2, (windowHeight - height) / 1.5 + windowWidth * 0.05);
  buyButton.size(windowWidth * 0.05);
  
  sellButton.position(buyButton.x + buyButton.width, (windowHeight - height) / 1.5 + windowWidth * 0.05);
  sellButton.size(windowWidth * 0.05);
  
  amountInput.position((windowWidth - width) / 2, buyButton.y + buyButton.height);
  amountInput.size(width / 3);
  
  submitButton.position(amountInput.x + amountInput.width, buyButton.y + buyButton.height);
  submitButton.size(windowWidth * 0.1);
}

//timeToPriceChangeText function
function timeToPriceChangeText() {
  timeToPriceChangeTextY = windowWidth * 0.005;
  timeToPriceChangeTextWidth = width;
  timeToPriceChangeTextHeight = height;

  timeToPriceChangeTextSize = windowWidth * 0.01;

  if (timeToPriceChange > 1 || timeToPriceChange === 0) {
  timeToPriceChangeTextContents =
    timeToPriceChange + " days to next price change";
    timeToPriceChangeTextX = width - windowWidth * 0.127;
  } else if (timeToPriceChange === 1) {
    timeToPriceChangeTextContents = timeToPriceChange + " day to next price change";
    timeToPriceChangeTextX = width - windowWidth * 0.1225;
  }

  fill("white");
  textFont("Trebuchet MS");
  textSize(timeToPriceChangeTextSize);
  textAlign(LEFT, TOP);
  text(
    timeToPriceChangeTextContents,
    timeToPriceChangeTextX,
    timeToPriceChangeTextY,
    timeToPriceChangeTextWidth,
    timeToPriceChangeTextHeight
  );
}

//totalAmountText function
function totalAmountText() {
  totalAmountTextX = windowWidth * 0.005;
  totalAmountTextY = windowWidth * 0.005;
  totalAmountTextWidth = width;
  totalAmountTextHeight = height;

  totalAmountTextSize = windowWidth * 0.01;

  totalAmountTextContents = "Book Value: " + totalAmountCAD + " CAD";

  fill("white");
  textFont("Trebuchet MS");
  textSize(totalAmountTextSize);
  textAlign(LEFT, TOP);
  text(
    totalAmountTextContents,
    totalAmountTextX,
    totalAmountTextY,
    totalAmountTextWidth,
    totalAmountTextHeight
  );
}

//sharesText function
function sharesText() {
  sharesTextX = windowWidth * 0.005;
  sharesTextY = windowWidth * 0.036;
  sharesTextWidth = width;
  sharesTextHeight = height;

  sharesTextSize = windowWidth * 0.01;

  sharesTextContents = "Shares: " + totalShares;

  fill("white");
  textFont("Trebuchet MS");
  textSize(sharesTextSize);
  textAlign(LEFT, TOP);
  text(
    sharesTextContents,
    sharesTextX,
    sharesTextY,
    sharesTextWidth,
    sharesTextHeight
  );
}

//spendingPowerText
function spendingPowerText() {
  spendingPowerTextX = windowWidth * 0.005;
  spendingPowerTextY = windowWidth * 0.021;
  spendingPowerTextWidth = width;
  spendingPowerTextHeight = height;

  spendingPowerTextSize = windowWidth * 0.01;

  spendingPowerTextContents = "Spending Power: " + spendingPower + " CAD";

  fill("white");
  textFont("Trebuchet MS");
  textSize(sharesTextSize);
  textAlign(LEFT, TOP);
  text(
    spendingPowerTextContents,
    spendingPowerTextX,
    spendingPowerTextY,
    spendingPowerTextWidth,
    spendingPowerTextHeight
  );
}

//pricePerShareText function
function pricePerShareText() {
  pricePerShareTextX = 0;
  pricePerShareTextY = windowWidth * 0.021;
  pricePerShareTextWidth = width;
  pricePerShareTextHeight = height;

  pricePerShareTextSize = windowWidth * 0.01;

  pricePerShareTextContents = "Price Per Share: " + pricePerShare + " CAD";

  fill("white");
  textFont("Trebuchet MS");
  textSize(pricePerShareTextSize);
  textAlign(RIGHT, TOP);
  text(
    pricePerShareTextContents,
    pricePerShareTextX,
    pricePerShareTextY,
    pricePerShareTextWidth,
    pricePerShareTextHeight
  );
}

//whiteRectangle function
function whiteRectangle() {
  whiteRectangleX = 0;
  whiteRectangleY = windowWidth * 0.05;
  whiteRectangleWidth = width;
  whiteRectangleHeight = height;

  noStroke();

  fill("#fcfcfc");
  rect(
    whiteRectangleX,
    whiteRectangleY,
    whiteRectangleWidth,
    whiteRectangleHeight
  );
}

//blueRectangle function
function blueRectangle() {
  blueRectangleX = 0;
  blueRectangleY = 0;
  blueRectangleWidth = width;
  blueRectangleHeight = windowWidth * 0.05;

  noStroke();

  fill("#3f93df");
  rect(
    blueRectangleX,
    blueRectangleY,
    blueRectangleWidth,
    blueRectangleHeight
  );
}

//newsStory1 function
function newsStory1() {
  newsStory1X = 0;
  newsStory1Y = width - windowWidth * 0.3;
  newsStory1Width = width;
  newsStory1Height = height;

  newsStory1TextSize = windowWidth * 0.01;

  newsStory1Contents =
    "Automatic Hand Washer Systems (AHW) has released their quarterly earnings. The figure is significantly lower than experts had predicted.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory1TextSize);
  textAlign(CENTER);
  text(
    newsStory1Contents,
    newsStory1X,
    newsStory1Y,
    newsStory1Width,
    newsStory1Height
  );
}

//newsStory2 function
function newsStory2() {
  newsStory2X = 0;
  newsStory2Y = width - windowWidth * 0.3;
  newsStory2Width = width;
  newsStory2Height = height;

  newsStory2TextSize = windowWidth * 0.01;

  newsStory2Contents =
    "Michael Moon, the CEO of AHW, is facing a harsh lawsuit. AHW's price per share will drop in response.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory2TextSize);
  textAlign(CENTER);
  text(
    newsStory2Contents,
    newsStory2X,
    newsStory2Y,
    newsStory2Width,
    newsStory2Height
  );
}

//newsStory3 function
function newsStory3() {
  newsStory3X = 0;
  newsStory3Y = width - windowWidth * 0.3;
  newsStory3Width = width;
  newsStory3Height = height;

  newsStory3TextSize = windowWidth * 0.01;

  newsStory3Contents =
    "Automatic Hand Washing Systems announced a new product line for the summer of 2022. Experts are excited about the potential of this line.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory3TextSize);
  textAlign(CENTER);
  text(
    newsStory3Contents,
    newsStory3X,
    newsStory3Y,
    newsStory3Width,
    newsStory3Height
  );
}

//newsStory4 function
function newsStory4() {
  newsStory4X = 0;
  newsStory4Y = width - windowWidth * 0.3;
  newsStory4Width = width;
  newsStory4Height = height;

  newsStory4TextSize = windowWidth * 0.01;

  newsStory4Contents =
    "Automatic Hand Washing Systems recalled one of their products for hygiene issues";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory4TextSize);
  textAlign(CENTER);
  text(
    newsStory4Contents,
    newsStory4X,
    newsStory4Y,
    newsStory4Width,
    newsStory4Height
  );
}

//newsStory5 function
function newsStory5() {
  newsStory5X = 0;
  newsStory5Y = width - windowWidth * 0.3;
  newsStory5Width = width;
  newsStory5Height = height;

  newsStory5TextSize = windowWidth * 0.01;

  newsStory5Contents =
    "Hyatt Hotels Corporation (H) agreed to install the Automatic Hand Washer inside their hotel rooms";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory5TextSize);
  textAlign(CENTER);
  text(
    newsStory5Contents,
    newsStory5X,
    newsStory5Y,
    newsStory5Width,
    newsStory5Height
  );
}

//newsStory6 function
function newsStory6() {
  newsStory6X = 0;
  newsStory6Y = width - windowWidth * 0.3;
  newsStory6Width = width;
  newsStory6Height = height;

  newsStory6TextSize = windowWidth * 0.01;

  newsStory6Contents =
    "Automatic Hand Washing Systems has been praised by the CDC";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory6TextSize);
  textAlign(CENTER);
  text(
    newsStory6Contents,
    newsStory6X,
    newsStory6Y,
    newsStory6Width,
    newsStory6Height
  );
}

//newsStory7 function
function newsStory7() {
  newsStory7X = 0;
  newsStory7Y = width - windowWidth * 0.3;
  newsStory7Width = width;
  newsStory7Height = height;

  newsStory7TextSize = windowWidth * 0.01;

  newsStory7Contents =
    "Rumours are circulating that Dyson attempted to purchase AHW; however, AHW told Dyson to take a walk";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory7TextSize);
  textAlign(CENTER);
  text(
    newsStory7Contents,
    newsStory7X,
    newsStory7Y,
    newsStory7Width,
    newsStory7Height
  );
}

//newsStory8 function
function newsStory8() {
  newsStory8X = 0;
  newsStory8Y = width - windowWidth * 0.3;
  newsStory8Width = width;
  newsStory8Height = height;

  newsStory8TextSize = windowWidth * 0.01;

  newsStory8Contents =
    "Automatic Hand Washing Systems revamped their best-selling product. The improvement was expensive, yet the early returns are promising.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory8TextSize);
  textAlign(CENTER);
  text(
    newsStory8Contents,
    newsStory8X,
    newsStory8Y,
    newsStory8Width,
    newsStory8Height
  );
}

//newsStory9 function
function newsStory9() {
  newsStory9X = 0;
  newsStory9Y = width - windowWidth * 0.3;
  newsStory9Width = width;
  newsStory9Height = height;

  newsStory9TextSize = windowWidth * 0.01;

  newsStory9Contents =
    "The S&P 500 is down collectively. AHW stock prices have yet to react.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory9TextSize);
  textAlign(CENTER);
  text(
    newsStory9Contents,
    newsStory9X,
    newsStory9Y,
    newsStory9Width,
    newsStory9Height
  );
}

//newsStory10 function
function newsStory10() {
  newsStory10X = 0;
  newsStory10Y = width - windowWidth * 0.3;
  newsStory10Width = width;
  newsStory10Height = height;

  newsStory10TextSize = windowWidth * 0.01;

  newsStory10Contents =
    "The recession continues. The future looks bleak, yet it is a poor time to sell.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(newsStory10TextSize);
  textAlign(CENTER);
  text(
    newsStory10Contents,
    newsStory10X,
    newsStory10Y,
    newsStory10Width,
    newsStory10Height
  );
}

/*Function to randomly generate a news story and to control the timeToPriceChange
*Every five seconds, the timeToPriceChange will decrease by one
*When the timeToPriceChange is equal to one:
*Set timePassed to -600 so that the priceChange period will last 10 seconds
*Set the priceChangeTextDeterminer to one so that the priceChangeText will appear
*When the timePassed divided by 60 (60 frames per second) and rounded is equal to 1:
*Randomly generate a newsStoryNumber that is associated with a news story
*This news story will be displayed on the canvas
*/
function newsStoryPeriod() {
  if (round(timePassed / 60 === 1)) {
    timeToPriceChange = 7;
    newsStoryNumber = floor(random(1, 11));
    priceChangeTextDeterminer = 0;
  } else if (round(timePassed / 60) === 5) {
    timeToPriceChange = 6;
    newsStoryNumber = newsStoryNumber;
  } else if (round(timePassed / 60) === 10) {
    timeToPriceChange = 5;
    newsStoryNumber = newsStoryNumber;
  } else if (round(timePassed / 60) === 15) {
    timeToPriceChange = 4;
    newsStoryNumber = newsStoryNumber;
  } else if (round(timePassed / 60) === 20) {
    timeToPriceChange = 3;
    newsStoryNumber = newsStoryNumber;
  } else if (round(timePassed / 60) === 25) {
    timeToPriceChange = 2;
    newsStoryNumber = newsStoryNumber;
  } else if (round(timePassed / 60) === 30) {
    timeToPriceChange = 1;
    newsStoryNumber = newsStoryNumber;
  } else if (round(timePassed / 60) === 35) {
    timeToPriceChange = 0;
    timePassed = -600;
    priceChange();
    priceChangeTextDeterminer = 1;
  }

  /*If and else if statements to display the randomly picked news story
  *Define the newsStoryNumber as the current newsStoryNumber
  *so that the newsStoryNumber will not be randomly picked until requested
  */
  if (newsStoryNumber === 1) {
    newsStory1();
    newsStoryNumber = 1;
  } else if (newsStoryNumber === 2) {
    newsStory2();
    newsStoryNumber = 2;
  } else if (newsStoryNumber === 3) {
    newsStory3();
    newsStoryNumber = 3;
  } else if (newsStoryNumber === 4) {
    newsStory4();
    newsStoryNumber = 4;
  } else if (newsStoryNumber === 5) {
    newsStory5();
    newsStoryNumber = 5;
  } else if (newsStoryNumber === 6) {
    newsStory6();
    newsStoryNumber = 6;
  } else if (newsStoryNumber === 7) {
    newsStory7();
    newsStoryNumber = 7;
  } else if (newsStoryNumber === 8) {
    newsStory8();
    newsStoryNumber = 8;
  } else if (newsStoryNumber === 9) {
    newsStory9();
    newsStoryNumber = 9;
  } else if (newsStoryNumber === 10) {
    newsStory10();
    newsStoryNumber = 10;
  }
}

//tooExpensiveText function
function tooExpensiveText() {
  tooExpensiveTextX = 0;
  tooExpensiveTextY = width - windowWidth * 0.4;
  tooExpensiveTextWidth = width;
  tooExpensiveTextHeight = height;

  tooExpensiveTextSize = windowWidth * 0.01;

  tooExpensiveTextContents =
    "You do not have enough spending power to purchase " +
    amountInput.value() +
    " shares";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(tooExpensiveTextSize);
  textAlign(LEFT);
  text(
    tooExpensiveTextContents,
    tooExpensiveTextX,
    tooExpensiveTextY,
    tooExpensiveTextWidth,
    tooExpensiveTextHeight
  );
}

//tooManySharesText function
function tooManySharesText() {
  tooManySharesTextX = 0;
  tooManySharesTextY = width - windowWidth * 0.4;
  tooManySharesTextWidth = width;
  tooManySharesTextHeight = height;

  tooManySharesTextSize = windowWidth * 0.01;

  tooManySharesTextContents =
    "You do not own enough shares to sell " +
    amountInput.value() +
    " shares";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(tooManySharesTextSize);
  textAlign(LEFT);
  text(
    tooManySharesTextContents,
    tooManySharesTextX,
    tooManySharesTextY,
    tooManySharesTextWidth,
    tooManySharesTextHeight
  ); 
}

/*buyStocks function
*Set the buySellDeterminer to one to indicate that shares are being purchased
*Recolour the buy button so that users know they have clicked the buy button
*/
function buyStocks() {
  buySellDeterminer = 1;

  buyButton.removeAttribute("color");
  buyButton.style("color", "black");

  sellButton.removeAttribute("color");
  sellButton.style("color", "#3f93df");
}

/*sellStocks function
*Set the buySellDeterminer to two in order to indicate that shares are being sold
*Recolour the sell button so that users know they have clicked the sell button
*/
function sellStocks() {
  buySellDeterminer = 2;

  buyButton.removeAttribute("color");
  buyButton.style("color", "#3f93df");

  sellButton.removeAttribute("color");
  sellButton.style("color", "black");
}


/*submit function for when users submit their buy or sell orders
*If users are buying shares and they can afford the purchase:
*The shares purchased are added to the totalShares
*The book value is increased by the dollar amount purchased
*The spending power is decreased by the dollar amount purchased
*The tooExpensiveText is removed
*The text in the input box is erased
*If users are buying shares and they cannot afford the purchase:
*Display tooExpensiveText to alert users that they cannot afford their purchase
*Do not allow them to submit their purchase
*If users are selling shares and they have enough shares to sell the number of shares they desire:
*The totalShares are subtracted by the shares sold
*The book value is decreased by the dollar amount sold
*The spending power is increased by the dollar amount sold
*The tooExpensiveText is removed
*The text in the input box is removed
*If users are selling shares and do not have enough shares to sell the number of shares they desire:
*The tooManySharesText is displayed
*Do not allow them to submit their sale
*/
function submit() {
  if (
    buySellDeterminer === 1 &&
    spendingPower >= amountInput.value() * pricePerShare
  ) {
    totalShares = totalShares + amountInput.value() * 1;
    totalAmountCAD = totalAmountCAD + amountInput.value() * pricePerShare;
    totalAmountCAD = Math.round((totalAmountCAD + Number.EPSILON) * 100) / 100;
    spendingPower = spendingPower - amountInput.value() * pricePerShare;
    spendingPower = Math.round((spendingPower + Number.EPSILON) * 100) / 100;
    tooExpensiveTextNumber = 0;
    amountInput.value('');
  } else if (
    buySellDeterminer === 1 &&
    spendingPower < amountInput.value() * pricePerShare
  ) {
    tooExpensiveText();
  } else if (buySellDeterminer === 2 && totalShares >= amountInput.value()) {
    totalShares = totalShares - amountInput.value() * 1;
    totalAmountCAD = totalAmountCAD - amountInput.value() * pricePerShare;
    totalAmountCAD = Math.round((totalAmountCAD + Number.EPSILON) * 100) / 100;
    spendingPower = spendingPower + amountInput.value() * pricePerShare;
    spendingPower = Math.round((spendingPower + Number.EPSILON) * 100) / 100;
    tooExpensiveTextNumber = 0;
    amountInput.value('');
  } else if (buySellDeterminer === 2 && totalShares < amountInput.value()) {
    tooManySharesText();
  } else { 
    buySellDeterminer = 0;
  }
}


/*priceChange function
*newsStory1 is negative; therefore, the pricePerShare will decrease by between 2% and 10%
*newsStory2 is quite negative; therefore, the pricePerShare will decrease by between 2% and 25%
*newsStory3 is positive; therefore, the pricePerShare will increase by between 1% and 10%
*newsStory4 is negative; therefore, the pricePerShare will decrease by between 2% and 20%
*newsStory5 is is quite positive; therefore, the pricePerShare will increase by between 5% and 15%
*newsStory6 is extremely positive; therefore, the pricePerShare will increase by between 2% and 30%
*newsStory7 can be negative or positive; therefore, the pricePerShare will change somewhere between a decrease of 5% and an increase of 5%
*newsStory8 can be negative or positive; therefore, the pricePerShare will change somewhere between a decrease of 6% and an increase of 6%
*newsStory9 can be negative or positive; therefore, the pricePerShare will change somewhere between a decrease of 3% and an increase of 3% 
*newsStory10 is negative; therefore, the pricePerShare will decrease by between 2% and 8%
*/
function priceChange() {
  if (newsStoryNumber === 1) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.1);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 2) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.25);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 3) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * 0.01, pricePerShare * 0.1);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 4) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.2);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 5) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * 0.05, pricePerShare * 0.15);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 6) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * 0.02, pricePerShare * 0.3);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 7) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.05, pricePerShare * 0.05);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 8) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.06, pricePerShare * 0.06);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 9) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.03, pricePerShare * 0.03);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 10) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.08);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  }
  
  totalAmountCAD = totalShares * pricePerShare;
  totalAmountCAD = Math.round((totalAmountCAD + Number.EPSILON) * 100) / 100;
}


//priceChangeText function
function priceChangeText() {
  priceChangeTextX = 0;
  priceChangeTextY = width - windowWidth * 0.3;
  priceChangeTextWidth = width;
  priceChangeTextHeight = height;

  priceChangeTextSize = windowWidth * 0.01;

  priceChangeTextContents =
    "A price change occurred. The original price per share was " + originalPricePerShare + " CAD. The new price per share is " + pricePerShare + " CAD.";

  fill("#3f93df");
  textFont("Trebuchet MS");
  textSize(priceChangeTextSize);
  textAlign(CENTER);
  text(
    priceChangeTextContents,
    priceChangeTextX,
    priceChangeTextY,
    priceChangeTextWidth,
    priceChangeTextHeight
  );
}

//This is the end of the code. Thank you for reading.
