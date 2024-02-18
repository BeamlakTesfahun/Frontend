// Rewrite the code below to use array destructuring instead of assigning each value to a variable.

let item = ["Egg", 24, 2];

// let itemName = item[0];
// let price = item[1];
// let quantity = item[2];

const { itemName, price, quantity } = item;

/* 
Write the destructuring assignment that reads:
 - 'name' property into the variable 'name'.
 - 'gender' property into the variable 'gender'.
 - 'age' property into the variable 'age'.
*/
let user = {
  name: "John",
  gender: "Male",
  age: 30,
};

const { name, gender, age } = user;

/*
Extract the first fruit from the array and assign it to the variable 'firstFruit'.
Use javascript operator to collect the rest of the fruits and assign them to the variable 'otherFruits'.
*/
const fruits = ["apple", "banana", "orange", "mango", "grape"];

let [firstFruit, ...otherFruits] = fruits;
/*
given an array of product objects. Your task is to filter the products based on their 
category and create two separate arrays: one containing 'electronicsProducts' and the 
other containing 'groceriesProducts'.
*/
const products = [
  { name: "TV", category: "electronics", price: 500 },
  { name: "Laptop", category: "electronics", price: 1000 },
  { name: "Bananas", category: "groceries", price: 2 },
  { name: "Apples", category: "groceries", price: 3 },
  { name: "Phone", category: "electronics", price: 700 },
];

const electronicsProducts = products.filter((product) => {
  return product.category == "electronics";
});
const groceriesProducts = products.filter((product) => {
  return product.category == "groceries";
});

/*
   Using the above products array, create a new array containing only the names of the products.
*/
const productNames = products.map((product) => {
  return product.name;
});
/*
given an array of names. Your task is to create a new array that includes all the names from the original array plus an additional name. Add a new names, "David" and "John" to the end of the new array.
*/

const names = ["Alice", "Bob", "Charlie"];

const updatedNames = [...names, "David", "John"];
