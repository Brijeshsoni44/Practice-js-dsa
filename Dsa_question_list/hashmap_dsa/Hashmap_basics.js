//hashmap-> Hashmap is a data structure which is used to store a key value pairs.
//common use cases of hashmap
// 1.Caching: Storing frequently accessed data for quick retrieval.   
// 2.Database Indexing: Efficiently mapping keys to records in a database.
// 3.Counting Occurrences: Tracking the frequency of elements in a collection.   
// 4.Graph Representation: Representing graphs where nodes are connected by edges.
// 5.Implementing Other Data Structures: Serving as building blocks for more complex data structures like sets, queues, and stacks.
// **In essence, HashMaps excel in scenarios where you need to: **

// 6.Quickly retrieve values based on keys.   
// 7.Ensure uniqueness of keys.
// 8.Store data with flexible key and value types.
// 9.Efficiently handle dynamic data sizes.

// const myMap = new Map();
// const data = [["Apple", 3],
// ["Banana", 2],
// ["Mango", 1],]

// for(const [key, value] of data){
//     myMap.set(key, value);
// }
// console.log(myMap)
// 

//Adding the element in array

// const numbers = [];
// for (let i = 0; i < 5; i++) {
//   numbers.push(i); 
// }

// const numberToDelete = [1,3]
// for(let i=0; i < numberToDelete.length; i++){
//     const index = numbers.indexOf(numberToDelete[i]);
//     if(index != -1){
//         numbers.splice(index,1)
//     }
// }
// console.log(numbers);

// const orders = [
//     { orderID: 1, customerName: "John Doe", status: "Pending" },
//     { orderID: 2, customerName: "Jane Smith", status: "Shipped" },
//     { orderID: 3, customerName: "David Lee", status: "Delivered" },
//     { orderID: 4, customerName: "Maria Garcia", status: "Pending" },
//     { orderID: 5, customerName: "Ahmed Khan", status: "Shipped" },
//     { orderID: 6, customerName: "Sophia Müller", status: "Delivered" },
//     { orderID: 7, customerName: "Kenichi Tanaka", status: "Pending" },
//     { orderID: 8, customerName: "Anna Kuznetsova", status: "Shipped" },
//     { orderID: 9, customerName: "Roberto Rossi", status: "Delivered" },
//     { orderID: 10, customerName: "Zhao Wei", status: "Pending" }
//   ];
  
//   const ordersByStatus = {};
  
//   for (const order of orders) {
//     const { orderID, status } = order;
  
//     if (!ordersByStatus[status]) {
//       ordersByStatus[status] = [];
//     }
  
//     ordersByStatus[status].push(orderID);
//   }
  
//   console.log(ordersByStatus);

// in set method it's remove the duplicay

// let nums = new Set([1,2,4,5,6,6,7,8,8,8,9,0])
// console.log(nums)

// let set = new Set();
// // adding the element
// set.add(10);
// set.add(20);
// set.add(30);
// console.log(set);
// // output
// // Set(3) { 10, 20, 30 }


//check value is exist

// console.log(set.has(10))
//output true

// remove element
// set.delete(10);
// set.delete(30)
// console.log(set)


//looping through set using for Each

// set.forEach((num) => console.log(num))

//using for..of loop

// for(let value of set){
//   console.log(value)
// }

// //set of size
// console.log(set.size)

//converting set to array
// let setArray = Array.from(set)
// console.log(setArray)

// remove duplicacy from array
// let arr = [1, 2, 2, 3, 4, 4, 5];


// Initialize an Object
let obj = {
    0: "Alice",
    1: "Bob",
    2: "Charlie"
};

// ✅ Loop through the object (Iterate over keys and values)


// for(key in obj){
//     console.log(obj[key]);
// }


// console.log("Original Object:");
// for (let key in obj) {
//     console.log(key, "=>", obj[key]);
// }

// // ✅ Add new key-value pairs using a loop
// for (let i = 3; i < 5; i++) {
//     obj[i] = `User${i}`;
// }
// console.log("After Adding:", obj);

// // ✅ Update values using a loop
// for (let key in obj) {
//     obj[key] += " Updated";
// }
// console.log("After Updating:", obj);

// // ✅ Delete values using a loop (removing keys with even numbers)
// for (let key in obj) {
//     if (key % 2 === 0) {
//         delete obj[key];
//     }
// }
// console.log("After Deleting Even Keys:", obj);



