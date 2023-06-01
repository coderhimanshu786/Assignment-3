//Approch
//Two pointer
//sort an array then iterate over an aray check conditons

let fourSum = function (nums, target) {
  let arr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        let val = nums[i] + nums[j] + nums[k] + nums[l];
        if (val === target) {
          arr.push([nums[i], nums[j], nums[k], nums[l]]);
          while (k < l && nums[k] === nums[k + 1]) k++;
          while (k < l && nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (val > target) {
          l--;
        } else if (val < target) {
          k++;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return arr;
};


console.log(fourSum([1,0,-1,0,-2,2], 0));