function maxNumber(arr){
    let max = arr[0]
  for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
        arr[i] = max
    }
  }
  console.log(max)

}

let arr = [23,2,42,4,5,6,67,7,77,79]
maxNumber(arr)