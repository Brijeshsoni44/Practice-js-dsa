// Approch 
// Identify the two largest numer 
// we need to find the two largest number in the given array 
// we can iterate through the array and keep track of the two largest number 
// once we have find two largest number we simply to obtain the maximum product.
 

function maxProduct(A){
    let n = A.length;
    // console.log(A);
    let max1 = -Infinity;
    let max2 = -Infinity;
    for(let i=0; i<n; i++){
        if(A[i] > max1){
            max2 = max1;
            max1 = A[i];
        }else if(A[i] > max2){
            max2 = A[i];
        }
    }
    console.log(max1 * max2)
 


}
let arr = [1, 20, 3, 10, 5];
maxProduct(arr);