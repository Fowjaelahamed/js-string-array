const myBirthDate = new Date(1998, 02, 05, 02, 39, 40, 30);
console.log(myBirthDate);
const newDate = new Date('1998-02-05');
console.log(newDate);
if(myBirthDate.getTime() > newDate.getTime()){
    console.log('my birthdate is bigger');
}