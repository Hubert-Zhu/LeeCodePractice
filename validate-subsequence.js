// Time O(n)
// Space O(1)
function isValidSubSequence(array, sequence) {
  let arrId = 0;
  let seqId = 0;
  while (arrId < array.length && seqId < sequence.length) {
    if (array[arrId] === sequence[seqId]) {
      seqId++;
    }
    arrId++;
  }
  return seqId === sequence.length;
}

// Time O(n)
// Space O(1)
function isValidSubSequence(array, sequence) {
  let seqId = 0;
  for (const value of array) {
    if (seqId === sequence.length) break;
    if (sequence[seqId] === value) seqId++;
  }
  return seqId === sequence.length;
}
