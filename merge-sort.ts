// Best: O(nlog(n)) time | O(n) space
// Average: O(nlog(n)) time | o(n) space
// Worst: O(nlog(n)) time | o(n) space

export function mergeSort(array: number[]) {
	if(array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	mergetSortHelper(array, 0, array.length - 1, auxiliaryArray);
  return array;
}

function mergetSortHelper(mainArray: number[], startIdx: number, endIdx: number, auxiliaryArray: number[]){
	if( startIdx == endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergetSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
	mergetSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray)
}

function doMerge(mainArray: number[], startIdx: number, middleIdx: number, endIdx: number, auxiliaryArray: number[]){
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while(i <= middleIdx && j <= endIdx){
		if(auxiliaryArray[i] <= auxiliaryArray[j]){
			mainArray[k++] = auxiliaryArray[i++];
		} else {
			mainArray[k++] = auxiliaryArray[j++];
		}
	}
	while(i <= middleIdx){
		mainArray[k++] = auxiliaryArray[i++];
	}	
	while(j <= endIdx) {
		mainArray[k++] = auxiliaryArray[j++];
	}
}