
//18 - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
	car01 = { model: 'Mersedes__', year: '1980', power: '1.0', colour: 'red'   },
	car02 = { model: 'Volvo_____', year: '1981', power: '1.1', colour: 'green' },
	car03 = { model: 'Toyota____', year: '1982', power: '1.2', colour: 'red'   },
	car04 = { model: 'Laz_______', year: '1983', power: '1.3', colour: 'green' },
	car05 = { model: 'Mitsubishi', year: '1984', power: '1.4', colour: 'grey'  },
	car06 = { model: 'Reno______', year: '1985', power: '1.5', colour: 'red'   },
	car07 = { model: 'Pezo______', year: '1986', power: '1.6', colour: 'grey'  },
	car08 = { model: 'Fiat______', year: '1987', power: '1.7', colour: 'green' },
	car09 = { model: 'Volksvagen', year: '1988', power: '1.8', colour: 'red'   },
	car10 = { model: 'Nissan____', year: '1989', power: '1.9', colour: 'red'   }
];

// const block = document.createElement('div');
// function addListBody(array,id) {
// 	const block = document.getElementById(id);
// const ul = document.createElement('ul');
// for (let i = 0; i < array.length; i++) {
// 	const carElement = cars[i];
// 	const li = document.createElement ('li');
// 	li.innerHTML = `${i}---${carElement.model}---${carElement.year}---${carElement.power}---${carElement.colour}`;
// 	ul.appendChild (li);
// }
// block.appendChild(ul);
// // document.body.appendChild(block);
// }
// addListBody (cars,'list');


	


//19 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function createChema(count, Typetag) {
	for (let i = 0; i < count; i++) {
const tag = document.createElement (Typetag);
		tag.id = i;
		document.body.appendChild(tag);
	}
	return block;
}
createChema (15,'p');



function createCar(car) {
const	block =document.createElement('div');
const model = document.createElement('h2').innerText=cars.model;
const year = document.createElement ('h3').innerText=cars.year;
const power = document.createElement ('h4').innerText=cars.power;
const colour = document.createElement ('h3').innerText=cars.colour;
block.appendChild (model);
block.appendChild (year);
block.appendChild (power);
block.appendChild (colour);
}


//20 - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//21 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//22 Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
//23 **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:



// ***- беремо завдання з правилами з укроку №3 :
//24 Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];
		

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове=======