function minAndMax(A){
        let n = A.lenght;
        let min = A[0];
        let max = A[0];
        let result = 0;
        for(let i=1; i<n; i++){
            if(A[i] < min) min = A[i]
            if(A[i] > max) max = A[i];
        }
        console.log(max)
        console.log(min)
        
    }
    let arr1 = [23,45,65,12,34,56,76]
    
    minAndMax(arr1)