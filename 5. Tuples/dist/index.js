"use strict";
// Tuples - collection of arrau pf value with different value
Object.defineProperty(exports, "__esModule", { value: true });
let person1 = "jeaven";
let person2 = ["Jeaven", "Anda", "Paras"];
let person3 = ["Jeaven", 21, true];
let person4 = ["Jeaven", 21, true];
person4 = ["arman", 20, false];
console.log(person4);
//Tuples examples
let hsla;
hsla = [200, "100%", "40%", 100];
let xy;
xy = [20, 12];
function useCoords() {
    let lat = 100;
    let long = 200;
    return [lat, long];
}
function user1(fname, lname, age, isMarried) {
    fname = "Jeaven";
    age = 21;
    return [fname, lname, age, isMarried];
}
// const [lat, long] = useCoords();
const [fname, lname, age, isMarried] = user1(); //Order of tuple should be correct
console.log(age);
// console.log(user1("Jeaven", "Anda", 21, false));
// name tuple
let user2 = ["Jeaven", 21, false];
console.log(user2);
//# sourceMappingURL=index.js.map