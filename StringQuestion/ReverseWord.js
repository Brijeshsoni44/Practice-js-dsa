// function reverseWord(words){
//     let currentWord = '';
//     let reverseWord = '';
//     let word = [];
//     for(let i=0; i<words.length; i++){
//         if(i < words.length && words[i] !== ' '){
//             currentWord  += words[i];
//         }else{
//             if(currentWord.length > 0){
//                 word.push(currentWord);
//                 currentWord = ''
//             }
//         }
//     }
    
//     for(let i= word.length-1; i>=0; i--){
//         reverseWord += word[i];
//         if (i > 0) {reverseWord += " "};
//     }
//     console.log("reverse",reverseWord)

// }


// let words = "My Name is Brijesh soni"
// reverseWord(words)


// Algorithm (Step-by-Step)
// Initialize an empty list (words[]) to store words.
// Traverse the input string:
// If the character is not a space, add it to currentWord.
// If a space is found, push currentWord to words[] and reset currentWord.
// Push the last word if not empty.
// Reverse the words[] and construct the final string.
// Return the reversed sentence.




function reverseWord(words) {
    let currentWord = '';
    let reverseWord = '';
    let word = [];

    // Step 1: Extract words manually
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== ' ') {
            currentWord += words[i]; // Build the current word
        } else {
            if (currentWord.length > 0) {
                word.push(currentWord); // Store word in the array
                currentWord = ''; // Reset for the next word
            }
        }
    }

    // Store the last word (important fix)
    if (currentWord.length > 0) {
        word.push(currentWord);
    }

    // Step 2: Reverse words manually
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
        if (i > 0) reverseWord += " "; // Add space between words
    }

    console.log("Reverse:", reverseWord);
}

let words = "My Name is Brijesh soni";
reverseWord(words);
