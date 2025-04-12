function getAllSubarrays(arr) {
    let result = [];
  
    for (let s = 0; s < arr.length; s++) {
      for (let e = s; e < arr.length; e++) {
        let subarray = [];
        for (let i = s; i <= e; i++) {
          subarray.push(arr[i]);
        }
        result.push(subarray);
      }
    }
  
    return result;
  }
  
  // Example
  const arr = [1, 2, 3];
  console.log(getAllSubarrays(arr));
  



// function printAllSubarrays(arr){
//     for(let s=0; s<arr.length; s++){
//         for(let e=s; e<arr.length; e++){
//             let subarray = ''
//             for(let i=s; i<= e; i++){
//                 subarray += arr[i]
//             }
//             console.log([subarray])
//         }
//     }
// }



// const arr = [1, 2, 3];
// printAllSubarrays(arr);


// function printAllSubarrays(arr) {
//     for (let s = 0; s < arr.length; s++) {
//       for (let e = s; e < arr.length; e++) {
//         let subarray = '';
//         for (let i = s; i <= e; i++) {
//           subarray += arr[i] + ' ';
//         }
//         console.log(`[ ${subarray.trim()} ]`);
//       }
//     }
//   }
  
//   // Example
//   const arr = [1, 2, 3];
//   printAllSubarrays(arr);
  