"use strict";
// let name2 = 'Viktor';
// console.log(name2);
//
// let age:number = 33;
// console.log(age);
//
// let weight:number = 80;
// console.log(weight);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User_1 = require("./User");
var Wife_1 = require("./Wife");
function numberChanger(numberToChange) {
    if (typeof numberToChange === "number") {
        return +numberToChange.toFixed(4);
    }
    return numberToChange;
}
;
var s = numberChanger('Helo');
console.log(s);
var s2 = numberChanger(7.789654321);
console.log(s2);
var Car = /** @class */ (function () {
    function Car(year, produser) {
        this.year = year;
        this.produser = produser;
    }
    return Car;
}());
var car1 = new Car(2000, 'Yamaha');
console.log(car1);
var superCar = /** @class */ (function (_super) {
    __extends(superCar, _super);
    function superCar(year, produser, color) {
        var _this = _super.call(this, year, produser) || this;
        _this.color = color;
        _this.year = year;
        return _this;
    }
    return superCar;
}(Car));
var car2 = new superCar(2000, 'Yamaha', 'red');
console.log(car2);
console.log(car2.color);
var names = ['Ivan', 'Dima', 'Ira'];
var names2 = ['Ivan', 'Dima', 'Ira'];
var user = {
    name: 'Dimas',
    age: 33
};
var userFhone = [{ name: 'Ivan', age: 32, phone: { isNew: true, model: 'Sams', price: 200 } }];
var arrr = ["age", "name", "phone"];
function foo(user) {
    user.name.toUpperCase();
    console.log(user.name.toUpperCase());
    user.greeting();
    console.log(user.wife.age);
    user.wife.action();
    return;
}
// foo(user:{name:'Serg'});
// foo({name:'Serg'});
// foo({name:'brrr'});
foo(new User_1.User('Kokos', 32, ['Java', 'Pyton', 'Angular'], new Wife_1.Wife('Jes', 18)));
