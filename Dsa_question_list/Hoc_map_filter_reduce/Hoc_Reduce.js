
// The reduce() method is incredibly versatile and can be used in various scenarios where you need to transform, aggregate, or accumulate values from an array into a single value or structure. Below are detailed explanations of where and how you can use reduce() effectively, including scenarios that aren't as commonly discussed.

// 1. Data Aggregation
// Example: Summing or averaging values
// Use reduce() to calculate sums, averages, or other aggregated metrics in an array.

// Scenario:
// You want to calculate the total price of items in a shopping cart.

// javascript
// Copy code
// const cart = [
//   { item: "Shoes", price: 50 },
//   { item: "Shirt", price: 30 },
//   { item: "Pants", price: 40 }
// ];

// const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
// console.log(totalPrice); // Output: 120
// 2. Transforming Arrays to Objects
// Example: Mapping data into a different structure
// Use reduce() to convert arrays into objects with specific key-value pairs.

// Scenario:
// You want to create an object where product names are keys, and their prices are values.

// javascript
// Copy code
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 }
// ];

// const productMap = products.reduce((acc, product) => {
//   acc[product.name] = product.price;
//   return acc;
// }, {});
// console.log(productMap); // Output: { Laptop: 1000, Phone: 500 }
// 3. Removing Duplicates
// Example: Create a unique array
// Use reduce() to filter out duplicates from an array.

// Scenario:
// You have an array of numbers and want only unique values.

// javascript
// Copy code
// const numbers = [1, 2, 3, 2, 1, 4, 5, 4];

// const uniqueNumbers = numbers.reduce((acc, num) => {
//   if (!acc.includes(num)) acc.push(num);
//   return acc;
// }, []);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// 4. Flattening Nested Arrays
// Example: Reducing multi-dimensional arrays
// Use reduce() to flatten nested arrays into a single array.

// Scenario:
// You have a nested array of numbers and need a single flat array.

// javascript
// Copy code
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
// 5. Counting Occurrences
// Example: Frequency count
// Use reduce() to count occurrences of values in an array.

// Scenario:
// You have a list of words and need to count how often each word appears.

// javascript
// Copy code
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const wordCount = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});
// console.log(wordCount); // Output: { apple: 3, banana: 2, orange: 1 }
// 6. Chaining Promises
// Example: Sequencing async operations
// Use reduce() to chain promises sequentially.

// Scenario:
// You have an array of asynchronous operations and want to execute them one after another.

// javascript
// Copy code
// const tasks = [
//   () => Promise.resolve("Task 1 completed"),
//   () => Promise.resolve("Task 2 completed"),
//   () => Promise.resolve("Task 3 completed")
// ];

// tasks.reduce((promise, task) => {
//   return promise.then(() => task().then(console.log));
// }, Promise.resolve());
// Output:

// arduino
// Copy code
// Task 1 completed
// Task 2 completed
// Task 3 completed
// 7. Filtering and Transforming Simultaneously
// Example: Conditional transformation
// Use reduce() to filter and transform elements in a single pass.

// Scenario:
// You want to extract and double even numbers from an array.

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5, 6];

// const doubledEvens = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) acc.push(num * 2);
//   return acc;
// }, []);
// console.log(doubledEvens); // Output: [4, 8, 12]
// 8. Building Trees from Flat Data
// Example: Creating hierarchical data
// Use reduce() to build a tree structure from a flat array.

// Scenario:
// You have flat data representing categories and want to build a nested tree.

// javascript
// Copy code
// const flatData = [
//   { id: 1, name: "Parent", parentId: null },
//   { id: 2, name: "Child 1", parentId: 1 },
//   { id: 3, name: "Child 2", parentId: 1 }
// ];

// const tree = flatData.reduce((acc, item) => {
//   if (!item.parentId) {
//     acc.push({ ...item, children: [] });
//   } else {
//     const parent = acc.find(parent => parent.id === item.parentId);
//     parent.children.push(item);
//   }
//   return acc;
// }, []);
// console.log(tree);
// 9. Partitioning Arrays
// Example: Splitting based on conditions
// Use reduce() to split an array into two groups.

// Scenario:
// Separate students into those who passed and those who failed based on scores.

// javascript
// Copy code


// const partitioned = students.reduce(
//   (acc, student) => {
//     student.score >= 50 ? acc.pass.push(student) : acc.fail.push(student);
//     return acc;
//   },
//   { pass: [], fail: [] }
// );
// console.log(partitioned);
// // Output: { pass: [...], fail: [...] }
// 10. Combining Multiple Arrays
// Example: Merging arrays of objects
// Use reduce() to merge multiple arrays into one.


//   const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const wordCount = words.reduce((acc, word, index) => {
//   console.log(`Iteration ${index + 1}`);
//   console.log("Before update:", acc);
//   console.log(`Processing word: "${word}"`);

//   acc[word] = (acc[word] || 0) + 1;

//   console.log(`After update:`, acc);
//   console.log("---------------------------------");
//   return acc;
// }, {});
