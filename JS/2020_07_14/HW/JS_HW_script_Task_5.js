//1 ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// function Teg(titleOfTag,text,style) {

// this.titleOfTag=titleOfTag;
// this.text=text;
// this.action=function () {
// console.log
// (`Элемент ${this.titleOfTag}, ${this.text}`);
// }
// this.style=style	
// };
// let div = new Teg ('div');
// div.text = 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
// // console.log (div);
// div.action();
// div.style=[1,2,3,4,5,6];
// console.log (div);

// let h1 = new Teg ('h1');
// // console.log (h1);
// h1.text='представляет собой наиболее важный заголовок первого уровня.'
// h1.action();

// let a = new Teg('a');
// a.text= 'предназначен для создания ссылок.'
// a.action();

// let span = new Teg ('span');
// span.text = 'предназначен для определения строчных элементов документа.'
// span.action();

// let input = new Teg ('input');
// input.text='является одним из разносторонних элементов формы.'
// input.action();

// let form = new Teg ('form');
// form.text = 'устанавливает форму на веб-странице.'
// form.action();

// let option = new Teg ('option');
// option.text='определяет отдельные пункты списка'
// option.action();

// let select = new Teg ('select');
// select.text='позволяет создать элемент интерфейса в виде раскрывающегося списка';
// select.action();
//2 ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// class Teg {
// 	constructor(titleOfTag, text, style) {
// 		this.titleOfTag = titleOfTag;
// 		this.text = text;
// 		this.style = style
// 	}
// 	action () {
// 		console.log
// 			(`Элемент ${this.titleOfTag}, ${this.text}`);
// 	}
// }
// let div = new Teg('div');
// div.text = 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
// console.log(div);
// div.action();
// let h1 = new Teg('h1');
// // console.log (h1);
// h1.text = 'представляет собой наиболее важный заголовок первого уровня.'
// console.log(h1);
// h1.action();

// let a = new Teg('a');
// a.text = 'предназначен для создания ссылок.'
// console.log(a);
// a.action();

// let span = new Teg('span');
// span.text = 'предназначен для определения строчных элементов документа.'
// console.log(span);
// span.action();

// let input = new Teg('input');
// input.text = 'является одним из разносторонних элементов формы.'
// console.log(input);
// input.action();

// let form = new Teg('form');
// form.text = 'устанавливает форму на веб-странице.'
// console.log(form);
// form.action();

// let option = new Teg('option');
// option.text = 'определяет отдельные пункты списка'
// console.log(option);
// option.action();

// let select = new Teg('select');
// select.text = 'позволяет создать элемент интерфейса в виде раскрывающегося списка';
// console.log(select);
// select.action();
//3 ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let car =
{
	model: 'Toyota',
	made: 'Japan',
	year: 2018,
	speed: 250,
	volume: 3.1,
	addDriver(driver) {
		this.driver = driver;
	}
};
function drive() {
	console.log('їдемо зі швидкістю' + ` ${car.speed} ` + 'км/на годину')
}
drive();
function info() {
	console.log(`model: ${car.model},made: ${car.made},year: ${car.year},
			speed: ${car.speed}км/год,volume:${car.volume}м3`)
}
info();
function increaseMaxSpeed(newSpeed) {
	car.speed = car.speed + newSpeed;
	console.log(`Підвищеня швидкість буде =${car.speed} км/год`);
}
increaseMaxSpeed(10);
function changeYear(newValue) {
	car.year = newValue;
	console.log(`Новий рік випуску автомобіля буде ${newValue}`)
}
changeYear(2020)


let driver = {
	driverYear: 30,
	driverHeight: 1.8,
	driverAge: 80
};

car.addDriver(driver);

console.log(car);



//4 ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, made, year, speed, volume) {
// 	this.model = model;
// 	this.made = made;
// 	this.year = year;
// 	this.speed = speed;
// 	this.volume = volume;
// 	this.action = function drive() {
// 		console.log(`"їдемо зі швидкістю ${speed} км/на годину"`)
// 	}
// 	this.info = function info() {
// 		console.log(`model: ${this.model},made: ${this.made},year: ${this.year},
// 		speed: ${this.speed}км/год,volume:${this.volume}м3`)
// 	}
// 	this.increaseMaxSpeed = function newSpeed() {
// 		this.speed = (this.speed + this.volume);
// 		console.log(`Підвищена швидкість =${this.speed}км/год`);
// 	}
// 	this.changeYear = function newValue(newValue = 2019) {

// 		this.newValue = newValue;

// 		console.log(`Новий рік випуску = ${this.newValue}`)
// 	}
// 	this.addDriver = function driver(driverYear, driverHeight, driverAge) {
// 		this.driverYear = driverYear;
// 		this.driverHeight = driverHeight;
// 		this.driverAge = driverAge;
// 	}
// }

// let car = new Car('mers', 'germany', '1990', 200, 2.5)
// console.log(car);
// // car.action ()
// // car.info ()
// car.increaseMaxSpeed()
// car.changeYear()

// car.driverAge = 80;
// car.driverHeight = 2.1;
// car.driverYear = 30;
// console.log(car);
//5==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car{
// constructor(model, made, year, speed, volume) {
// 	this.model = model;
// 	this.made = made;
// 	this.year = year;
// 	this.speed = speed;
// 	this.volume = volume;
// }
// 	action() {
// 		console.log(`"їдемо зі швидкістю ${speed} км/на годину"`)
// 	}
// 	info() {
// 		console.log(`model: ${this.model},made: ${this.made},year: ${this.year},
// 		speed: ${this.speed}км/год,volume:${this.volume}м3`)
// 	}
// 	increaseMaxSpeed() {
// 		this.speed = (this.speed + this.volume);
// 		console.log(`Підвищена швидкість =${this.speed}км/год`);
// 	}
// 	changeYear(newValue = 2019) {

// 		this.newValue = newValue;

// 		console.log(`Новий рік випуску = ${this.newValue}`)
// 	}
// 	addDriver(driverYear, driverHeight, driverAge) {
// 		this.driverYear = driverYear;
// 		this.driverHeight = driverHeight;
// 		this.driverAge = driverAge;
// 	}
// }

// let car = new Car('mers', 'germany', '1990', 200, 2.5)
// console.log(car);
// // car.action ()
// // car.info ()
// car.increaseMaxSpeed()
// car.changeYear()

// car.driverAge = 80;
// car.driverHeight = 2.1;
// car.driverYear = 30;
// console.log(car);


//6 ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class princesGirl{
// 	constructor(name,age,legSise){
// this.name=name;
// this.age=age;
// this.legSise=legSise;
// 	}
// };
// let princesGirl_1 = new princesGirl ('Lina', 18, 25);
// console.log (princesGirl_1);
// let princesGirl_2 = new princesGirl ('PoLina', 18, 25);
// let princesGirl_3 = new princesGirl ('MaLina', 19, 26);
// let princesGirl_4 = new princesGirl ('KaLina', 20, 27);
// let princesGirl_5 = new princesGirl ('BaLina', 21, 28);
// let princesGirl_6 = new princesGirl ('DeLina', 22, 29);
// let princesGirl_7 = new princesGirl ('FoLina', 23, 30);
// let princesGirl_8 = new princesGirl ('KaLina', 24, 31);
// let princesGirl_9 = new princesGirl ('ZoLina', 25, 32);
// let princesGirl10 = new princesGirl ('NeLina', 26, 33);

// let array = [princesGirl_1,princesGirl_2,princesGirl_3,princesGirl_4,princesGirl_5,
// princesGirl_6,princesGirl_7,princesGirl_8,princesGirl_9,princesGirl10];

// let prince={
// name: 'Ivan',
// age: 35,
// princesShoes:32,
// }
// for (let i = 0; i < array.length; i++) {

// 	if (prince.princesShoes===array[i].legSise) {

// 		console.log (`Принцеса ${array[i].name} буде дружиною принца`)
// 	}
// }
//7 ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// Ту задачу поміг зробити ментор Юра -- сам не додумався як то все поєднати.

function princesGirl(name, age, legSise) {
	this.name = name;
		this.age = age;
		this.legSise = legSise;
};

let princesGirl_1 = new princesGirl('Lina', 18, 25);
console.log(princesGirl_1);
let princesGirl_2 = new princesGirl('PoLina', 18, 25);
let princesGirl_3 = new princesGirl('MaLina', 19, 26);
let princesGirl_4 = new princesGirl('KaLina', 20, 27);
let princesGirl_5 = new princesGirl('BaLina', 21, 28);
let princesGirl_6 = new princesGirl('DeLina', 22, 29);
let princesGirl_7 = new princesGirl('FoLina', 23, 30);
let princesGirl_8 = new princesGirl('KaLina', 24, 31);
let princesGirl_9 = new princesGirl('ZoLina', 25, 32);
let princesGirl10 = new princesGirl('NeLina', 26, 33);

let array = [princesGirl_1, princesGirl_2, princesGirl_3, princesGirl_4, princesGirl_5,
	princesGirl_6, princesGirl_7, princesGirl_8, princesGirl_9, princesGirl10];


function Prince(name, age, princesShoes) {
	this.name = name;
	this.age = age;
	this.princesShoes = princesShoes;

	this.action = function (array) {
		for (let i = 0; i < array.length; i++) {
			if (this.princesShoes === array[i].legSise) {
				console.log(`Принцеса ${array[i].name} буде дружиною принца`)
			}
		}
	}
}
let princeAndriy = new Prince('andriy', 34,29 );
princeAndriy.action(array);
//====================================================================
let numbers = [11,-1,12,45,0];
numbers.sort ()
numbers.filter ()
numbers.map ()
numbers.forEach ()
numbers.find ()
numbers.reduce ()