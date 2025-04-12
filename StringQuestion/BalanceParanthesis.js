// 👉 कोड कैसे काम कर रहा है?
// 1️⃣ Stack (stk) बनाते हैं, जिससे हम parentheses को Last In, First Out (LIFO) के हिसाब से handle कर सकें।

// 2️⃣ Loop चलाते हैं str.length तक

// अगर कोई open bracket ((, {, [) मिलता है, तो उसे stack में push कर देते हैं।
// अगर कोई close bracket (), }, ]) मिलता है, तो
// Stack का टॉप (stk[stk.length - 1]) चेक करते हैं, अगर matching bracket है, तो pop() कर देते हैं।
// अगर match नहीं करता या stack पहले से खाली है, तो यह unbalanced है, इसलिए false return कर देते हैं।
// 3️⃣ Loop खत्म होने के बाद:

// अगर stack पूरी तरह खाली हो चुका है, तो इसका मतलब सभी brackets match हो चुके हैं, इसलिए true return करेंगे।
// अगर stack में कुछ बचा है, तो इसका मतलब कुछ open brackets का कोई closing pair नहीं मिला, इसलिए false return करेंगे।

// stk[stk.length - 1] का उपयोग Stack के Top Element को Access करने के लिए किया जाता है।
// यह बिना pop() किए सिर्फ Last Element देता है, ताकि हम उसे Current Character से Compare कर सकें।
// Balanced Parentheses चेक करने के लिए ज़रूरी है कि हर Close Bracket का Top Open Bracket से Match हो।
// अगर कोई Mismatch होता है, तो तुरंत false return कर देते हैं।



// function balancedParanthesis(str){
//     let stk = []
//     for(let i=0; i<str.length; i++){
//         if(str[i] === '(' || str[i] === '[' || str[i] === '{'){

//             stk.push(str[i])
//         }else{
//             if(stk.length > 0  && ((stk[stk.length-1] === '(' && str[i] === ')' ) || (stk[stk.length-1] === '{' && str[i] === '}') || (stk[stk.length-1] === '[' && str[i] === ']' ))){
//                 stk.pop()
//             }else{
//                 return false;
//             }
//         }

//     }
//     if(stk.length === 0){
//         return true
//     }

// }




// let s = "[(])";
// // Function call
// console.log(balancedParanthesis(s) ? "true" : "false");






// function balancedParanthesis(s) {
//     let stk = [];
//     let bracketMap = { ')': '(', '}': '{', ']': '[' };

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//             stk.push(s[i]); // Push opening brackets
//         } else {
//             if (stk.length === 0 || stk.pop() !== bracketMap[s[i]]) {
//                 return false; // Unmatched closing bracket
//             }
//         }
//     }

//     return stk.length === 0;
// }

// console.log(balancedParanthesis("[{()}]") ? "true" : "false"); // ✅ true
// console.log(balancedParanthesis("[{(})]") ? "true" : "false"); // ❌ false
// console.log(balancedParanthesis("(([]))") ? "true" : "false"); // ✅ true
// console.log(balancedParanthesis("(([]") ? "true" : "false");   // ❌ false


// Use a stack to handle the Last-In-First-Out (LIFO) nature of brackets.
// Push open brackets and pop when matched.
// If a closing bracket doesn’t match, return false.
// If the stack is empty at the end, return true.


function balancedParenthesis(s) {
    let stk = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stk.push(s[i]);
        } else {
            if (stk.length === 0) {
                return false;
            }
            let last = stk[stk.length - 1];
            if ((last === '(' && s[i] === ')') ||
                (last === '{' && s[i] === '}') ||
                (last === '[' && s[i] === ']')) {
                stk.pop();
            } else {
                return false;
            }
        }
    }
    return stk.length === 0;
}

// Test cases
console.log(balancedParenthesis("[(])") ? "true" : "false"); // false
console.log(balancedParenthesis("{[()]}") ? "true" : "false"); // true
console.log(balancedParenthesis("{[(])}") ? "true" : "false"); // false
console.log(balancedParenthesis("()[]{}") ? "true" : "false"); // true
