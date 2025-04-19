// 4. Longest Substring Without Repeating Characters
// Problem Explanation
// Find the length of the longest substring without repeating characters.
// For example, "abcabcbb" → "abc" (length 3).

// Solution Approach
// Use the Sliding Window technique.
// Maintain a hash map (seen) to store the last occurrence of each character.
// Adjust the start pointer when a duplicate is found.
// Calculate max length of unique substrings.







function longestUniqueSubstring(str){
    let map = {};
    let start = 0;
    let maxLength = 0;
    for(let i=0; i<str.length; i++){
        if(map[str[i]] !== 'undefined' && map[str[i]] >= start){
            start = map[str[i]]  + 1
        }
        map[str[i]] = i
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength
   

}




console.log(longestUniqueSubstring("abcdeabcdeabcabcwer"));