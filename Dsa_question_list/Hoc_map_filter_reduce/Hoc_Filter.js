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


  // const result = data.employees.filter((item) => item.department === 'Sales')
  // console.log("resul",result)

//   1. Filter employees with a salary greater than $50,000
// Question:
// Write a function to return an array of employees whose salary is greater than $50,000.

// const result = data.employees.filter((item) => item.salary > 50000)
// console.log(result);
// Answer:
// The filter() method is used to select elements that satisfy a specific condition (salary > 50,000).


// 2. Filter employees in the "Sales" department
// Question:
// Return an array of employees working in the "Sales" department.

// const result = data.employees.filter((item) => item.department === 'Sales')
// console.log(result)


// 3. Filter employees younger than 30 years old
// Question:
// Write a function to return employees whose age is less than 30
// const result = data.employees.filter((item) => item.age < 30)
// console.log(result)

// 4. Filter employees with names starting with "A"
// Question:
// Return employees whose names start with the letter "A"

// const result = data.employees.filter((item) => item.name[0] === 'A');
// console.log(result)

// 5. Filter employees with a salary between $45,000 and $55,000
// Question:
// Find employees whose salaries fall in the range of $45,000 to $55,000.
// Answer:
// Use filter() with a compound condition (salary >= 45000 && salary <= 55000).

const result = data.employees.filter((item) => item.salary >= 45000 && item.salary <= 50000)
console.log(result)

