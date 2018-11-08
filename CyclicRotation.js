// Arrays

// 100% correctness

function solution(numbersArray, numberOfTimesToRotate) {

  if (numberOfTimesToRotate < 0 || numberOfTimesToRotate > 100) {
    return numbersArray;
  } 

  if ( numbersArray.length > 100 || numbersArray.length < 1) {
    return numbersArray;
  }

  var firstElem;
  
  for(var i = 0; i < numberOfTimesToRotate; i++ ) {
    firstElem = numbersArray.shift();
    numbersArray.push(firstElem);
  }

  return numbersArray;
}
