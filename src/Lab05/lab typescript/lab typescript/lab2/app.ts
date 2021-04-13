// //bai1
let number1: number = 5;
let number2: number = 2.8;
let phrase: string = "Result is: ";
let permit: boolean = true;

const result = number1 + number2;
if (permit) {
  console.log(phrase + result);
} else {
  console.log("Not show result");
}

// //bai2
// function add(x: any = 5) {
//   let phrase: any = "result is";
//   phrase = 10;
//   x = "2.8";
//   let xConvert: number = +x;
//   console.log(typeof xConvert);
//   return phrase + xConvert;
// }
// let result: number = add();

// //bai3
// var person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: "lan anh",
//   age: 11,
// };
// console.log(person.name);

// //bai4
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: String[];
//   role: Number;
//   roletuple: any[];
// } = {
//   name: "lan anh",
//   age: 20,
//   hobbies: ["yangho", "cute"],
//   role: Role.ADMIN,
//   roletuple: [2, "author"],
// };

// let favouriteActivites: any[];
// favouriteActivites = [5, "yangho", true];

// if (person.role === Role.AUTHOR) {
//   console.log("is author");
// }

// person.roletuple.push("admin");
// person.roletuple[1] = 10;
// person.roletuple = [0, "admin", "user"];

// //bai5
// type Combinable = number | string;
// function Combine(
//   input1: Combinable,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = (input1 as number) + <number>input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combineNumber = Combine(30, 26, "as-number");
// console.log(combineNumber);

// const combineStringNumber = Combine("30", "26", "as-number");
// console.log(combineStringNumber);

// const combineText = Combine("lan anh", "lan anh2", "as-text");
// console.log(combineText);

// //bai6
// var a = null;
// console.log(a);
// console.log(typeof a);

// var b;
// console.log(b);
// console.log(typeof a);
// //console.log(undeclaredVar);

// //bai7
// let userInput: unknown;
// let userName: unknown;

// userInput = 5;
// userInput = "lan anh";
// userName = userInput;
// userName = <String>userInput;
// if (typeof userInput === "string") {
//   userName = userInput;
//   console.log(`
//         ${userName}
//         ${userInput};
//     `);
// }
