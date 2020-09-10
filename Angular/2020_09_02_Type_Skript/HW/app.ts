// let name2 = 'Viktor';
// console.log(name2);
//
// let age:number = 33;
// console.log(age);
//
// let weight:number = 80;
// console.log(weight);

import {User} from "./User";
import {Wife} from "./Wife";

function numberChanger(numberToChange:number|string):string|number {
    if (typeof numberToChange==="number"){
        return +numberToChange.toFixed(4)
    }
return  numberToChange;
};
let s = numberChanger('Helo');
console.log(s);
let s2 = numberChanger(7.789654321);
console.log(s2);

class Car{
    protected year: number;
    private produser: string;
    constructor(year:number, produser:string) {
        this.year=year;
        this.produser=produser;
    }
}

let car1=new Car(2000, 'Yamaha');
console.log(car1);

class superCar extends Car{
   color: string;
   constructor(year:number, produser:string,color:string) {
       super(year,produser);
       this.color=color;
       this.year=year;
   }
}

let car2=new superCar(2000, 'Yamaha','red');
console.log(car2);
console.log(car2.color);

let names:string[] = ['Ivan','Dima','Ira'];
let names2:Array<string> = ['Ivan','Dima','Ira'];

let user ={
    name: 'Dimas',
    age: 33
}

interface IUser{
    name:string;
    age: number;
    phone:{
        model:string,
        price: number,
        isNew: boolean
    }
}
let userFhone:IUser[]=[{name:'Ivan',age: 32, phone:{isNew:true,model:'Sams',price:200,}}]
const arrr:Array<keyof IUser>=["age","name","phone"];

function foo(user:User) {
    user.name.toUpperCase()
    console.log(user.name.toUpperCase());
    user.greeting();
    console.log(user.wife.age);
    user.wife.action();
    return
}
// foo(user:{name:'Serg'});
// foo({name:'Serg'});
// foo({name:'brrr'});
let wife = new Wife('Jes',18)
let user2 =new User('Kokos',32,['Java','Pyton', 'Angular'],wife);
foo (user2);



