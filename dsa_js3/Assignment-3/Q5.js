//Approch
//use BigInt method to target the number and plus one in it return array [[1,2,3]]

//Complexity
//Time Complexity-O(n)
//Space Complexity-O(1)

var plusOne = function (digits) {
    let largeInt = BigInt(digits.map(String).join('')) + 1n
    return Array.from(String(largeInt), Number)
};



console.log(plusOne([1,2,3]));