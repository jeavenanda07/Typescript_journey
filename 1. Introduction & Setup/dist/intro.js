"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CREATING VARIABLE
const names = "A"; //String Variable
const age = 21; //Number Variable
const gender = true; //Boolean Variable
let something; //Null variable
let anotherThing; //Undefined Variable
//CREATING FUNCTION
function userProfile(fname, lname, age) {
    console.log(`First Name: ${fname}, Last Name: ${lname}, Age: ${age}`);
}
userProfile("Hello", "Hello", 13);
function printMenuItem(item) {
    console.log(`Title: ${item.title}, Cost: ${item.cost}, Status: ${item.status == true ? "Available" : "Sold Out"}`);
}
printMenuItem({
    title: "Fries",
    cost: 45,
    status: true
});
//# sourceMappingURL=intro.js.map