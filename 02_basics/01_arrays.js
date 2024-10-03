// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Boogieman", "Nigga"]

// const my Arr2 = new Array(1, 2, 3, 4)

console.log(myArr[4]);

// Array methods

myArr.push(6)
myArr.push(10)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);