var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
var no_banana = array.shift();


// 2. Sort the array in order.

var sorted = array.sort();  


// 3. Put "Kiwi" at the end of the array.
var add_kiwi = array.push("kiwi");

// 4. Remove "Apples" from the array.

var no_apples = array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
var reverse = array.reverse();

console.log(array);


you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges"

var get_oranges = array2.indexOf["Oranges"]

console.log((array2[1])[1]);


