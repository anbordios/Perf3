let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let name = arr1.concat(arr2);
console.log(name); //  [ "Cecile", "Lone", "Emil", "Tobias", "Linus" ];

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ];

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); // [ 4, 5, 1, 2, 3 ];

fruits.pop();
console.log(fruits); // [ "Banana", "Orange", "Apple", "Mango" ];

let array2 = [1, 2, 3];
array2.shift();
console.log(array2); // [ 2, 3 ];

fruits.sort();
console.log(fruits);

let fruitSliced = fruits.slice(0, 2);
console.log(fruitSliced); // [ "Banana", "Orange" ]

let months = ["January", "September", "December"];
months.splice(0, 1, "July");
console.log(months); // [ "July", "January", "September", "December" ];
months.splice(0, 2);
console.log(months); // [ "December" ];
