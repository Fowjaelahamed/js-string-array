const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 34, 68];
// slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice 
// const numberSpliced = numbers.splice(4, 2);
// console.log(numberSpliced);
// splice korle main array theke remove kore dei 
// console.log(numbers);

// const numberSpliced2 = numbers.splice(4, 3, 100, 102, 103, 105, 109);
// const numberSpliced2 = numbers.splice(4, 3, 7777);
const numberSpliced2 = numbers.splice(4, 0, 7777);
console.log(numberSpliced2);
console.log(numbers);