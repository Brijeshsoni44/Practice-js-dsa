// function removeDuplicacy(arr){
//     let result= [];
//     for(let i=0; i<arr.length; i++){
//         let isDuplicacy = false;
//         for(let j=0; j<result.length; j++){
//             if(arr[i] === result[j]){
//                 isDuplicacy = true;
//                 break;
//             }
//         }
//         if(!isDuplicacy){
//             result.push(arr[i]);
//         }
//     }
//     return result
    
// }



let arr = [1,2,3,45,5,6,6,7,8]

const result = [...new Set(arr)]
console.log(result)

// console.log(removeDuplicacy(arr))



