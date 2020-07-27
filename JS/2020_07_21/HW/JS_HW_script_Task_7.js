//45 - маю питання як працює
//48 - маю питання як працює

//1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const btn=document.getElementById ("myBtn");
// btn.onclick=ev=>{
// 	const text=document.getElementById("text");
// 	text.hidden
// 		?text.hidden=false
// 		:text.hidden=true
// }

//3 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// text.onclick = ev =>{

// 	console.log('ev', ev.target)

// 	btn.style.display = 'none'
// }

//5 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
//та повідомити про це користувача
// const btn=document.getElementById ("myBtn");
// btn.onclick = event => {
// 	const myInpt=document.getElementById ("myInpt");
// 	const value=myInpt.value; // value не розпізналось системою.
// 	// console.log('value', value);
// 	if (value<18&&value>0){
// 		alert ('Yuo are soo yang')
// 	}
// 	if (value<=0 || value>100) {
// 		alert ('Incorect value')
// 	}
// }
//7 - Создайте меню, которое раскрывается/сворачивается при клике
// const a1=document.getElementById ('a1');                      ///тої задачі не зрозумів-- треба запитати ментора
// const subMenu=document.getElementById ('subMenu');
// let flag = false;
// a1.onclick = event => {
// 	if (flag){
// 		subMenu.style.display = 'block';
// 		flag=false;
// 	}else{
// 		subMenu.style.display='none';
// 		flag=true;
// 	}
// }



//9 - Создать список комментариев , 
//пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// задачу зрозумів і розібрався -- не складна але самому дійти не вдається. Нічого прорвемся :)

// let commentArrray = [
// 	{title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem4', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem5', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem6', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem7', body:'lorem ipsum dolo sit ameti'},
// ];

// const content=document.getElementById ('content');
// commentArrray.forEach (item=>{
// 	const div=document.createElement ('div');
// 	const h2=document.createElement ('h2');
// 	const p=document.createElement ('p');
// 	const button=document.createElement ('button');
// 	button.innerText = 'Hide'; 
// 	h2.innerText=item.title; 
// 	p.innerText=item.body;

// 	button.onclick =()=>{
// 		p.hidden
// 		?p.hidden=false
// 		:p.hidden=true
// 	}
// 	div.appendChild (h2);
// 	div.appendChild (p);
// 	div.appendChild (button);
// 	content.appendChild(div);                
// })


//13 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn = document.getElementById ('btn');
// const input1 = document.getElementById ('input1');
// const input2 = document.getElementById ('input2');
// const input21 = document.getElementById ('input21');
// const input22 = document.getElementById ('input22');

// btn.onclick =ev=> {
// 	console.log('input1.value', input1.value)
// 	console.log('input2.value', input2.value)
// 	console.log('input21.value', input21.value)
// 	console.log('input22.value', input22.value)
// }
//17 - Створити функцію, яка генерує таблицю.
//18 Перший аргумент визначає кількість строк.
//19 Другий параметр визначає кліькіть ячеєк в кожній строці.
//20 Третій параметр визначає елемент в який потрібно таблицю додати.
// const content=document.getElementById ("content"); 
// function createTable(rows,cols,tag) {
// 	const table=document.createElement ('table');
// 	for (let i = 0; i < rows; i++) {
// 		const tr = document.createElement ('tr');
// 		for (let j = 0; j < cols; j++) {
// 			const td = document.createElement ('td');
// 			td.innerHTML = i.toString()+j.toString();
// 			tr.appendChild (td);

// 		}
// 		table.appendChild (tr);
// 	}
// 	tag.appendChild (table);
// }
// createTable (10,15,content);   

//23 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//24 При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//25 (Додатковачастина для завдання)

//27 - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [   
// 	{
// 		id:1,
// 		img_url: 'girls_dresses_14.jpg'
// 	},
// 	{
// 		id:2,
// 		img_url: 'edf2d7cffe082179bb0955fb579e76a2.jpg'
// 	},
// 	{
// 		id:3,
// 		img_url: '9.jpg'
// 	},
// ];
// const content = document.getElementById ('content');
// const img = document.createElement('img');
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');

// btn1.innerText = 'Left';
// btn2.innerText = 'Right';
// let index = 0;
// img.width = 300;
// img.height = 300;
// img.src = imgArray[index].img_url;
// content.appendChild (img);
// content.appendChild (btn1);
// content.appendChild (btn2);
// btn1.onclick = () => {
// 	index-1<0
// 	? index = imgArray.length -1
// 	: index = index-1;
// 	img.src=imgArray[index].img_url
// }
// btn2.onclick = () => {
// 	index+1>imgArray.length -1
// 	? index = 0
// 	: index = index+1
// 	img.src=imgArray[index].img_url
// }






//30 - Сворити масив не цензцрних слів.

// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// списав - сам не зміг зробити.
// let abuses = ['бевзень', 'бусурман', 'бешкетник', 'вишкребок', 'волоцюга', 'гаспид', 'дідько', 'дурбелик'];
//   // let freeText = document.forms.myForm5.freeText;
//   let freeText =document.getElementById ('freeText')

//   let fifthButton =document.getElementById ('fifthButton')

//   fifthButton.onclick = () => {
//    abuses.forEach(abuse => {
//     if (freeText.value === abuse) { 
//      alert('Ану не лаятись!');
//     }  
//    });
//    freeText.value = alert ('Вух пронесло'); }

//37 - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку




//45 -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const arrayH2  = document.getElementsByTagName ('h2'); // Треба шоб ментор пояснив ту прогу для чого якор і.т.д
// const content=document.getElementById ('content');
// const wrap=document.getElementById('wrap');
// const ul=document.createElement ('ul');
// for (let i = 0; i < arrayH2.length; i++) {
// 	const li=document.createElement('li');
// 	const a =document.createElement ('a');
//   let yakor = 'yakor'+i;                            /// Вже питався - але не розумію як воно працює -- 
//                                                           //як переходить по якорям
//   a.href='#'+yakor;                                       // Як воно знає шо коли тицьк --- треба йти на такий то якор.
// 	arrayH2[i].setAttribute('id',yakor);                    //   не розумію
// 	a.innerHTML=arrayH2[i].innerText;
// 	li.appendChild(a);
// 	ul.appendChild(li);
// }
// content.appendChild(ul);

// content.style.width = '30%';
// wrap.style.width='70%';
// content.style.float='left';
// wrap.style.float='left';

//48 -- взять массив пользователей
let usersWithAddress = [
	{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
	{ id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
	{ id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
	{ id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
	{ id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
	{ id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
	{ id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
	{ id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
	{ id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
	{ id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
	{ id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const content = document.getElementById('content'); // не зрозумів функцій з того коду
const userDiv = document.createElement('div');
userDiv.appendChild(renderContent(usersWithAddress));

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');

const label1 = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');

const button = document.createElement('button');
label1.innerText = 'со статусом false';
label2.innerText = 'старше 29 лет';
label3.innerText = 'город киев';

button.innerText = 'Filter On';

input1.type = 'checkbox';
input2.type = 'checkbox';
input3.type = 'checkbox';

content.appendChild(userDiv);

content.appendChild(label1);
content.appendChild(input1);
content.appendChild(label2);
content.appendChild(input2);
content.appendChild(label3);
content.appendChild(input3);
content.appendChild(button);

button.onclick = ev => {
	let myArray = JSON.parse(JSON.stringify(usersWithAddress))                                 // не зрозумів функцій з того коду
	if (input1.checked) myArray = myArray.filter(value => !value.status);
	if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
	if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');

	userDiv.innerHTML = '';
	userDiv.appendChild(renderContent(myArray));

}


function renderContent(array) {                                         // не зрозумів функцій з того коду
	const main = document.createElement('div');
	array.forEach(item => {
		const div = document.createElement('div');
		const h3 = document.createElement('h3');
		// h3.innerText=item.name;
		div.innerHTML = JSON.stringify(item);
		// div.appendChild (h3);
		main.appendChild(div);
	});
	return main;
}



//70 *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


//76 *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


