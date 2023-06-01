//Approch
//using two pointer method
//1st sort the number in an array then diff is initialize to infinity(which are greater than finite number)
//run loop for condition and iterate over an array 
//initialize i, j, k and check condition if j<k then initialize sum three number of array
//check the absolute difference if sum<target then increment of j otherthen decrement of k

//Complexity
//Time COmplexity- O(nxn)
//Space Complexity- O(1)

var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let diff = Infinity;

    for(var i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1
    
        while(j < k) {
            let sum = nums[i]+nums[j]+nums[k]
        
            if(Math.abs(diff) > Math.abs(target-sum)) {
                diff = target - sum
            }
        
            if(sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return target - diff;
};
console.log(threeSumClosest([-1,2,1,-4], 1));