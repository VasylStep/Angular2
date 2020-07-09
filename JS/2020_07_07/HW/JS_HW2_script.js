// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let house = {
   room: 'colour', floor: 6, status: 'empty', side:'son', neighbor: 'good'
};

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let arr = [
   ['dog1', 'dog2', 'dog3', 'dog34','dog5'],
   ['person1','person2','person3','person4','person5' ],
   ['car1','car2','car3','car4','car5']
];

console.log (arr);


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let table = {
   sideA: 2, 
   sideB:3, 
   color:[ 'brown', 'green', 'red'], 
   material:{tree: 'oak', metal: 'alunium'}, 
   comfort:'middle'};
   console.log(table);

   // Дан массив:
   let users = [
      {name: 'vasya', age: 31, status: false},
      {name: 'petya', age: 30, status: true},
      {name: 'kolya', age: 29, status: true},
      {name: 'olya', age: 28, status: false},
      {name: 'max', age: 30, status: true},
      {name: 'anya', age: 31, status: false},
      {name: 'oleg', age: 28, status: false},
      {name: 'andrey', age: 29, status: true},
      {name: 'masha', age: 30, status: true},
      {name: 'olya', age: 31, status: false},
      {name: 'max', age: 31, status: true}
   ];
            console.log(users);
   console.log(users[7].status);
   console.log(users[4].status);
   console.log(users[users.length-2].name);
   console.log(users[6].age);
   console.log(users[3].age);
   console.log(users[5].age,users[5].name);
   console.log(users[5].age,users[5].status);
//    - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести 
//в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!






// let greenDiv = document.getElementById('divka');

// console.log(greenDiv);

// greenDiv.style.backgroundColor = 'yellow';
// // greenDiv.innerText = '<b> HELLO </b>';
// greenDiv.innerHTML = '<b> HELLO </b>';

// let boldT = document.getElementsByClassName('boldText');

// boldT[0].style.color = 'silver';

// for (let i = 0; i < boldT.length; i++) {
//   boldT[i].style.fontSize = '24px';
//   boldT[i].innerText = `JSCX-JUNE-202${i}`
// }
// ;


// let allDivs = document.getElementsByTagName('div');

// console.log(allDivs);

// let green = Math.random() * 255;
// let red = Math.random() * 255;
// let blue = Math.random() * 255;

// allDivs[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// allDivs[1].style.width = '200px'
// allDivs[1].style.height = '200px'
// allDivs[1].style.margin = '20px';


// let smallDivka = document.createElement('div');
// smallDivka.style.backgroundColor = `pink`;
// smallDivka.style.width = '50px';
// smallDivka.style.height = '50px';

// smallDivka.classList.add('myOwnClass', 'myClass');
// // smallDivka.classList.add('myClass');
// smallDivka.classList.remove('myOwnClass');
// console.log(smallDivka.classList);

// document.body.appendChild(smallDivka);


// let allP = document.getElementsByTagName('p');

// for (let i = 0; i < allP.length; i++) {
//   const singleP = allP[i];

//   if (i % 2 === 0) {
//     singleP.classList.add('myOwnClass');
//   }
// }

// const students = [
//   {name: 'Sergey', age: 20},
//   {name: 'Julia', age: 18},
//   {name: 'Vova', age: 25},
//   {name: 'Dima', age: 9},
//   {name: 'Rostik', age: 2},
// ];

// for (let i = 0; i < students.length; i++) {
//   let studentDiv = document.createElement('div');

//   studentDiv.style.backgroundColor = 'pink';
//   studentDiv.style.margin = '25px';
//   studentDiv.innerHTML = `
//             Hello darling. My name is ${students[i].name} <br>
//             And I am ${students[i].age} years old`;

//   document.body.appendChild(studentDiv);
// }
// let obj = {
//   name: "Ivan",
//   wife: undefined,
//   payment: NaN,
//   son: `Dima`,
//   age: 22,
//   work: [{position: 'Dev'} , {position: 'Buiduer'}]
// }

// let jsonUser = JSON.stringify(obj);

// console.log(jsonUser);
// console.log(typeof jsonUser);

// console.log(obj);


// let parsedUser = JSON.parse(jsonUser);

// console.log(parsedUser);

//123