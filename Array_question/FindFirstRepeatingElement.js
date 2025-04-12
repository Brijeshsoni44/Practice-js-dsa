// Problem Explanation:
// You're given an array. You need to return the first element that repeats when traversed from left to right.

// The repeating element must occur more than once, and you must return the one whose first duplicate occurrence comes first.

// 🔍 Dry Run:
// Array: [1, 5, 3, 4, 3, 5, 6]

// 1: first time

// 5: first time

// 3: first time

// 4: first time

// 3: already seen → mark as first repeating

// 5: also repeats, but comes after 3

// BUT since 5 appeared before 3, and both repeat, the first repeating element is 5.

// 🔧 Approach (without inbuilt methods):
// We’ll use 2 loops:

// Outer loop to pick each element.

// Inner loop to check if it repeats ahead.

// Keep track of the index of the first repeating element.




function findFirstRepeating(arr) {
    let minIndex = arr.length; // Initialize with large value
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          if (i < minIndex) {
            minIndex = i; // Update with smaller index
          }
          break; // No need to check further for arr[i]
        }
      }
    }
  
    if (minIndex === arr.length) {
      return -1; // No repeating element
    }
  
    return arr[minIndex];
  }
  
  // Test
  const input = [1, 5, 3, 4, 3, 5, 6];
  console.log(findFirstRepeating(input)); // Output: 5
  