// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// function removeDuplicacy(A){
//     let n = A.length;
//     // let result = A.filter((item, index) => A.indexOf(item) === index);
//     // console.log(result)
//     let updatedArr = [];
//     for(let i=0; i<n; i++){
        
//         for(let j=0; j<n; j++){
//             console.log("j",A[j])
//         }
//     }

// }

// let arr = [1, 2, 2, 3, 4, 4, 5]
// removeDuplicacy(arr)

// Initialize an empty unique array.
// For each element, check if it's already in unique.
// If not, add it to unique.

function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        unique.push(arr[i]);
      }
    }
    console.log(unique);
  }

let arr = [1, 2, 2, 3, 4, 4, 5,30,30,34,55,55,54,45,333,43,23]
 removeDuplicates(arr) 
