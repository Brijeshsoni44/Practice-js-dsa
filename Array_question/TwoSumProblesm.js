// Two Sum
// Problem: Find two numbers in an array that sum to a target.
// Solution:
// Use a nested loop to compare every pair of numbers.
// If a pair sums up to the target, return their indices.
// If no pair is found, return an empty array.
// This approach has O(n²) time complexity, which can be optimized using a hash map.




function twoSum(arr, sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === sum){
                return [i,j]
            }
        }
    }
    return []
}






console.log(twoSum([2,7,11,15], 9))