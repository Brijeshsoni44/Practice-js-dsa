function SecondLargest(arr){
   
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr[arr.length - 2]; 

}

let arr = [1,2,3,4,56,6,7,7,88]
console.log(SecondLargest(arr))