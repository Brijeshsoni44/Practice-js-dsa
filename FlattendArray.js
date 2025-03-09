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



