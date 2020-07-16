
//2 - создать массив с 20 числами.
let arr = [2,88,-44,6,44,5,7,8,2,45,657,425,-10,35,75,42,65,8,24,10]
//3 -- при помощи метода sort и колбека  отсортировать массив.
// let resultArrSort =arr.sort ();
// console.log (resultArrSort);
let resultArrSort =arr.sort (function (a,b) {
	return a-b})
console.log (resultArrSort);
//4 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let resultArrSort2 =arr.sort (function (a,b) {
	return b-a})
console.log (resultArrSort2);
//5 -- при помощи filter получить числа кратные 3
let resultFilter =arr.filter(function (num) {
	if (num%3===0) {
		return true;
	}
})
console.log (resultFilter);
//6 -- при помощи filter получить числа кратные 10
let resultFilter2 =arr.filter(function (num) {
	if (num%10===0) {
		return true;
	}
})
console.log (resultFilter2);

//7 -- перебрать (проитерировать) массив при помощи foreach()

//8 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

//10 - создать массив со словами на 15-20 элементов.
//11 -- отсортировать его по алфавиту в восходящем порядке.
//12 -- отсортировать его по алфавиту  в нисходящем порядке.
//13 -- отфильтровать слова длиной менее 4х символов
//14 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

//16 Все робити через функції масивів (foreach, map ...тд)
//17 Дан масив :
//18 let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//19 - відсортувати його за  віком (зростання , а потім окремо спадання)
//20 - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//21 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//22 - відсортувати його за індентифікатором


//25 -- наисать функцию калькулятора с 2мя числами и колбеком
//26 -- наисать функцию калькулятора с 3мя числами и колбеком

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




//37 let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//38 Відфільтрувати масив за наступними крітеріями :
//39 - двигун більше 3х літрів
//40 - двигун = 2л
//41 - виробник мерс
//42 - двигун більше 3х літрів + виробник мерседес
//43 - двигун більше 3х літрів + виробник субару
//44 - сили більше ніж 300
//45 - сили більше ніж 300 + виробник субару
//46 - мотор серіі ej
//47 - сили більше ніж 300 + виробник субару + мотор серіі ej
//48 - двигун меньше 3х літрів + виробник мерседес
//49 - двигун більше 2л + сили більше 250
//50 - сили більше 250  + виробник бмв



//54 - взять слдующий массив
//55 let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
//56 -- отсортировать его по id пользователей
//57 -- отсортировать его по id пользователей в обратном опрядке
//58 -- отсортировать его по возрасту пользователей
//59 -- отсортировать его по возрасту пользователей в обратном порядке
//60 -- отсортировать его по имени пользователей
//61 -- отсортировать его по имени пользователей в обратном порядке
//62 -- отсортировать его по названию улицы  в алфавитном порядке
//63 -- отсортировать его по номеру дома по возрастанию
//64 -- отфильтровать (оставить) тех кто младше 30
//65 -- отфильтровать (оставить) тех у кого отрицательный статус
//66 -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//67 -- отфильтровать (оставить) тех у кого номер дома четный


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