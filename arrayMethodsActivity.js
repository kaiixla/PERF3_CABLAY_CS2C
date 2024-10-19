//use a concat to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
console.log("concat", arr1.concat(arr2))

//use push to add the "Kiwi" as last element
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("pushed", fruits);

//use unshift to add 4 and 5 to the beginning of the array
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("unshifted", array1);

//use pop to remove the last element from the fruits array
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.pop();
console.log(fruits1);

//use shift to remove the first element from the array
let array2 = [1, 2, 3];
array2.shift();
console.log("shifted", array2);

//use sort to sort the fruits array alphabetically
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log("sorted", fruits2);

//use slice to create new array containing a portion of the fruits array
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruitsliced = fruits3.slice([0], [2]);
console.log("sliced", fruitsliced);

//use splice to insert and remove elements in the months array
let months = ["January", "Febraury", "March", "April", "May"];
months.splice(3, 1, "June", "July", "August")
console.log("spliced", months);