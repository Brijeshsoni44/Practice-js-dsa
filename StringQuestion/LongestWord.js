function LongestWord(word){
   let longset = '';
   let currentWord = "";
    for(let i=0; i<word.length; i++){
        if(i < word.length && word[i] !== ' '){
            currentWord += word[i]
        }else{
            if(currentWord.length > longset.length){
                longset = currentWord

            }
            currentWord = ""
        }
       
    }
    console.log(longset)
   
    

}

let words = "My Name is Brijesh kumar soni"
LongestWord(words)



function longestWord(words) {
    let currentWord = '';
    let longest = '';
 
    for (let i = 0; i <= words.length; i++) { // Loop until `i <= words.length` to handle last word
        if (i < words.length && words[i] !== ' ') {
            currentWord += words[i]; // Build the current word
        } else {
            if (currentWord.length > longest.length) {
                longest = currentWord; // Update the longest word if found
            }
            currentWord = ''; // Reset for next word
        }
    }
 
    console.log("Longest Word:", longest);
 }
 
 let word = "Try programiz pro";
 longestWord(word);
 