//bai1
const hobbies = ['Sports', 'Cooking'];
let activehobbies: any;
    activehobbies = ['hiking'];
    activehobbies.push(hobbies);
    activehobbies.push(hobbies[0], hobbies[1]);
    activehobbies.push(...hobbies);
    console.log(activehobbies);

//bai2
let sum = (x:number = 5, y?: number) => {
    return x + <number> y ;
}
let speech = (output: any): void => {
    console.log("Result" + output);
}
speech(sum(5,12));
console.log(speech(sum(8,5)));

//bai3
let something: void = undefined;
let nothing: void = null;
function throwError(errorMsg: string): void {
    throw new Error(errorMsg);
}

//bai4
function AddandHandle(x: number, y: number, cb:(num:number) => void){
    const result = x+ y;
    cb(result);
}
AddandHandle(10, 20, (result) => {
    console.log(result);
})