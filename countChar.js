function stringCheck(A){
    let n = A.length;
        let cntStr=0;
        let cntNum = 0;
        for(let i=0; i<n; i++){
            if(!isNaN(A[i])){
                cntStr++;
                // console.log(A[i]);
            }
            if(isNaN(A[i])){
                cntNum++;
                //  console.log(A[i]);
                // console.log(cnt++);
                // cnt++
            }
        }
        if(cntStr > cntNum){
            console.log(cntStr)
        }else{
           console.log(cntNum)
        } 
        
}
stringCheck("HelloUser1")
stringCheck("M12345")