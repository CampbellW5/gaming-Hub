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

var timeToPriceChange = 7;

var totalAmountCAD = 0;
var totalShares = 0;
var spendingPower = 5000;
var pricePerShare;
var originalPricePerShare;

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

var timePassed = 0;

var newsStoryNumber;

var buySellDeterminer = 0;
var priceChangeTextDeterminer = 0;

var tooExpensiveTextNumber = 0;

var sharePurchaseAmount = 0;

function setup() {
  investingSimulatorCanvasWidth = windowWidth / 2;
  investingSimulatorCanvasHeight = windowWidth / 4;

  investingSimulatorCanvas = createCanvas(
    investingSimulatorCanvasWidth,
    investingSimulatorCanvasHeight
  );

  buyButtonColor = "white";
  buyButtonX = (windowWidth - width) / 2;
  buyButtonY = (windowHeight - height) / 1.5 + windowWidth * 0.05;
  buyButtonSize = windowWidth * 0.05;

  buyButton = createButton("Buy");
  buyButton.mouseClicked(buyStocks);
  buyButton.style("font-size", "1vw");
  buyButton.style("font-family", "Trebuchet MS");
  buyButton.style("background-color", buyButtonColor);
  buyButton.style("color", "#3f93df");
  buyButton.size(buyButtonSize);
  buyButton.position(buyButtonX, buyButtonY);

  sellButtonColor = "white";
  sellButtonX = buyButton.x + buyButton.width;
  sellButtonY = (windowHeight - height) / 1.5 + windowWidth * 0.05;
  sellButtonSize = windowWidth * 0.05;

  sellButton = createButton("Sell");
  sellButton.mouseClicked(sellStocks);
  sellButton.style("font-size", "1vw");
  sellButton.style("font-family", "Trebuchet MS");
  sellButton.style("background-color", sellButtonColor);
  sellButton.style("color", "#3f93df");
  sellButton.size(sellButtonSize);
  sellButton.position(sellButtonX, sellButtonY);

  amountInputX = (windowWidth - width) / 2;
  amountInputY = buyButton.y + buyButton.height;
  amountInputSize = width / 3;

  amountInput = createInput("");
  amountInput.style("font-size", "1vw");
  amountInput.style("font-family", "Trebuchet MS");
  amountInput.style("background-color", "#3f93df");
  amountInput.style("color", "white");
  amountInput.size(amountInputSize);
  amountInput.position(amountInputX, amountInputY);

  submitButtonColor = "white";
  submitButtonX = amountInput.x + amountInput.width;
  submitButtonY = buyButton.y + buyButton.height;
  submitButtonSize = windowWidth * 0.1;

  submitButton = createButton("Submit");
  submitButton.mouseClicked(submit);
  submitButton.style("font-size", "1vw");
  submitButton.style("font-family", "Trebuchet MS");
  submitButton.style("background-color", submitButtonColor);
  submitButton.style("color", "#3f93df");
  submitButton.size(submitButtonSize);
  submitButton.position(submitButtonX, submitButtonY);

  frameRate(60);
  
  pricePerShare = random(25, 100);
  pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  
  originalPricePerShare = pricePerShare;

  totalShares = totalShares + amountInput.value() * 1;
  totalAmountCAD = totalAmountCAD + amountInput.value() * pricePerShare;
  totalAmountCAD = Math.round((totalAmountCAD + Number.EPSILON) * 100) / 100;
  spendingPower = spendingPower - amountInput.value() * pricePerShare;
  spendingPower = Math.round((spendingPower + Number.EPSILON) * 100) / 100;
}

function draw() {
  centerCanvas();

  blueRectangle();
  whiteRectangle();

  totalAmountText();
  timeToPriceChangeText();
  sharesText();
  spendingPowerText();
  pricePerShareText();

  timePassed++;

  newsStoryPeriod();
  
  if (priceChangeTextDeterminer === 1) {
    newsStoryNumber = 0;
    priceChangeText();
  }

  if (
    buySellDeterminer === 1 &&
    spendingPower < amountInput.value() * pricePerShare
  ) {
    tooExpensiveText();
  }
  
  if (buySellDeterminer === 2 && totalShares < amountInput.value()) {
    tooManySharesText();
  }
}

function centerCanvas() {
  investingSimulatorCanvasX = (windowWidth - width) / 2;
  investingSimulatorCanvasY = (windowHeight - height) / 1.5;
  investingSimulatorCanvas.position(
    investingSimulatorCanvasX,
    investingSimulatorCanvasY
  );
}

function windowResized() {
  centerCanvas();
}

function timeToPriceChangeText() {
  timeToPriceChangeTextX = width - windowWidth * 0.127;
  timeToPriceChangeTextY = windowWidth * 0.005;
  timeToPriceChangeTextWidth = width;
  timeToPriceChangeTextHeight = height;

  timeToPriceChangeTextSize = windowWidth * 0.01;

  timeToPriceChangeTextContents =
    timeToPriceChange + " days to next price change";

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

function newsStory1() {
  newsStory1X = 0;
  newsStory1Y = width - windowWidth * 0.3;
  newsStory1Width = width;
  newsStory1Height = height;

  newsStory1TextSize = windowWidth * 0.01;

  newsStory1Contents =
    "Automatic Hand Washer Systems (AHW) has released their quarterly earnings. The figure is significantly lower than experts had predicted.";

  fill("#3f93dff");
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

function newsStory8() {
  newsStory8X = 0;
  newsStory8Y = width - windowWidth * 0.3;
  newsStory8Width = width;
  newsStory8Height = height;

  newsStory8TextSize = windowWidth * 0.01;

  newsStory8Contents =
    "Automatic Hand Washing Systems revamped their best selling product. The improvement was expensive, yet the early returns are promising.";

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

function newsStory9() {
  newsStory9X = 0;
  newsStory9Y = width - windowWidth * 0.3;
  newsStory9Width = width;
  newsStory9Height = height;

  newsStory9TextSize = windowWidth * 0.01;

  newsStory9Contents =
    "The S&P 500 is down collectivly. AHW stock prices have yet to react.";

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

function buyStocks() {
  buySellDeterminer = 1;

  buyButton.removeAttribute("color");
  buyButton.style("color", "black");

  sellButton.removeAttribute("color");
  sellButton.style("color", "#3f93df");
}

function sellStocks() {
  buySellDeterminer = 2;

  buyButton.removeAttribute("color");
  buyButton.style("color", "#3f93df");

  sellButton.removeAttribute("color");
  sellButton.style("color", "black");
}

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

function priceChange() {
  if (newsStoryNumber === 1) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.1);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 2) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.5);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 3) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * 0.01, pricePerShare * 0.1);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 4) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.4);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 5) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * 0.05, pricePerShare * 0.15);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 6) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * 0.02, pricePerShare * 0.5);
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
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * 0.02);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  } else if (newsStoryNumber === 10) {
    originalPricePerShare = pricePerShare;
    pricePerShare = pricePerShare + random(pricePerShare * -0.02, pricePerShare * -0.8);
    pricePerShare = Math.round((pricePerShare + Number.EPSILON) * 100) / 100;
  }
  
  totalAmountCAD = totalShares * pricePerShare;
  totalAmountCAD = Math.round((totalAmountCAD + Number.EPSILON) * 100) / 100;
}

function priceChangeText() {
  priceChangeTextX = 0;
  priceChangeTextY = width - windowWidth * 0.3;
  priceChangeTextWidth = width;
  priceChangeTextHeight = height;

  priceChangeTextSize = windowWidth * 0.01;

  priceChangeTextContents =
    "A price change occured. The original price per share was " + originalPricePerShare + " CAD. The new price per share is " + pricePerShare + " CAD.";

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
