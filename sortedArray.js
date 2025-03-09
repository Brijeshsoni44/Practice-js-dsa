// 1. Use a loop to compare each element with the next one.
// 2. If any element is greater than the next, return false.
// 3. If the loop completes, return true.


function sortArray(arr) {
    for(let i=0; i < arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    console.log(arr)
}

// Example usage
let numbers = [5, 3, 8, 4, 2];
sortArray(numbers); // Output: [2, 3, 4, 5, 8]


