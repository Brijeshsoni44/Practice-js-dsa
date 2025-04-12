// Step-by-Step Explanation (Dry Run):
// Input: [-2, -3, 4, -1, -2, 1, 5, -3]
// Starting from i = 0:

// Loop j from 0 to 7.

// For each subarray, sum its elements, check and update maxSum.

// Iterate through every possible subarray:

// Subarray from i = 0, j = 0: [-2], sum = -2, update maxSum = -2.

// Subarray from i = 0, j = 1: [-2, -3], sum = -5, no update.

// Subarray from i = 0, j = 2: [-2, -3, 4], sum = -1, update maxSum = -1.

// Continue checking subarrays...

// Continue for i = 1 to 7.

// Final maxSum after all iterations is 7.




function maxSubArraySumNaive(arr){
    let maxSum = -Infinity;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            let currentSum = 0;
            for(let k=i; k<=j; k++){
                currentSum +=  arr[k];
            }
           
            if (currentSum > maxSum) {
                maxSum = currentSum;
              }
        }
    }
    return maxSum

}




const input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySumNaive(input)); 