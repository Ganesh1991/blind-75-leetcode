/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true
*/

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
function containsDuplicate(inputArr) {
  return (
    inputArr.filter((item, index) => inputArr.indexOf(item) !== index).length >
    0
  );
}

// Solution 2 Using map
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicateByMap(inputArr) {
  let map = new Map();
  for (let index = 0; index < inputArr.length; index++) {
    if (map.get(inputArr[index])) {
      return true;
    }
    map.set(inputArr[index], 1);
  }
}

// Solution 3 Using Set
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicateBySet(inputArr) {
  let set = new Set();
  for (let index = 0; index < inputArr.length; index++) {
    if (set.has(inputArr[index])) {
      return true;
    }
    set.add(inputArr[index]);
  }
}

console.log("containsDuplicate <------>", containsDuplicate([1, 2, 3, 1])); // true

console.log(
  "containsDuplicateByMap <------>",
  containsDuplicateByMap([1, 2, 3, 1])
); // true

console.log(
  "containsDuplicateBySet <------>",
  containsDuplicateBySet([1, 2, 3, 1])
); // true
