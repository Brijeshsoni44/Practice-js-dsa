function MinimumNumber(A){
    let min = A[0];
    for(let i=0; i<A.length; i++){
        if(A[i] < min){
            min = A[i]
        }
    }
    console.log(min)

}

let arr = [2,3,4,5,6,677,8,8,9,9,90,1]
MinimumNumber(arr)