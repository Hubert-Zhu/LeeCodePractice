function threeNumberSum(array, targetSum) {
  let result = [];

  for (let i = 0; i < array.length - 2; i++) {
    const firstNumber = array[i];
    let newTargetSum = targetSum - firstNumber;
    let nums = {};

    for (let j = i + 1; j < array.length; j++) {
      const pontentialMatch = newTargetSum - array[j];
      if (pontentialMatch in nums) {
        let tem = [array[i], array[j], pontentialMatch];
        tem.sort((a, b) => a - b);
        result.push(tem);
      } else {
        let num = array[j];
        nums[num] = true;
      }
    }
  }

  result.sort((a, b) => {
    if (a[0] - b[0] !== 0) {
      return a[0] - b[0];
    } else if (a[1] - b[1] !== 0) {
      return a[1] - b[1];
    } else if (a[2] - b[2] !== 0) {
      return a[2] - b[2];
    }
  });
  return result;
}

// O(n^2) Time
// O(n) Space

function threeNumberSum(array, targetSum){
    array.sort((a,b)=> a-b);
    const triplets = []
    for(let i = 0; i < array.length - 2; i++){
        let left = i + 1;
        let right = array.length - 1;
        while(left < right){
            const currentSum = array[i] + array[left] + array[right]
            if(currentSum === target){
                triplets.push([array[i], array[left], array[right]])
                left++;
                right--;
            }else if(currentSume < targetSum){
                left++;
            }else if(currentSum > targetSum){
                right--;
            }
        }
    }
    return triplets;
}