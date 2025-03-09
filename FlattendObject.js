function flattendObj(obj,prefix=''){
    let result = {}
    for(let key in obj){
        let newKey = prefix ? prefix  + '.' +  key : key
        if(typeof obj[key] === 'object' && obj[key] !== null){
            Object.assign(result,flattendObj(obj[key],newKey))
        }else{
            result[newKey] = obj[key];
        }
    }
    return result

}


const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattendObj(obj))




// Handle with other  edge cases

function flattendObj(obj, prefix = '') {
    let result = {};
    for (let key in obj) {
        let newKey = prefix ? prefix + '.' + key : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(result, flattendObj(obj[key], newKey));
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

// Testing with edge cases:
console.log(flattendObj({}));  // Empty object case
console.log(flattendObj({ a: 1, b: { c: 2, d: { e: 3 } } })); // Nested object
console.log(flattendObj({ a: null, b: { c: null, d: 3 } })); // Handling null values
console.log(flattendObj({ a: [1, 2, 3], b: { c: [4, 5] } })); // Array as value
console.log(flattendObj({ a: undefined, b: { c: 2, d: undefined } })); // Undefined values
console.log(flattendObj({ a: function() { return 'hello'; }, b: { c: 2 } })); // Function as value
