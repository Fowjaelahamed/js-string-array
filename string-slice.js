const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

// split
const words = anthem.split(' '); // khali jaiga diye split korbo tai empty string deoa hoiche
const withoutA = anthem.split('a');
console.log(words);
console.log(withoutA);

// slice 
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// subStr 
const subStr = anthem.substr(11, 8);
console.log(subStr);

// subString
const subString = anthem.substring(11, 15); // 15 index er ag porjnto cholbe mane 14
console.log(subString);

// concat 
const first = 'amader';
const second = 'city';
// const fullSting = first + second;
const fullSting = first.concat(second).concat('abcsd').concat('ami hoilam no 1');
console.log(fullSting);

const names = ['alim', 'kalim', 'lal', 'nila'];
// const allJoined = names.join('');
// const allJoined = names.join(' ');
// const allJoined = names.join(',');
// const allJoined = names.join(', ');
// const allJoined = names.join('---');
const allJoined = names.join('^^^');
console.log(allJoined);