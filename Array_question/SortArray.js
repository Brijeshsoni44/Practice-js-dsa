function sortArray(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
               [arr[i], arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr

}


let arr = [1,2,4,5,3,5,6,7,7,2,56,12,54,12,11,13]
//using inbuilt method
// const result = arr.sort((a,b) => b-a)
// console.log(result)
// const result1 = arr.sort((a,b) => b-a)
// console.log(result1)


console.log(sortArray(arr))


