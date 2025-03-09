//Approach
// Declare the character stack
// Now traverse the string exp
// If the current character is starting brackets ('(' or '{' or '[') then push ot to stack
// if the current character is closing brackets (')' or '}' or ']') then pop from the stack and if the popped character is matching starting bracket then fine
// else brackets are not balanced
//After complete traversal if some brackets are left in the stack then expression is not balanced else balanced

function balancedParanthesis(str){
    stk = [];
let n = str.length;
for(let i=0; i<n; i++){
    if(str[i] === '(' || str[i] === '{' || str[i] === '['){
        stk.push(str[i])
    }else
        if(stk.length > 0 && ((stk[stk.length - 1] === '(' && s[i] === ')')  ||
        (stk[stk.length - 1] === '{' && s[i] === '}') ||
        (stk[stk.length - 1] === '[' && s[i] === ']'))) {
            stk.pop();
        }else{
            return false
        }

}
return stk.length === 0;

}

let s = "[()]{}{[()()]()}";

// Function call
console.log(balancedParanthesis(s) ? "true" : "false");