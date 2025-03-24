// 3. Fibonacci
// Problem Explanation
// The Fibonacci sequence is defined as:

// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n ≥ 2
// Example:

// yaml
// Copy
// Edit
// Fibonacci(6) = 0, 1, 1, 2, 3, 5, 8  → Output: 8
// Solution Approach
// Base Case: If n is 0 or 1, return n.
// Recursive Case: Compute F(n-1) + F(n-2).
// Issue: The recursive solution has exponential complexity O(2^n).
// Optimization: Use memoization to store computed values.





function fib(n){
    if(n <=1){
        return n
    }
    return fib(n-1) + fib(n-2)

}


console.log(fib(6))