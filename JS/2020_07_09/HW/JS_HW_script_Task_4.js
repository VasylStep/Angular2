//1 - створити функцію яка виводить масив
function arr(a,b,c) {
	let arr = [a,b,c];
	console.log (arr);
}
arr(1,2,3);

let a = Math.random ();
console.log(a);

// 2- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function randomArr() {
	let a=Math.floor(Math.random ()*100);
	let b=Math.floor(Math.random ()*100);
	let c=Math.floor(Math.random ()*100);
	let arr = [a,b,c];
	console.log (arr);
}
randomArr();

//3 - створити функцію яка приймає три числа та виводить та повертає найменьше.
function minNumber(a,b,c) {
	d=Math.min(a,b,c)
		console.log(d);
		return(d);
}
minNumber(-10,20,30);
//4 - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxNumber(a,b,c) {
	d=Math.max(a,b,c)
	console.log(d);
	return(d);
}
maxNumber(-100,15,500.2)
//5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function addNumber(a=1) { 
	///списав з консультації -- не зрозуїїумів як вводиться безмежна к-сть 
	//елементів масиву і воно то сприймає

function minimatorMaximator() {
	let min = arguments[0];
	let max = arguments[0];
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i]<min) {
			min=arguments[i];
			
		}
		if (arguments[i]>max) {
			max=arguments[i];
		}
	}
	console.log (max+ 'Max');
		console.log (min+ 'Min');
		return(min);
}
minimatorMaximator(2,0,6,-5,4,10,16,8,0,-5,7,99,54,78);

//7 - створити функцію яка повертає найбільше число з масиву
function maxArr(a,b,c,d) {
	let arr = [a,b,c,d];
	let max=arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i]>max) {
		max=arr[i];
	}
}
console.log(max)
	return(max);
}
maxArr(77,88,199,81);
//8 - створити функцію яка повертає найменьше число з масиву
function minArr(a,b,c,d) {
	let arr = [a,b,c,d];
	let min=arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i]<min) {
		min=arr[i];
	}
}
console.log(min)
	return(min);
}
minArr(-77,88,199,81);
//9 - створити функцію яка приймає масив чисел та складає 
//значення елементів масиву та повертає його.
function sumElemArr(a,b,c,d) {
	let arr = [a,b,c,d];
	let sum =0
	for (let i = 0; i < arr.length; i++) {
		sum+= arr[i];
	}
	console.log(sum);
	return (sum);
}
sumElemArr(1,2,3,4);

//10 - створити функцію яка приймає масив чисел 
//та повертає середнє арифметичне його значень.
function middleSum(a,b,c,d) {
	let arr =[a,b,c,d];
	let sum =0
	for (let i = 0; i < arr.length; i++) {
		sum+= arr[i];
	}
	let middleSum = sum/arr.length;
	console.log (middleSum);
	return (middleSum);
}
middleSum (1,2,3,4)
//11 - Створити функцію яка приймає масив будь яких объектів, 
//та повертає значення кількості об'єктів в масиві
function arrLenght(a,b,c,d) {
	let arr = [a,b,c,d];
	console.log(arr.length)
}
arrLenght (true,2,'good',4)
//12 - Створити функцію яка приймає масив будь яких объектів, 
//та повертає загальн кількість полів в них
// ??? Не знаю як будь-яку кількість прийняти;
function objectArr(a,b,c,d) {
	let objectArr=[a,b,c,d];
	console.log(objectArr.length);
	return(objectArr.length);
}
 objectArr(5,45,98,42);
//13 - створити функцію  яка скаладає значення елементів з 
//однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function arraySumator(arr1,arr2) {
	const resultArr=[];
	for (let i = 0; i < arr1.length; i++) {
		const sumOfElement = arr1[i]+arr2[i];
		resultArr.push(sumOfElement);
	}
	return resultArr;
}
let someArr =arraySumator([1,2,3,4],[2,3,4,5])
console.log (someArr);
//14 - *** приймає масив та число "i", 
//та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function intemChanger(array,i) {
	const buffer = array[i];
	array[i]= array [i+1];
	array [i+1]=buffer;
	console.log(array)
}
intemChanger([1,2,3,5,4,6,7,8,9],3);

//15 - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

//дуже простий код але мене заклинило -- списав його ну але зрозумів і то добре.
function arrOfNum (array) {
   let arr = [];

    for(let num of array) {
     if(num !== 0) {
      arr.push(num); 
      }  
	 }


    for(let num of array) {
     if(num === 0) {
      arr.push(num); 
      }   
    }
    console.log(arr);
  }
  arrOfNum([0, 7, 7, 0, 0, 6, 0, 8, 1, 3, 55, 0.23, 0, 10, 0]);
// Створити функцію яка :
//16 - Додає в боді блок з текстом "Hello owu"
function helDiv() {
	let helDiv=  document.createElement ('div');
helDiv.style.background = 'blue';
helDiv.style.height='100px';
helDiv.style.width='100px';
document.body.appendChild(helDiv);
helDiv.innerText='Hello owu';
	}

 helDiv() ;
	//17 - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function parAgraf(a,b) {
	let parAgraf =document.createElement(a);
parAgraf.innerText=b;
document.body.appendChild (parAgraf);	
}
parAgraf('p','cccSSS')
//11
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

//19 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
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

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
// "

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