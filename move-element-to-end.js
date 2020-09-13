// Time O(n)
// Space O(1)

function moveElementToEnd(array, toMove) {
    let i = 0;
      let j = array.length - 1;
      while(i < j){
          while(i < j && array[j] === toMove){
              j--;
          }
          if(array[i] === toMove){
                   // let temp = array[j];
                  array[i] = array[j];
                  array[j] = toMove;
                  
          }
          i++;
      }
      
      return array
  }