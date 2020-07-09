//1 - создать 5 объектов. В каждом объекте не менее 3х полей. 
//Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let Object1= {nameA:'kokosA', statusA:'oneA', adresA:'streetA'}
let Object2= {nameB:'kokosB', statusB:'oneB', adresB:'streetB'}
let Object3= {nameC:'kokosC', statusC:'oneC', adresC:'streetC'}
let Object4= {nameD:'kokosD', statusD:'oneD', adresD:'streetD'}
let Object5= {nameF:'kokosF', statusF:'oneF', adresF:'streetF'}
//2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. 
//Опишите что угодно, машину, картину, болт... 
//Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let man1 = { nameA: 'kokosA', skillsA : ['javaA','jsA'] , wifeA: { nameA: 'cherryA' } };
let man2 = { nameB: 'kokosB', skillsB : ['javaB','jsB'] , wifeB: { nameB: 'cherryB' } };
let man3 = { nameC: 'kokosC', skillsC : ['javaC','jsC'] , wifeC: { nameC: 'cherryC' } };
let man4 = { nameD: 'kokosD', skillsD : ['javaD','jsD'] , wifeD: { nameD: 'cherryD' } };
let man5 = { nameF: 'kokosF', skillsF : ['javaF','jsF'] , wifeF: { nameF: 'cherryF' } };
//3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

//4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// for (let keys in Object1) {
//    console.log(keys);
// };
// for (let keys in Object2) {
//    console.log(keys);
// };for (let keys in Object3) {
//    console.log(keys);
// };
// for (let keys in Object4) {
//    console.log(keys);
// };
// for (let keys in Object5) {
//    console.log(keys);
// };
// for (let keys in man1) {
//    console.log(keys);
// };
// for (let keys in man2) {
//    console.log(keys);
// };
// for (let keys in man3) {
//    console.log(keys);
// };
// for (let keys in man4) {
//    console.log(keys);
// };
// for (let keys in man5) {
//    console.log(keys);
// };

//5  Создать массив из 10 объектов cars и заполнить его машинами с полями модель, 
//год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
car1={model:'MersA',year:'1980',power:'1.0',colour:'red'},
car2={model:'MersB',year:'1981',power:'1.1',colour:'green'},
car3={model:'MersC',year:'1982',power:'1.2',colour:'red'},
car4={model:'MersD',year:'1983',power:'1.3',colour:'green'},
car5={model:'MersF',year:'1984',power:'1.4',colour:'grey'},
car6={model:'MersG',year:'1985',power:'1.5',colour:'red'},
car7={model:'MersH',year:'1986',power:'1.6',colour:'grey'},
car8={model:'MersK',year:'1987',power:'1.7',colour:'green'},
car9={model:'MersL',year:'1988',power:'1.8',colour:'red'},
car10={model:'MersW',year:'1989',power:'1.9',colour:'red'}
];
//6 - Создать массив объектов cities и заполнить его объектами с полями 
//название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [çity1={name:'AAA',population:'BBB',country:'CCC',region:'DDD'},];
//7 - Создать массив объектов cars и заполнить его машинами с полями модель, 
//год выпуска, мощность, цвет, водитель. 
//Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2 = [{model:'Mercrdes',year:'1980',power:'1.0',colour:'red'},
driver={name:'Kokos',years:'1980', sex:'man',experience:'15'}] 
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i=0;
// while (i<cities.length) {
// console.log(cities[i]);
// i++;
// }

// let i=0;
// while (i<cars2.length) {
// console.log(cars2[i]);
// i++;
// }

// let i=0;
// while (i<cars.length) {
// console.log(cars[i]);
// i++;
// }



// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);
   
// }
// for (let i = 0; i < cities.length; i++) {
//    console.log(cities[i]);
   
// }
// for (let i = 0; i < cars2.length; i++) {
//    console.log(cars2[i]);
   
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let i of cars) {
//    console.log(i);
// }

// for (let i of cities) {
//    console.log(i);
// }

// for (let i of cars2) {
//    console.log(i);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let jsonObject1=JSON.stringify(Object1); console.log(jsonObject1);
// let jsonObject2=JSON.stringify(Object2); console.log(jsonObject2);
// let jsonObject3=JSON.stringify(Object3); console.log(jsonObject3);
// let jsonObject4=JSON.stringify(Object4); console.log(jsonObject4);
// let jsonObject5=JSON.stringify(Object5); console.log(jsonObject5);

// - взять json из задания 11 и превратить их обратно в объекты.
// jsonObject1=JSON.parse(jsonObject1); console.log(jsonObject1);
// jsonObject2=JSON.parse(jsonObject2); console.log(jsonObject2);
// jsonObject3=JSON.parse(jsonObject3); console.log(jsonObject3);
// jsonObject4=JSON.parse(jsonObject4); console.log(jsonObject4);
// jsonObject5=JSON.parse(jsonObject5); console.log(jsonObject5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i of cars) {
//    i= JSON.stringify(i);
//    console.log(i);
// }

// for (let i of cars2) {
//    i= JSON.stringify(i);
//    console.log(i);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let i of cities) {
//    i= JSON.stringify(i);
//    console.log(i);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let jsonCars2 = [];
// for (let i = 0; i < cars2.length; i++) {
//    jsonCars2[i]=JSON.stringify(cars2[i]);
//    console.log(jsonCars2[i]);  
// }
// - Создать массив пользователей. 
//У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//    {user1:'XXX',age: 25, 
//    skils:['drive','english']},
//    {user2:'YYY',age: 25, 
//    skils:['drive','english']},
//    {user3:'ZZZ',age: 25, 
//    skils:['drive','english']}];
   // - Создать массив пользователей. 
//У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. 
//Скопировать все skills всех пользователей в отедльный массив
///???? (не знаю як зробити);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
  let users2 = [
   {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
   {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
   {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
   {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
   {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// не розумію чого один код працює а інший не працює
//цей код  працює -- тепер зрозумів різницю
// for (let i = 0; i < users2.length; i++) {
//    console.log (users2[i]);
//    for (let j = 0; j < users2[i].skills.length; j++) { 
//       console.log(users2[i].skills[j]);
//    }
//    }
//цей код працює
// for (let u of users2) {
//    console.log (u);
// //    for (let i = 0; i < u.skills.length; i++) {
// //       console.log(u.skills[i]);
// //    }
// }


// - З масиву users за допомогою циклу витягнути адреси користувачів 
// і записати (скопіювати) їх в інший порожній масив.
// Витягнув з готового масиву skills -- шоб не створювати новий масив.

//????????????????? не знаю як витягнути адреси з обєкту.
            			let users = [{
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			}];
//????????????????? не знаю як витягнути адреси з обєкту.

   // let home = [];
   // for (let i = 0; i < users.length; i++) {
   //    //console.log (users[i]);
   //    for (let j = 0; j < users[i].address.length; j++) {
   //       home[j]=users[i].address[j]
   //       console.log(home);
   //    }
   
   //    }



// - За допомоги циклу проітерувати  масив users, 
//записати кожного юзера в сівй блок за допомоги document.createElement. 
//Всі данні в одному блоці.

for (let u of users) {
   
  let userDiv = document.createElement('div');
  userDiv.style.background= 'green';
  userDiv.style.height = '200px';
  userDiv.style.margin = '25px';

  
  document.body.appendChild(userDiv);
  userDiv.innerText=JSON.stringify(u);
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
///****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий 
//принадлежит какому посту