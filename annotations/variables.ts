let myNumber: number = 3;

let myString: string = "hello";

let myBoolean: boolean = true;

// Array
let color: string[] = ["Yellow", "red"];
let allNumbers: number[] = [1, 2, 3, 4];
let allInOne: any[] = ["Hello",1]

// Classes
class Car{

}
let car: Car = new Car();

// Object Literals
let point: {x:number; y: number} = {
  x: 20,
  y: 20
}

//Experiment
let objectsArray: {name:string, age: number}[] = [{name:"Durgesh",age:20}]
console.log(objectsArray)

// functions
const logNumber : (i: number, j: string) => void = (i: number, j: string) => {
  console.log(i,j)
}
logNumber(1,"hello");

// Using type annotations with function that returns any type and we need to clarify the value
const myJson = '{x:20, y:20}';
const myCoordinates = JSON.parse(myJson); // This references to any type
//myCoordinates.jsdhjw // typescript wont be able to help becaose of any type
const myCoordinatesNew : {x: number, y: number} = JSON.parse(myJson);
//myCoordinatesNew.dhwjerhe //typescript will help here by mentioning that this kind of property doesn't exists


// Variable whose type cannot be inferred correctly
let nums = [-1, -2, 2];
// let numbersAboveZero = false;

// for (let i=0;i<nums.length;i++){
//   if(nums[i] > 0){
//     numbersAboveZero = nums[i];
//   }
// }
// ABove inference is wrong, so we need to giver proper annotation
let numbersAboveZero: boolean | number = false;

for (let i=0;i<nums.length;i++){
  if(nums[i] > 0){
    numbersAboveZero = nums[i];
  }
}