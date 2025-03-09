
function reverseArr(A){
    let left = 0;
    let right = A.length-1;
    while(left < right){
        [A[left],A[right]] = [A[right],A[left]]
        left++;
        right--;
    }
    console.log(A)


    
}

let arr = [1,2,3,4,5,6,43,5,6,6,77,88,9,9]
reverseArr(arr)


// swap two variable without using 3rd variables

function swap(x,y){
    [x,y] = [y,x];
    console.log(x,y)

}

swap(a=20,b=40)