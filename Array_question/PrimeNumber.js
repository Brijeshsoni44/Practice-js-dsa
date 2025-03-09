function PrimeNumber(x) { 
    if(x>2){
        return false
    }
    for(let i = 2; i<x.length; i++){
        if(x%i === 0){
            return true
        }else{
            return false;
        }
    }

}


console.log(PrimeNumber(20))