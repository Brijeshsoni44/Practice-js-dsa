function palindromeStr(str){
    let checkPalindrome = ''
   for(let i=str.length-1; i>=0; i--){
    checkPalindrome += str[i]
   }
   if(checkPalindrome === str){
    console.log("YES it's palindrome")
   }else{
    console.log("Not a palindrome")
   }

}

let str = 'namanwe'
palindromeStr(str)


function palindromeStr(str) {
    let checkPalindrome = ""; // Initialize an empty string

    for (let i = str.length - 1; i >= 0; i--) {
        checkPalindrome += str[i]; // Reverse the string
    }

    if (checkPalindrome === str) {
        console.log("YES, it's a palindrome");
    } else {
        console.log("Not a palindrome");
    }
}

let str1 = "naman";
let str2 = "hello";

palindromeStr(str1); // Output: YES, it's a palindrome
palindromeStr(str2); // Output: Not a palindrome
