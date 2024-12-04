// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function twoSum(inputArr, target) {
  for (let index = 0; index < array.length; index++) {
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] + array[j] === target) {
        return [index, j];
      }
    }
  }
}

// Solution 2 - Using Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSumbyMap(inputArr, target) {
  let map = new Map();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const diff = target - element;
    if (map.get(diff)) {
      return [map.get(diff), index];
    }
    map.set(element, index);
  }
}

// Solution 3 - Using Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

function twoSumbyPointers(inputArr, target) {
  let left = 0;
  let right = inputArr.length - 1;
  let sortedArr = inputArr.sort((a, b) => a - b);

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
// big array
const array = [2, 7, 11, 15, 16, 20, 8];
console.log("twoSum <-----> ", twoSum(array, 9));
console.log("twoSumbyMap <-----> ", twoSumbyMap(array, 9));
console.log("twoSumbyPointers <-----> ", twoSumbyPointers(array, 9));
