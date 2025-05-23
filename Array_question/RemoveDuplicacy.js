function removeDuplicacy(arr){
    let result= [];
    for(let i=0; i<arr.length; i++){
        let isDuplicacy = false;
        for(let j=0; j<result.length; j++){
            if(arr[i] === result[j]){
                isDuplicacy = true;
                break;
            }
        }
        if(!isDuplicacy){
            result.push(arr[i]);
        }
    }
    return result
    
}



let arr = [1,2,3,45,5,6,6,7,8]

const result = [...new Set(arr)]
const res = [...new Set(arr)]
console.log(res)
console.log(result)

// console.log(removeDuplicacy(arr))


const arr1 = [1,2,3,45,5,66,6,6,5,2,3,3]
const result1 = [...new Set(arr)];
console.log("1",result1)


