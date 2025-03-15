/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  result = [] 
  spendEstimate = {} 
  len = transactions.length
  for (i=0;i<len;i++){
    let t = transactions[i]
    if(spendEstimate[t.category]){
      spendEstimate[t.category]=  spendEstimate[t.category] + t.price;
      // console.log(obj[t.category]);
    }
    else{
      spendEstimate[t.category] = t.price;
    }
  }
  result.push(spendEstimate)
  return result; 
}

transactions = [{
  itemName: "Pepsi",
  category: "Drink",
  price: 20,
  timestamp: "11-june-2024"
},{
  itemName: "pizza",
  category: "food",
  price: 209,
  timestamp: "26-april-2024"
},{
  itemName: "sprite",
  category: "Drink",
  price: 40,
  timestamp: "11-jan-2025"
}]
  
console.log(calculateTotalSpentByCategory(transactions))
//   module.exports = calculateTotalSpentByCategory;