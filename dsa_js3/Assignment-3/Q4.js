//Approch
//create a function and push target then sort an array then sorted the index number return the target index

//Complexity
//Time Complexity-O(log n) because the binary search algorithm divides the search space in half at each step.
//Space Compexity-The space complexity is O(1) since the algorithm uses only a constant amount of extra space

let searchInsert = function(nums, target) {
    nums.push(target)
    let sortedArray = nums.sort((a, b) => a - b);
    return sortedArray.indexOf(target);
};

console.log(searchInsert([1,3,5,6], 5));