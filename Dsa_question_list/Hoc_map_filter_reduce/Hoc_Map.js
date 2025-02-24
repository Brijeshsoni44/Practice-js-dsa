const data = {
    employees: [
      { name: "Alice", age: 30, salary: 50000, department: "Sales" },
      { name: "Bob", age: 25, salary: 45000, department: "Marketing" },
      { name: "Charlie", age: 35, salary: 60000, department: "Engineering" },
      { name: "David", age: 28, salary: 55000, department: "Sales" },
      { name: "Eve", age: 32, salary: 48000, department: "Marketing" },
      { name: "Frank", age: 27, salary: 52000, department: "Engineering" },
      { name: "Grace", age: 31, salary: 58000, department: "Sales" },
      { name: "Henry", age: 29, salary: 49000, department: "Marketing" }
    ]
  };

// 1. Create an array of employee names.
// Question:


// Write a function to return an array of all employee names from the given data.


// const names = data.employees.map((item) => {
//     return item.name
// })
// console.log(names)


// 2. Increment all employee salaries by 10%.
// Question:
// Write a function that returns a new array of updated salaries, where each salary is increased by 10%.
// Answer:
// Explanation:
// We use map() to calculate a 10% increase for each salary by multiplying the existing salary by 1.1.
// const updatesSalary = data.employees.map((item) => item.salary * 1.1)
// console.log(updatesSalary)


// 3. Extract names and ages into an array of objects
// Question: Return a new array of objects where each object contains the name and age of the employees.

// const result = data.employees.map((item) => ({name:item.name,age:item.age}));
// console.log(result)
// Explanation:
// We use map() to transform each employee object into a new object containing only the name and age properties.
// Code:
// javascript
// Copy code
// const namesAndAges = data.employees.map((emp) => ({ name: emp.name, age: emp.age }));
// console.log(namesAndAges);
// Steps:

// For each employee, create a new object { name: emp.name, age: emp.age }.
// map() returns a new array containing these transformed objects.

// 4. Add a tax key (15% of salary) to each employee object
// Question: Write a function to add a new tax property to each employee object. The tax should be calculated as 15% of their salary.
// Answer:
// Explanation:

// const result = data.employees.map((item) => ({...item, tax:item.salary * 0.15}));
// console.log(result)


// 9. Add a rank property based on salary
// Question:
// Rank employees by salary (in descending order) and add a rank property to each employee object.
// o/p
// [
//   { name: "Charlie", salary: 60000, rank: 1 },
//   { name: "Grace", salary: 58000, rank: 2 },
//   ...
// ]