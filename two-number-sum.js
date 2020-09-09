// Time: O(n^2)
// Space: O(1)
function twoNumberSumSolution1(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNumber = array[i];
    const secondNumber = targetSum - firstNumber;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === secondNumber) {
        return [firstNumber, secondNumber];
      }
    }
  }
  return [];
}

// Time: O(n)
// Space: O(n)
function twoNumberSumSolution2(array, targetSum) {
  const num = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      num[num] = true;
    }
  }
  return [];
}

// Time: O(nlog(n))
// Space: O(1)
function twoNumberSumSolution3(array, targetSume) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[right], array[left]];
    } else if (currnetSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
