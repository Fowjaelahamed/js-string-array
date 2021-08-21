function addNumbers(num1, num2) {
    // console.log(arguments); //arguments is array like object
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers(23, 12, 50, 100, 1, 2, 4, 5);
console.log(sum);

function getFullName(firstName,lastName){
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const nam = getFullName('hanif','songket', 'bin', 'shams', 'bin', 'botuta');
console.log(nam);