// function missingNumber(arr){
//     let maxNum = Math.max(...arr);
//     exppectedSum = (maxNum*(maxNum+1)/2)
  
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     const result = exppectedSum - sum
//     return result
   
// }

// let arr = [20,21,23,24,25]

// console.log(missingNumber(arr))





function findMissingNumber(arr) {
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    
    let expectedSum = 0, actualSum = 0;
    
    // Calculate expected sum using a loop
    for (let i = minNum; i <= maxNum; i++) {
        expectedSum += i;
    }
    
    // Calculate actual sum
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum; // The missing number
}

let arr = [21,22,24,]; // 22 is missing
console.log(findMissingNumber(arr)); // Output: 22
