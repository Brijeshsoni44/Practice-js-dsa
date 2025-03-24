//Approach
//first we will sort the array.
// after sorting the array we will iterate through the loops .
// and keeps checking the number if find the missing number then return it.


//you can resolve by using summation formula

// (n*(n+1)/2)- sum of array elements

// this is sorting method
// function missingNumber(A){
//     let arr = A.sort();
//     for(let i=0; i<arr.length; i++){
//         if( arr[i] !== i+1){
//             return console.log(i+1)
//         }
//     }
//     return arr.length+1

// }

// let arr = [1,2,3,5,6,7,8,6];
// missingNumber(arr);

// by using summation formula

// function missingNumberUsingSummation(A){
//     let n = A.length+1;
//     let summationFormula = (n*(n+1)/2);
//     let sumOfArr = 0;
//     for(let i=0; i<n-1; i++){
//         sumOfArr = sumOfArr + A[i];
//     }
//     let result = summationFormula - sumOfArr
//     console.log(result);


// }
// let arr = [1, 2, 5, 4, 6, 8, 7];

// missingNumberUsingSummation(arr)


function findMissingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            console.log("Missing number:", arr[i] + 1);
            return arr[i] + 1;
        }
    }
    console.log("No missing number");
    return -1;
}

// Example usage
let numbers = [546, 547, 548, 550];
findMissingNumber(numbers); // Output: Missing number: 23



function missingNumberUsingSummation(A){
    let n = A.length+1;
    let first = A[0];
    let last = A[A.length-1]
    summationSum = ((first + last) * n) / 2;
    let sumOfArr = 0;
    for(let i=0; i<n-1; i++){
        sumOfArr = sumOfArr + A[i];
    }
    let result = summationSum - sumOfArr
    console.log(result);


}
let arr = [21,22,27];

missingNumberUsingSummation(arr)
