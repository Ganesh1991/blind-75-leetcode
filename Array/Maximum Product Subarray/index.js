/*

152. Maximum Product Subarray
Medium
Topics
Companies
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
*/

function maximumProductSubArray(nums) {
  let maxProduct = nums[0];
  let currentProduct = 1;
  for (let index = 0; index < nums.length; index++) {
    if (currentProduct < 0) currentProduct = 0;
    currentProduct = currentProduct * nums[index];
    maxProduct = Math.max(currentProduct, maxProduct);
  }
}

console.log(
  "🚀 ~ maximumProductSubArray ~ Input: nums = [2,3,-2,4]:",
  maximumProductSubArray([2, 3, -2, 4])
);

console.log(
  "🚀 ~ maximumProductSubArray ~ Input: nums = [-2,0,-1]:",
  maximumProductSubArray([-2, 0, -1])
);
