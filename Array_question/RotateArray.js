// Reverse the entire array.
// [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
// Reverse the first k elements.
// [5, 4] → [4, 5]
// [4, 5, 3, 2, 1]
// Reverse the remaining n-k elements.
// [3, 2, 1] → [1, 2, 3]
// Final Output: [4, 5, 1, 2, 3]Reverse the entire array.
// [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
// Reverse the first k elements.
// [5, 4] → [4, 5]
// [4, 5, 3, 2, 1]
// Reverse the remaining n-k elements.
// [3, 2, 1] → [1, 2, 3]
// Final Output: [4, 5, 1, 2, 3]

// How to Memorize for an Interview?
// Use the "Reverse Trick" 🌀:

// 1️⃣ Reverse the full array
// 2️⃣ Reverse first k elements
// 3️⃣ Reverse remaining elements

// 🎯 Key Formula:
// 👉 "Reverse - Reverse - Reverse" = Rotation

// 🔥 Interview Tip: If the interviewer asks for a rotation solution without extra space, this is the best approach!




function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

// Test Case
// let arr = [1, 2, 3, 4, 5];
// reverse(arr, 0, arr.length - 1);
// console.log(arr); // Output: [5, 4, 3, 2, 1] (Full reverse)

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;  // Handle large k
    reverse(arr, 0, n - 1);  // Reverse full array
    reverse(arr, 0, k - 1);  // Reverse first k elements
    reverse(arr, k, n - 1);  // Reverse remaining elements
}

// Test Case
let arr2 = [1, 2, 3, 4, 5];
rotateArray(arr2, 2);
console.log(arr2); // Output: [4, 5, 1, 2, 3]
