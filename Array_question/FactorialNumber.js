function factorials(n){
    if(n===0 || n===1){
        return 1;
    }
    return n * factorials(n-1)

}
console.log(factorials(5))


function factorial(a){
    let result = 1;
   for(let i=a; i>0; i--){
    result *=  i;

   }
   console.log(result)

}


factorial(10)