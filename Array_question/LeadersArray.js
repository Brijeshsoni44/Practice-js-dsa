// What is a Leader?
// An element is a leader if no element to its right is greater than it.
// 🔍 Dry Run:
// Let’s look at the array from right to left:
// 2: no elements to right → leader ✅
// 5: 5 > 2 → leader ✅
// 3: 3 < 5 → ❌
// 4: 4 < 5 → ❌
// 17: 17 > 5 → leader ✅
// 16: 16 < 17 → ❌

// ✅ Final Leaders (in order of appearance): [17, 5, 2]

function findLeadersNaive(arr) {
    let n = arr.length;
    let leaders = [];
  
    for (let i = 0; i < n; i++) {
      let isLeader = true;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] > arr[i]) {
          isLeader = false;
          break;
        }
      }
  
      if (isLeader) {
        leaders.push(arr[i]);
      }
    }
  
    return leaders;
  }
  
  // Test
  const input = [16, 17, 4, 3, 5, 2];
  console.log(findLeadersNaive(input)); // Output: [17, 5, 2]
  