const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//  gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

//  generates and writes calcuation log
function createAndWriteOutput(operator, resultBeforeCalc, userInputNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${userInputNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

// write to log
function writeToLog(opertion, prevResult, currentNumber, newResult) {
  const logEntry = {
    operation: opertion,
    prevResult: prevResult,
    number: currentNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const userEnteredInput = getUserInput();

  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !userEnteredInput
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += userEnteredInput;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= userEnteredInput;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= userEnteredInput;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= userEnteredInput;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, userEnteredInput);
  writeToLog(calculationType, initialResult, userEnteredInput, currentResult);
}
 

addBtn.addEventListener("click", calculateResult.bind(this,"ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this,"SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this,"MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this,"DIVIDE"));
