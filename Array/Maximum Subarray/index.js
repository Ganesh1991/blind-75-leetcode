/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 
*/

function findTheLargestSum(nums) {
  if (nums.length === 1) return nums[0];
  let currSum = 0;
  let maxSum = nums[0];
  for (let index = 0; index < nums.length; index++) {
    if (currSum < 0) currSum = 0;
    currSum = currSum + nums[index];
    console.log("🚀 ~ findTheLargestSum ~ nums[index]:", nums[index]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

console.log(
  "findTheLargestSum for an input [-2,1,-3,4,-1,2,1,-5,4]  <----> ",
  findTheLargestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);

console.log(
  "findTheLargestSum for an input [5,4,-1,7,8]  <----> ",
  findTheLargestSum([5, 4, -1, 7, 8])
);

console.log(
  "findTheLargestSum for an input [1]  <----> ",
  findTheLargestSum([1])
);
