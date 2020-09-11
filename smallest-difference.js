//Time O(n * m)
//Space O(1)
function smallestDifference(arrayOne, arrayTwo) {
  let num1 = arrayOne[0];
  let num2 = arrayTwo[0];
  let diff = Math.abs(arrayOne[0] - arrayTwo[0]);
  console.log(diff);
  for (let i of arrayOne) {
    for (let j of arrayTwo) {
      let ijDiff = Math.abs(i - j);
      if (diff > ijDiff) {
        console.log(ijDiff);
        diff = ijDiff;
        num1 = i;
        num2 = j;
      }
    }
  }
  return [num1, num2];
}

// Time O(nlog(n)+ mlog(m))
// Space O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idOne = 0;
  let idTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idOne < arrayOne.length && idTwo < arrayTwo.lenght) {
    let firstNum = arrayOne[idOne];
    let secondNum = arrayTwo[idTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
