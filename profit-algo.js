//code from https://www.geeksforgeeks.org/stock-buy-sell/
function maxProfit(prices, N) {
  let n = N;
  let cost = 0;
  let maxCost = 0;

  if (n == 0) {
    return 0;
  }

  // Store the first element of array
  // // in a variable
  // let min_price = prices[0];

  let mini = Math.min(...prices)

  for (let i = 0; i < n; i++) {
    // Now compare first element with all
    // the element of array and find the
    // minimum element
    // min_price = Math.min(min_price, prices[i]);

    // Since min_price is smallest element of the
    // array so subtract with every element of the
    // array and return the maxCost
    cost = prices[i] - mini;
    // console.log('Cost ', mini, cost)
    maxCost = Math.max(maxCost, cost);
    // console.log(`Max Cost ${maxCost}`)
  }
  return maxCost;
}

// Driver Code

// Stock prices on consecutive days
let prices = [7, 1, 5, 3, 6, 4];
let assessmentAlgo = [6, 0, -1, 10];
let N = prices.length;
let A = assessmentAlgo.length;
// console.log(maxProfit(prices, N));
console.log(assessmentAlgo);
console.log(maxProfit(assessmentAlgo, assessmentAlgo.length));

