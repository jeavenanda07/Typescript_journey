//CREATING VARIABLE
const names : string = "A"; //String Variable
const age : number = 21;    //Number Variable
const gender : boolean = true;  //Boolean Variable
let something: null;  //Null variable
let anotherThing: undefined;  //Undefined Variable

//CREATING FUNCTION
function userProfile(fname: string, lname: string, age: number){
    console.log(`First Name: ${fname}, Last Name: ${lname}, Age: ${age}`);
}

userProfile("Jeaven", "Hello", 13);


//CREATING AN INTERFACE
interface MenuItem{
    title: string,
    cost: number,
    status: boolean
  }
  
  function printMenuItem(item: MenuItem){
    console.log(`Title: ${item.title}, Cost: ${item.cost}, Status: ${item.status == true ? "Available" : "Sold Out"}`)
  }
  
  printMenuItem({
    title: "Fries",
    cost: 45,
    status: true
  })