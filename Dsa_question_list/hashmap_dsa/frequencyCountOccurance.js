function countFrequencyObj(str){
   const map = new Map();
   for (let i = 0; i < str.length; i++) {
    let char = str[i];
    map[char] = (map[char] || 0) + 1;
}
console.log(map)
    
}

let Input= "apple"

countFrequencyObj(Input)

