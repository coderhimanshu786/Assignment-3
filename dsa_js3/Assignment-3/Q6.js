//Approch
//Create a copy of an array and sort it then iterate over an array find length of an array then increment by 2
// then check condition if arr[i] not equal to arr[i+1] return array otherthan print array after decrement
//here start index0 and last one index2

//Complexity
//Time Complexity-O(n)
//Space Complexity-O(1)


let singleNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b); // Create a copy of an array and sort it
  
    for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  
    return arr[arr.length - 1];  // Return the first non-matching pair
  };

  console.log(singleNumber([3, 2, 0, 1]));