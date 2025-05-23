// function FlattendArr(arr){
//     let result = []
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             for(let j=0; j<arr[i].length; j++){
//                 result.push(arr[i][j]);
//             }
//         }else{
//             result.push(arr[i])
//         }

//     }
//     console.log(result);

// }

// const arr = [1, [2, 3], 4, [5, 6]];
// FlattendArr(arr)
// edge cases

// // 1. Empty array
// console.log(flattenDeep([])); 
// // Expected: []
// // 2. Array with only nested empty arrays
// console.log(flattenDeep([[], [[]], [[[]]]])); 
// // Expected: []
// // 3. Array with non-nested single elements
// console.log(flattenDeep([1, 2, 3])); 
// // Expected: [1, 2, 3]
// // 4. Deeply nested single value
// console.log(flattenDeep([[[[[42]]]]])); 
// // Expected: [42]
// // 5. Mixed types (numbers, strings, booleans, null, undefined)
// console.log(flattenDeep([1, [true, [null, ['text', undefined]]]])); 
// // Expected: [1, true, null, 'text', undefined]
// // 6. Array with `undefined` or `null` directly
// console.log(flattenDeep([null, undefined, [null, [undefined]]])); 
// // Expected: [null, undefined, null, undefined]
// // 7. Large array with nested chunks
// console.log(flattenDeep([1, [2, [3, [4, [5]]]], 6, 7])); 
// // Expected: [1, 2, 3, 4, 5, 6, 7]
// // 8. Array with objects inside (not arrays)
// console.log(flattenDeep([{ a: 1 }, [2, { b: 3 }]])); 
// // Expected: [{ a: 1 }, 2, { b: 3 }]
// // 9. Array with functions
// console.log(flattenDeep([1, [2, () => 3, [4]]])); 
// // Expected: [1, 2, () => 3, 4]
// // 10. Array with deeply nested empty arrays and trailing values
// console.log(flattenDeep([[[[]]], 100])); 
// Expected: [100]








// deeply nested

function deeplyNested(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if (Array.isArray(arr[i])) {
            let flattened = deeplyNested(arr[i]); // Recursively flatten
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]); // Manually push elements
            }
        }else{
            result.push(arr[i]);
        }
    }
    return result;
   
}

let arr = [1,2,3,[4,5,[6,7],9],10,[11,12],13]   
console.log(flattenDeep([[[[]]], 100])); 

// inbuilt methos
// console.log(arr.flat(Infinity))
console.log(deeplyNested(arr))


// function flattenDeep(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
        // if (Array.isArray(arr[i])) {
        //     let flattened = flattenDeep(arr[i]); // Recursively flatten
        //     for (let j = 0; j < flattened.length; j++) {
        //         result.push(flattened[j]); // Manually push elements
        //     }
        // } else {
//             result.push(arr[i]); // Push normal elements
//         }
//     }
//     return result;
// }

// const arr = [1,2,3,[4,5,[6,7],9],10,[11,12],13];
// console.log(flattenDeep(arr)); // [1, 2, 3, 4, 5]

//



