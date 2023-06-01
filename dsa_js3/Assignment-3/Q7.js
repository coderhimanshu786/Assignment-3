//Approch
    // Create an empty array to store ranges
    // Set the starting number for the current range
    // Iterate over the array, including an extra iteration with undefined to add the last range
    // If the difference between the current number and the previous number is greater than 1,
    // or if the current number is undefined (i.e., we have reached the end of the array),
  // then we have reached the end of a range of consecutive numbers
   // If the range contains only one number, push that number as a string
   // Otherwise, push the range as a string in the format "start->end"
        // Set the starting number for the next range
    // Return the array of ranges


//Complexity
//Time complexity: O(n)O(n)O(n)
//Space complexity: O(n)O(n)O(n)


let summaryRanges = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i < nums.length - 1 && nums[i + 1] - nums[i] == 1) {
            i++;
        }
        if (start != nums[i])
		    result.push(`${start}->${nums[i]}`);
        else 
		    result.push(start.toString());
    }
    return result;
};

  console.log(summaryRanges([0,1,3,50,75]));