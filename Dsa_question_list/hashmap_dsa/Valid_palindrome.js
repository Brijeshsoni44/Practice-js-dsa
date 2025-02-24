// what is the palindrome:
// Palindrome is basically when you have check all the caharacter same as backword and front so if both are same then that is called palindrome
// Yes, that's correct! A palindrome is a string that reads the same backward as it does forward. For example:
// "madam", "racecar", and "A man, a plan, a canal: Panama" are all palindromes.
// However, "hello" and "world" are not.

//Approch

// Loop from the start and end of the string simultaneously.
// Compare the characters at each index.
// If any pair of characters do not match, return false.
// If all characters match, return true.


//Approch 1

// function isPalindrome(str) {
//     let j = str.length-1;
//     let n = str.length;
//     for(let i=0; i<n/2; i++){
//        if(str[i] != str[j]){
//         return false
//        }
//        j--
//     }
//    return true

// }


// let str1 = "racecarheheheheeewwwww";
// console.log(isPalindrome(str1))

// Approch 2

function isPlindrome(str){
    let n = str.length;
    let rev = "";
    for(let i=n-1; i>=0; i--){
        rev = rev + str[i];
    }
    if(rev == str){
        return true;
    }else{
        return false;
    }

}
let str1 = "racecar";
console.log(isPlindrome(str1))

