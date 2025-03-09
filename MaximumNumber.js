function maximumNumber(A){
    let max = A[0];
    for(let i=0; i<A.length; i++){
        if(A[i] > max){
            max = A[i]
        }
    }
    console.log(max)

}

let arr = [2,3,4,5,6,67,7,88,89,99,9,0]
maximumNumber(arr)