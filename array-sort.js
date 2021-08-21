const numbers = [1, 6, 8, 5, 4, 9, 2, 0, 7];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabli', 'josim', 'razzak', 'anwar', 'depjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);
const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

// number sorting fun 
const bigNumbers = [44, 56, 9, 76, 53, 99, 12, 2, 23];
// compare function use kora lagbe jkhn double digit er number sort kora lagbe 
const sortedBigNumbers = bigNumbers.sort(function (a, b){
    return a - b;
});
console.log(sortedBigNumbers);
