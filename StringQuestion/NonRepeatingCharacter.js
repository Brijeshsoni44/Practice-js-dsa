function NonRepeatingCharacter(char){
    for(let i=0; i<char.length; i++){
        let duplicacy = false;
        for(let j=0; j<char.length; j++){
            if( i !== j && char[i] === char[j]){
                duplicacy = true;
                break;
            }
        }
        if(!duplicacy){
            return char[i]
        }
    }
    return null;

}

let char = 'aabbcddeeff'
console.log(NonRepeatingCharacter(char))