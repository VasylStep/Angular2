
//2 - создать массив с 20 числами.
// let arr = [2, 88, -44, 6, 44, 5, 7, 8, 2, 45, 657, 425, -10, 35, 75, 42, 65, 8, 24, 10]
//3 -- при помощи метода sort и колбека  отсортировать массив.

// let resultArrSort = arr.sort( (a, b)=> a-b );
// console.log(resultArrSort);
//4 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let resultArrSort2 = arr.sort((a, b) =>b-a)
// console.log(resultArrSort2);
//5 -- при помощи filter получить числа кратные 3
// let resultFilter = arr.filter( (num)=>(num % 3 === 0)) 
// console.log(resultFilter);
//6 -- при помощи filter получить числа кратные 10
// let resultFilter2 = arr.filter((num)=>(num % 10 === 0) )
// console.log(resultFilter2);

//7 -- перебрать (проитерировать) массив при помощи foreach()
// let copyArr = [];
// let resultForeach = arr.forEach( (arr) => (copyArr.push(arr)))
// console.log(copyArr);
//8 -- перебрать массив при помощи map() и получить новый массив 
//в котором все значения будут в 3 раза больше
// let arrThree = arr.map((num) =>(num * 3))
// console.log(arrThree);
//10 - создать массив со словами на 15-20 элементов.
// let words = ['orem', 'ipsum', 'Dolor', 'ame', 'consectetur', 'Adipisicing', 'orro', 'iste', 'repudiandae', 'aperiam', 'cupiditate', 'delectus', 'fugiat', 'explicabo', 'saepe', 'quis', 'unde', 'nemo', 'libero', 'iure']
//11 -- отсортировать его по алфавиту в восходящем порядке.
// let sortWords = words.sort((a, b) => (a.toLowerCase() < b.toLowerCase())?1:-1)
// console.log(sortWords);
//12 -- отсортировать его по алфавиту  в нисходящем порядке.
// console.log(words.reverse());
//13 -- отфильтровать слова длиной менее 4х символов
// let word4 = words.filter(word => word.length <= 4);
// console.log(word4);
//14 -- перебрать массив при помощи map() и получить новый массив 
//в котором все значения будут со знаком "!" в конце
// let wordsZnak = words.map( (word) =>word + '!')
// console.log(wordsZnak);
//16 Все робити через функції масивів (foreach, map ...тд)
//17 Дан масив :
//18 
let users = [
	
	{ name: 'vasya', age: 31, status: false },
	{ name: 'petya', age: 30, status: true },
	{ name: 'kolya', age: 29, status: true },
	{ name: 'olya', age: 28, status: false },
	{ name: 'max', age: 30, status: true },
	{ name: 'anya', age: 31, status: false },
	{ name: 'oleg', age: 28, status: false },
	{ name: 'andrey', age: 29, status: true },
	{ name: 'masha', age: 30, status: true },
	{ name: 'olya', age: 31, status: false },
	{ name: 'max', age: 31, status: true }];
	
//19 - відсортувати його за  віком (зростання , а потім окремо спадання)
// let usersSort = users.sort( (a, b)=>(a.age - b.age) )
// console.log(usersSort);
// let usersSort2 = users.sort( (a, b)=>(b.age - a.age) )
// console.log(usersSort2);
//20 - відсортувати його за кількістю знаків в імені  
//(зростання , а потім окремо спадання)

// let usersSimbol = users.sort((a, b)=>a.name.length - b.name.length) 
// console.log(usersSimbol);

// let usersSimbol2 = users.sort((a, b)=>b.name.length - a.name.length) 
// console.log(usersSimbol2);

//21 - пройтись по ньому та додати кожному юзеру поле id - 
//яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін)

let usersId = users.map((user, id) => {
	user.id = id + 1;
	return user;
});
console.log(usersId);

//22 - відсортувати його за індентифікатором
// let userSort = users.sort( (user1, user2)=> (user1.id - user2.id))
// console.log(userSort);
// 25 -- наисать функцию калькулятора с 2мя числами и колбеком
function calculate(a, b, callback) {
	return callback(a, b);
}
let result = calculate(10, 20, function callback(a, b) {
	return a + b;
})
console.log(result);

//26 -- наисать функцию калькулятора с 3мя числами и колбеком
function calculate2(a, b, c, callback2) {
	return callback2(a, b, c);
}
let result2 = calculate2(10, 20, 2, function callback2(a, b, c) {

	return a + b * c;
})
console.log(result2);




// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




//37 
let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
{ producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
{ producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
{ producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
{ producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
{ producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
{ producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
{ producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
{ producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
{ producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
{ producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
{ producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
{ producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];
//38 Відфільтрувати масив за наступними крітеріями :
//39 - двигун більше 3х літрів
let resultVolume = cars.filter(car => car.volume >= 3);
console.log(resultVolume);
//40 - двигун = 2л
let resultVolume2 = cars.filter(car => car.volume === 2);
console.log(resultVolume2);
//41 - виробник мерс
let resProduser = cars.filter(car => car.producer === 'mercedes')
console.log(resProduser);
//42 - двигун більше 3х літрів + виробник мерседес
let resVolPro = cars.filter(car => (car.volume >= 3) && (car.producer === 'mercedes'))
console.log(resVolPro);
//43 - двигун більше 3х літрів + виробник субару
let resVolPro2 = cars.filter(car => car.volume >= 3 && car.producer === 'subaru');
console.log(resVolPro2);
//44 - сили більше ніж 300
let resPower = cars.filter(car => car.power > 300);
console.log(resPower);
//45 - сили більше ніж 300 + виробник субару
let resPowerProduser = cars.filter(car => car.power > 300 && car.producer === 'subaru');
console.log(resPowerProduser);
//46 - мотор серіі ej
let resEngine = cars.filter(car => car.engine.startsWith('ej'));
console.log(resEngine);
//47 - сили більше ніж 300 + виробник субару + мотор серіі ej
let resPowProdMotor = cars.filter(car => car.power >= 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
console.log(resPowProdMotor);
//48 - двигун меньше 3х літрів + виробник мерседес
let resVolumeProduser = cars.filter(car => car.volume > 3 && car.producer === 'mercedes');
console.log(resVolumeProduser);
//49 - двигун більше 2л + сили більше 250
let resVolumePower = cars.filter(car => car.volume > 2 && car.power > 250);
console.log(resVolumePower);
//50 - сили більше 250  + виробник бмв
let resPowerProduser2 = cars.filter(car => car.power > 250 && car.producer === 'bmw');
console.log(resPowerProduser2);


//54 - взять слдующий массив
//55 
let usersWithAddress = [{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
{ id: 2, name: 'petya', age: 30, status: true, address: { city: 'aLviv', street: 'AShevchenko', number: 1 } },
{ id: 3, name: 'kolya', age: 29, status: true, address: { city: 'bLviv', street: 'Shevchenko', number: 121 } },
{ id: 4, name: 'olya', age: 28, status: false, address: { city: 'cLviv', street: 'Shevchenko', number: 90 } },
{ id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'BShevchenko', number: 115 } },
{ id: 6, name: 'anya', age: 31, status: false, address: { city: 'dLviv', street: 'Shevchenko', number: 2 } },
{ id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
{ id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
{ id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'CShevchenko', number: 12 } },
{ id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
{ id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }];
//56 -- отсортировать его по id пользователей
// let userId = usersWithAddress.sort((user1, user2) => user1.id > user2.id ? 1 : -1)
// console.log(userId);
//57 -- отсортировать его по id пользователей в обратном опрядке
// let userId2 = usersWithAddress.sort((user1, user2) => user1.id > user2.id ? 1 : -1)
// console.log(userId2);
//58 -- отсортировать его по возрасту пользователей
// let userAge = usersWithAddress.sort((user1, user2) => (user1.age > user2.age? 1 : -1));
// console.log(userAge);
//59 -- отсортировать его по возрасту пользователей в обратном порядке
// let userAge2 = usersWithAddress.sort((user1, user2) => (user1.age > user2.age? -1 : 1));
// console.log(userAge2);
//60 -- отсортировать его по имени пользователей
// let userName = usersWithAddress.sort((user1, user2) => user1.name > user2.name ? 1 :-1)
// console.log(userName);
//61 -- отсортировать его по имени пользователей в обратном порядке
// let userName2 = usersWithAddress.sort((user1, user2) => user1.name > user2.name ? -1 :1)
// console.log(userName2);
//62 -- отсортировать его по названию улицы  в алфавитном порядке
// let userAdres = usersWithAddress.sort((user1, user2) => user1.address.street > user2.address.street ? 1 :-1)
// console.log(userAdres);
//63 -- отсортировать его по номеру дома по возрастанию
// let userHouse = usersWithAddress.sort((user1, user2) => user1.address.number > user2.address.number ? 1 :-1)
// console.log(userHouse);
//64 -- отфильтровать (оставить) тех кто младше 30
// let userAge3 = usersWithAddress.filter(user => user.age < 30);
// console.log(userAge3);
//65 -- отфильтровать (оставить) тех у кого отрицательный статус
// let userStatus = usersWithAddress.filter(user => user.status ===false);
// console.log(userStatus);
//66 -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let userStatusAge = usersWithAddress.filter(user => user.status ===false&&user.age < 30);
// console.log(userStatusAge);
//67 -- отфильтровать (оставить) тех у кого номер дома четный
let userHouse2 = usersWithAddress.filter(user => (user.address.number) % 2 === 0);
console.log('userHouse2', userHouse2)

console.log(userHouse2);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

//74 Створити обєкт автомобіля з полями:
//75 Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//76 Власник автомобіля теж має бути обєкт, у якого є поля
//77 Імя, вік, стаж водіння.
//78 Створити не менше 7 та не більше 20 машинок.
//79 Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//80 На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//81 Для початку вкладіть всі наші створені автомобілі в масив cars.
//82 Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
//83 Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//84 Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


//87 Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//88 Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//89 Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


let hhh = [1, 2, 3, 5, 4, 8];







