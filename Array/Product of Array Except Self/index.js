/*
238. Product of Array Except Self
Medium
Topics
Companies
Hint
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

function productExceptSelf(inputArr) {
  let result = [];
  inputArr.forEach((element) => {
    const product = inputArr.reduce((acc, item) => {
      if (item !== element) {
        return acc * item;
      }
      return acc;
    }, 1);
    result.push(product);
  });
  return result;
}

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)

function productExceptSelfByPointers(inputArr) {
  let left = 1,
    right = 1,
    result = [];

  for (let index = 0; index < inputArr.length; index++) {
    result[index] = left;
    left = left * inputArr[index];
  }

  for (let index = inputArr.length - 1; index >= 0; index--) {
    result[index] = right * result[index];
    right = right * inputArr[index];
  }
  return result;
}

console.log(
  "productExceptSelfByPointers Output against Input [1,2,3,4]----> ",
  productExceptSelfByPointers([1, 2, 3, 4])
);

console.log(
  "productExceptSelfByPointers Output against Input [-1,1,0,-3,3]----> ",
  productExceptSelfByPointers([-1, 1, 0, -3, 3])
);

var productExceptSelf = function (nums) {
  let res = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = right * res[i];
    right = right * nums[i];
  }
  return res;
};

console.log(
  "productExceptSelf Output against Input [1,2,3,4]----> ",
  productExceptSelf([1, 2, 3, 4])
);

console.log(
  "productExceptSelf Output against Input [-1,1,0,-3,3]----> ",
  productExceptSelf([-1, 1, 0, -3, 3])
);
