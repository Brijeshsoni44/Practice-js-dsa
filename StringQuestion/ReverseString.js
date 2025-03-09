function reverseString(str){
    let reverseStr = ''
    for(let i=str.length-1; i>=0; i--){
        reverseStr = reverseStr + str[i]
    }
    return reverseStr

}

let str = 'Brijeshkumarsoni'
console.log(reverseString(str))