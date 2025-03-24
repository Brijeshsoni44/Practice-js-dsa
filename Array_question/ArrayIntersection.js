// 1. Merge Two Sorted Arrays
// Problem: Given two sorted arrays, merge them into a single sorted array.
// Example 1: mergeSortedArrays([1,3,5], [2,4,6]) → [1,2,3,4,5,6]
// Example 2: mergeSortedArrays([0,2,4,8], [1,3,5,7,9]) → [0,1,2,3,4,5,7,8,9]
// Example 3: mergeSortedArrays([], [1,2,3]) → [1,2,3]
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// 2. Find the Kth Largest Element in an Unsorted Array
// Example 1: findKthLargest([3,2,1,5,6,4], 2) → 5
// Example 2: findKthLargest([7,10,4,3,20,15], 3) → 7
// Example 3: findKthLargest([1,2,3,4,5], 1) → 5
function findKthLargest(arr, k) {
    for (let i = 0; i < k; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr[k - 1];
}

// 3. Find the Intersection of Two Arrays
// Example 1: arrayIntersection([1,2,2,1], [2,2]) → [2,2]
// Example 2: arrayIntersection([4,9,5], [9,4,9,8,4]) → [4,9]
// Example 3: arrayIntersection([1,2,3], [4,5,6]) → []
function arrayIntersection(arr1, arr2) {
    let map = {}, result = [];
    for (let num of arr1) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let num of arr2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }
    return result;
}

// 4. Write a function to flatten an array with a given depth
// Example 1: flattenArray([1,[2,[3,[4]]]], 2) → [1,2,3,[4]]
// Example 2: flattenArray([1,[2,[3,4]]], 1) → [1,2,[3,4]]
// Example 3: flattenArray([1,2,3], 2) → [1,2,3]
function flattenArray(arr, depth = 1) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flattenArray(item, depth - 1));
        } else {
            result.push(item);
        }
    }
    return result;
}

// 5. Find a Peak in a Given Array
// Example 1: findPeakElement([1,2,3,1]) → 3
// Example 2: findPeakElement([10,20,15,2,23,90,67]) → 20 or 90
// Example 3: findPeakElement([1,3,20,4,1,0]) → 20
function findPeakElement(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return arr[i];
        }
    }
    return arr[0] > arr[1] ? arr[0] : arr[arr.length - 1];
}
