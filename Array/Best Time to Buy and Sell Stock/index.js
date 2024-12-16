/*

121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function getMaximize(array) {
  let maxProfit = 0;
  for (let index = 0; index < array.length; index++) {
    for (let j = index + 1; j < array.length; j++) {
      const profit = array[j] - array[index];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log("getMaximize <------>", getMaximize([7, 1, 5, 3, 6, 4])); // 5

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

// Solution 3 - Using Two Pointers
function getMaximizeByPointers(array) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;
  while (right < array.length) {
    maxProfit = Math.max(maxProfit, array[right] - array[left]);
    if (array[right] < array[left]) left = right;
    right++;
  }
  return maxProfit;
}

console.log(
  "getMaximizeByPointers <------>",
  getMaximizeByPointers([7, 1, 5, 3, 6, 4, 20])
);
