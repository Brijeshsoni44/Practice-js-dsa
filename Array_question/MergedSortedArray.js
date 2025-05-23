function mergeSortedArrays(arr1, arr2){
    let mergerArray = [];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergerArray.push(arr1[i]);
            i++;
        }else{
            mergerArray.push(arr2[j]);
            j++
        }
    }

    while(i < arr1.length){
        mergerArray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        mergerArray.push(arr2[j]);
        j++;
    }
    return mergerArray

}








const arr1 = [1, 3, 5], arr2 = [2, 4, 6,23,21,12];
const result = [...arr1, ...arr2]
const result2 = result.sort((a,b) => a-b)
console.log(result2)
// console.log("result",result.sort(a,b) => a-b)
console.log(mergeSortedArrays(arr1, arr2)); 



// Pseudo Code Explanation (Step by Step)
// Let's break down the logic in an easy-to-memorize way:

// 1. Define the function:
// Take two sorted arrays as input.

// Create an empty array mergedArr to store the merged result.

// Initialize two pointers, i (for arr1) and j (for arr2).

// plaintext
// Copy
// Edit
// function mergeSortedArrays(arr1, arr2):
//     create an empty array mergedArr
//     initialize i = 0 (for arr1) and j = 0 (for arr2)
// 2. Merge Elements Using Two Pointers:
// While both pointers are within their respective arrays:

// Compare arr1[i] and arr2[j]

// Push the smaller element to mergedArr and move the respective pointer.

// plaintext
// Copy
// Edit
//     while i < length of arr1 AND j < length of arr2:
//         if arr1[i] < arr2[j]:
//             add arr1[i] to mergedArr
//             increment i
//         else:
//             add arr2[j] to mergedArr
//             increment j
// 3. Add Remaining Elements (If Any):
// If arr1 has elements left, add them directly to mergedArr.

// If arr2 has elements left, add them directly to mergedArr.

// plaintext
// Copy
// Edit
//     while i < length of arr1:
//         add arr1[i] to mergedArr
//         increment i

//     while j < length of arr2:
//         add arr2[j] to mergedArr
//         increment j
// 4. Return the Merged Array:
// plaintext
// Copy
// Edit
//     return mergedArr
// Final Pseudo Code
// plaintext
// Copy
// Edit
// function mergeSortedArrays(arr1, arr2):
//     create an empty array mergedArr
//     initialize i = 0, j = 0
    
//     while i < length of arr1 AND j < length of arr2:
//         if arr1[i] < arr2[j]:
//             add arr1[i] to mergedArr
//             increment i
//         else:
//             add arr2[j] to mergedArr
//             increment j

//     while i < length of arr1:
//         add arr1[i] to mergedArr
//         increment i

//     while j < length of arr2:
//         add arr2[j] to mergedArr
//         increment j

//     return mergedArr
// How to Memorize This for an Interview?
// Use the 3-step framework:

// 1. "Two Pointers, One Result" Approach
// Imagine two fingers pointing at two sorted lists.

// Move the smaller number to the new list, and advance that finger.

// This helps you visualize the algorithm quickly.

// 2. Think in "While Loops"
// First loop: Compare elements of arr1 and arr2.

// Second loop: Add remaining elements from arr1.

// Third loop: Add remaining elements from arr2.

// This structure makes it easy to recall.

// 3. Use the "I-J Rule" (i for arr1, j for arr2)
// If arr1[i] is smaller → move i forward

// Else, move j forward

// If one array is exhausted, dump the rest into mergedArr.

// Interview Tip:
// 🔥 "Think out loud!"
// If stuck, say:
// "I'll use the two-pointer approach. Since both arrays are sorted, I can compare elements and merge in O(n) time."