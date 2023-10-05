// all primitive data types are used stack memory, it gives the copy of value,
// all none primitive data type used heap memory, it gives the referance of value,
// stackAndHeapMemory.js
// stack memory
let valueOne = '1234'
console.log(valueOne);
let valueTwo = valueOne;
console.log(valueTwo)
valueTwo = 4567;
console.log(valueTwo  + "   "  + valueOne);

// Heap Memory

let user1 = {
    name : 'usama',
    email: 'muhammadusama@gmail.com'
}

console.log(user1);
let user2 = user1;
// console.log(user2);

user2.name = 'johen'
console.log(user1);
console.log(user2)