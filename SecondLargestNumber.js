//first sort the array 
// how to sort the array? 
// psudo code
// iterate i=0...
// iterate j=i+1... why? we will iterate between two element 1at to second and so on..
// check condition if (A[i] > A[j] )then swap it.
// then find arr.length-2




function secondLargest(A){
    for(let i=0; i<A.length; i++){
        for(let j=i+1; j<A.length; j++){
            if(A[i] > A[j]){
                [A[i],A[j]] = [A[j],A[i]]
            }
        }
    }
    console.log(A[arr.length-3])
   

}

let arr = [100,23,84,54,5,6,7,8889,9];
secondLargest(arr)
