class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space
  export function findClosestValueInBst(tree: BST, target: number) {
    return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
  function findClosestValueInBstHelper(tree: BST | null, target: number, closest: number): number{
      if ( tree === null ) return closest;
      if(Math.abs(target - closest) > Math.abs(target - tree.value)){
          closest = tree.value;
      }
      if( target < tree.value ){
          return findClosestValueInBstHelper(tree.left, target, closest);
      } else if(target > tree.value){
          return findClosestValueInBstHelper(tree.right, target, closest);
      } else {
          return closest;
      }
  }
  