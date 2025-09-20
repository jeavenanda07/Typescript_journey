// Tuples - collection of arrau pf value with different value

let person1: string = "jeaven";
let person2: string[] = ["Jeaven", "Anda", "Paras"];
let person3: any[] = ["Jeaven", 21, true];
let person4: [string, number, boolean] = ["Jeaven", 21, true];

person4 = ["arman", 20, false];

console.log(person4);

//Tuples examples
let hsla: [number, string, string, number];
hsla = [200, "100%", "40%", 100];


let xy: [number, number];
xy = [20, 12];

function useCoords():[number, number]{
    let lat = 100;
    let long = 200;

    return [lat, long];
}


function user1(fname: string, lname: string, age: number, isMarried: boolean): [string, string, number, boolean]{
    fname = "Jeaven";
    age = 21;
    return [fname, lname, age, isMarried];
}

// const [lat, long] = useCoords();

const [fname, lname, age, isMarried] = user1();     //Order of tuple should be correct
console.log(age)
// console.log(user1("Jeaven", "Anda", 21, false));




// name tuple
let user2: [name: string, age: number, isMarried: boolean] = ["Jeaven", 21, false];

console.log(user2);