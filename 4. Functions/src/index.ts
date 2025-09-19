// functions number
function addTwoNumbers(num1: number, num2: number): number{
    return num1 + num2;
}

function subtractTwoNumbers(num1: number, num2: number): number{
    return num1 - num2;
}

const arrowFuncAddNum = (num1: number, num2: number): number => {
    return num1 + num2;
}

const arrowFuncSubtractNum = (num1: number, num2: number): number => {
    return num1 - num2;
}

console.log(addTwoNumbers(4, 1));
console.log(subtractTwoNumbers(5, 2));
console.log(arrowFuncAddNum(10, 12));
console.log(arrowFuncSubtractNum(40, 12));

// array functions

function arrNum(num1: number[]): number[]{
    return num1.map(n => n + 1);
}

console.log(arrNum([4, 12 , 4]));




//function inference

function formatGreeting(greeting: string, name: string): string{
    return `${greeting}, ${name}`;
}

const result = formatGreeting("Hello", "Jeaven");
console.log(result);