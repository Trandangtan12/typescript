// //bai1
// interface AddFn {
//     (a: number, b: number): number;
// }

// let add: AddFn;
// add = (n1: number, n2: number) => {
//     return n1 + n2;
// };

// //bai2
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface greetable extends Named {
  greet(phrase: string): void;
}

let user1: greetable;

user1.greet("Hi there - I am");
console.log(user1);

// //bai3
// abstract class bai3 {
//     static fiscalYear = 2020;

//     protected employees: string[] = [];

//     constructor(protected readonly id: string, public name: string) {

//     }
//     static createEmployees(name: string) {
//         return {
//             name: name
//         };
//     }

//     abstract describe(this: bai3): void;

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class bai3_2 extends bai3 {
//     admins: string[];
//     constructor(id: string, admin: string[]) {
//         super(id, 'IT');
//         //this.admins = admins;
//     }

//     describe() {
//         console.log('IT Department - ID' + this.id);
//     }
// }

// const employees1 = bai3.createEmployees('Max');
// console.log(employees1, bai3.fiscalYear);

// const it = new bai3_2('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('manu');
