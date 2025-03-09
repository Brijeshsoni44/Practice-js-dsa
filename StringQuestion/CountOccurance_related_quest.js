// 📌 Frequency Counting (Hash Map Concept) - Interview Notes
// 🔹 Concept Explanation
// Frequency counting is a technique where we use a hash map (object or Map in JavaScript) to store occurrences of characters, words, numbers, or other elements. This approach helps in solving problems related to duplicates, anagrams, unique elements, and frequency-based queries.

// 🔹 Key Differences: Hash Map vs Other Methods
// Approach	Time Complexity	Space Complexity	Best For
// Using Hash Map	O(n)	O(n)	Counting elements efficiently
// Using Nested Loops	O(n²)	O(1)	Small inputs, simple problems
// Sorting & Comparing	O(n log n)	O(1)	Finding duplicates, ordering elements
// 🔹 Core Function: Character Frequency Count
// javascript
// Copy
// Edit
// function countOccurrences(str) {
//     let map = {};
//     for (let char of str) {
//         map[char] = (map[char] || 0) + 1;
//     }
//     return map;
// }

// console.log(countOccurrences("AAApple"));
// // Output: { A: 3, p: 2, l: 1, e: 1 }
// ✅ Uses O(n) time and O(n) space for storing results efficiently.

// 🔹 10 Interview Questions & Solutions
// 1️⃣ Find the Most Frequent Character in a String
// javascript
// Copy
// Edit
// function mostFrequentChar(str) {
//     let map = countOccurrences(str);
//     let maxChar = '', maxCount = 0;

//     for (let key in map) {
//         if (map[key] > maxCount) {
//             maxCount = map[key];
//             maxChar = key;
//         }
//     }
//     return maxChar;
// }

// console.log(mostFrequentChar("apple")); // Output: "p"
// 2️⃣ Check if Two Strings are Anagrams
// javascript
// Copy
// Edit
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     let map1 = countOccurrences(str1);
//     let map2 = countOccurrences(str2);

//     for (let key in map1) {
//         if (map1[key] !== map2[key]) return false;
//     }
//     return true;
// }

// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "world"));   // Output: false
// 3️⃣ Find the First Non-Repeating Character
// javascript
// Copy
// Edit
// function firstUniqueChar(str) {
//     let map = countOccurrences(str);

//     for (let char of str) {
//         if (map[char] === 1) return char;
//     }
//     return null;
// }

// console.log(firstUniqueChar("aabbcde")); // Output: "c"
// console.log(firstUniqueChar("aabb"));    // Output: null
// 4️⃣ Check if a String is a Palindrome (Ignoring Duplicates)
// javascript
// Copy
// Edit
// function canFormPalindrome(str) {
//     let map = countOccurrences(str);
//     let oddCount = 0;

//     for (let key in map) {
//         if (map[key] % 2 !== 0) oddCount++;
//     }
    
//     return oddCount <= 1;
// }

// console.log(canFormPalindrome("civic")); // Output: true
// console.log(canFormPalindrome("hello")); // Output: false
// 5️⃣ Find Unique Characters in a String
// javascript
// Copy
// Edit
// function findUniqueCharacters(str) {
//     let map = countOccurrences(str);
//     return Object.keys(map).filter(char => map[char] === 1);
// }

// console.log(findUniqueCharacters("aabbcde")); // Output: ["c", "d", "e"]
// 6️⃣ Check if Two Strings Have the Same Character Set
// javascript
// Copy
// Edit
// function sameCharSet(str1, str2) {
//     return new Set(str1).size === new Set(str2).size;
// }

// console.log(sameCharSet("abcde", "ebdac")); // Output: true
// console.log(sameCharSet("abc", "abcd"));    // Output: false
// 7️⃣ Group Words with Same Character Frequency
// javascript
// Copy
// Edit
// function groupByFrequency(words) {
//     let map = new Map();

//     for (let word of words) {
//         let key = Object.values(countOccurrences(word)).sort().toString();
//         if (!map.has(key)) map.set(key, []);
//         map.get(key).push(word);
//     }
    
//     return Array.from(map.values());
// }

// console.log(groupByFrequency(["abb", "bba", "bab", "xyz"]));
// // Output: [ [ 'abb', 'bba', 'bab' ], [ 'xyz' ] ]
// 8️⃣ Find the Most Frequent Word in a Sentence
// javascript
// Copy
// Edit
// function mostFrequentWord(sentence) {
//     let words = sentence.match(/\b\w+\b/g); // Extract words
//     let map = countOccurrences(words);

//     let maxWord = '', maxCount = 0;
//     for (let key in map) {
//         if (map[key] > maxCount) {
//             maxCount = map[key];
//             maxWord = key;
//         }
//     }
//     return maxWord;
// }

// console.log(mostFrequentWord("This is a test. This test is easy.")); 
// // Output: "test"
// 9️⃣ Count Occurrences of Each Digit in a Number
// javascript
// Copy
// Edit
// function countDigits(num) {
//     return countOccurrences(num.toString());
// }

// console.log(countDigits(1122334455)); 
// // Output: { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2 }
// 🔟 Find Minimum Character Changes to Make Two Strings Identical
// javascript
// Copy
// Edit
// function minChangesToMatch(str1, str2) {
//     let map1 = countOccurrences(str1);
//     let map2 = countOccurrences(str2);
    
//     let changes = 0;
//     for (let key in map1) {
//         changes += Math.abs((map1[key] || 0) - (map2[key] || 0));
//     }
//     return changes;
// }

// console.log(minChangesToMatch("abc", "bcd")); // Output: 2
// 📌 Summary for Interviews
// Problem Type	Solution Approach
// Character Frequency	Use a hash map to store occurrences
// Finding Unique Elements	Traverse map and filter values with count === 1
// Anagrams	Compare frequency maps of both words
// Palindromes	Ensure at most one odd count in frequency map
// Grouping Words	Use a map with sorted frequency counts as keys
// Word Frequency	Use \b\w+\b regex to split words and count occurrences
// 📝 Quick Notes to Memorize
// Use hash map (object or Map) for counting efficiently.
// Time Complexity is O(n), better than O(n²) with loops.
// Can solve problems like duplicates, unique characters, anagrams, palindromes.
// Use Object.values(map).sort().toString() for grouping words.
// Regex \b\w+\b extracts words efficiently from a string.
// 💡 🚀 Mastering these patterns will help you in many JavaScript interviews! Let me know if you need explanations for any of these.

// You said:
//  let map = countOccurrences(str);?
// countOccurrences
// what does it means
// ChatGPT said:
// The line:

// javascript
// Copy
// Edit
// let map = countOccurrences(str);
// means that we are calling a function named countOccurrences and storing its return value in the variable map.

// Breaking it Down:
// countOccurrences(str)

// This means we are calling a function named countOccurrences and passing the string str as an argument.
// This function is expected to count the occurrences of characters (or elements) in str.
// let map = ...

// This means the return value of countOccurrences(str) (which is an object or a map) will be stored in the variable map.
// Example Implementation of countOccurrences
// javascript
// Copy
// Edit
// function countOccurrences(str) {
//     let map = {}; // Create an empty object

//     for (let char of str) { // Loop through each character in the string
//         map[char] = (map[char] || 0) + 1; // Increment count or initialize to 1
//     }

//     return map; // Return the frequency map
// }

// let str = "apple";
// let map = countOccurrences(str);
// console.log(map); // Output: { a: 1, p: 2, l: 1, e: 1 }
// How It Works
// countOccurrences("apple") is called.
// Inside the function:
// { a: 1, p: 2, l: 1, e: 1 } is created.
// The returned object is stored in map.
// We can now use map to check how many times each character appears.
// Why Use countOccurrences(str)?
// It simplifies frequency counting.
// It can be reused in multiple problems like finding duplicates, checking anagrams, etc.
// If countOccurrences is not defined in your code, you'll get a ReferenceError!
// Make sure the function is declared before using it. 🚀