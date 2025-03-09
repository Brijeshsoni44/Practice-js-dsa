function minNumber(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
            arr[i] = min
        }
    }
    return min

}

let arr = [1,2,4,5,6,7,8,89,9,90,0]
console.log(minNumber(arr))