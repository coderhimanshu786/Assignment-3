//Approch
//1st find length of an array then iterate over an array
//check condition if [i]<[i+1] then check iterate again over an array if [j]>[i] then reverse [i],[j] to [j],[i]
//use slice method it removes the first character from an Array and returns that without altering the original array
//then initialize index 0 then iterate over an array initailize k return number otherthan return reverse number
//Complexity
//Time complexity: O(n)
//Space complexity: O(1)


let nextPermutation = function (nums) {
  n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = n - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          let right = [...nums.slice(i + 1).reverse()];
          let index = 0;
          for (let k = i + 1; k < n; k++) {
            nums[k] = right[index++];
          }
          return nums;
        }
      }
    }
  }
  return nums.reverse();
};



console.log(nextPermutation([1, 2, 3]));