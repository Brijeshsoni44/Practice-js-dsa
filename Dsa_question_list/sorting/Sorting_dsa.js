// Q.1
const data = {
    "employees": [
      { "name": "Alice", "age": 30, "salary": 50000, "department": "Sales" },
      { "name": "Bob", "age": 25, "salary": 45000, "department": "Marketing" },
      { "name": "Charlie", "age": 35, "salary": 60000, "department": "Engineering" },
      { "name": "David", "age": 28, "salary": 55000, "department": "Sales" },
      { "name": "Eve", "age": 32, "salary": 48000, "department": "Marketing" },
      { "name": "Frank", "age": 27, "salary": 52000, "department": "Engineering" },
      { "name": "Grace", "age": 31, "salary": 58000, "department": "Sales" },
      { "name": "Henry", "age": 29, "salary": 49000, "department": "Marketing" }
    ]
  }

//   1. Sort employees by age in ascending order.
// output==> 35,32,31,30,29,28,27...
// const result = data?.employees.sort((a,b) => b.age-a.age);
// console.log(result.map((item) => console.log(item.age)))

// 2/  Find the average salary of all employees.
// explian sum of all salary/total number of employees
// const result = data.employees.reduce((acc,item) => acc + item.salary,0)/data.employees.length
// console.log(result)

// 3. Filter out employees who are older than 30 years.
// const result = data.employees.filter((item) => item.age > 30)
// console.log(result)

// 4. Find the employee with the highest salary.
// const result = data.employees.sort((a,b) => b.salary-a.salary)[0];
// console.log(result)
// explain==> sort the salary in ascending order and get the last element of the array
// explain==> sort the salary in descending order and get the first element of the array
// console.log(result)


// 8. Add a new key isSenior to each employee, marking employees older than 30 as true.

// const updatedEmployees = data.employees.map((emp) => ({
//   ...emp,
//   isSenior: emp.age > 30
// }));
// console.log(updatedEmployees);

// const updtedData = data.employees.map((item) => ({
//   ...item,
//   isSenor: item.age > 40
// }))
// console.log(updtedData)

// 9. Sort employees by name alphabetically.
// const result = data.employees.sort((a,b)=>{ a.name.localeCompare(b.name)})
// console.log(result)

// 10. Count the number of employees in each department.

const result = data.employees.reduce((counts,item) => {
  console.log(counts[item.department] = counts[item.department] + 1 || 1);
  return counts;
})

console.log(result)