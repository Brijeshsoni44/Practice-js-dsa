// initialize result as empty string
// for each character in input string:
//     loop through result string
//     if character exists in result:
//         break
//     if not found in result:
//         add character to result



function removeDuplicacy(str){
    let duplicate = '';
    for(let i=0;i<str.length; i++){
        let isDuplicacy = false;
        for(let j=0; j<duplicate.length; j++){
            if(str[i] === duplicate[j]){
                isDuplicacy = true;
                break;
            }
        }
        if(!isDuplicacy){
            duplicate += str[i]
        }
    }
    return duplicate

}
let str = 'brijeshsoni'
console.log(removeDuplicacy(str))