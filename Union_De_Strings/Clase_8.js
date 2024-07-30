const number_Like_String = '10';
const number_Like_Number = parseInt(number_Like_String);

const is_Valid = false;

console.log(number_Like_String + is_Valid);
console.log(number_Like_Number + is_Valid);

console.log(number_Like_String * number_Like_String);
console.log(number_Like_String * number_Like_Number);
console.log(number_Like_String * is_Valid);
console.log(number_Like_Number * is_Valid);

console.log(number_Like_String - number_Like_String);
console.log(number_Like_String - number_Like_Number);
console.log(number_Like_String - is_Valid);
console.log(number_Like_Number - is_Valid);

console.log(number_Like_String / number_Like_String);
console.log(number_Like_String / number_Like_Number);
console.log(number_Like_String / is_Valid);
console.log(number_Like_Number / is_Valid);