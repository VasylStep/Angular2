
////1
// let hello = "hello";
// hello = 'hay';

// console.log(hello);
// alert(hello);
// document.write(hello);

// let owu = 'owu';
// owu = 'home';

// console.log(owu);
// alert(owu);
// document.write(owu);

// let com = 'com';
// com = 'bym';

// console.log(com);
// alert(com);
// document.write(com);

// let ua = 'ua';
// ua = 'matherlend';

// console.log(ua);
// alert(ua);
// document.write(ua);

// let good = true;
// good = 'будьшо';
// console.log(true);
// alert(true);
// document.write(true);

// let bad = false;
// bad = 'ніщо';

// console.log(false);
// alert(false);
// document.write(false);

// let fig1 = 1;
// fig1 = 11;

// console.log(fig1);
// alert(fig1);
// document.write(fig1);

// let fig10 = 10;
// fig10 = 101;

// console.log(fig10);
// alert(fig10);
// document.write(fig10);

// let fig999 = -999;
// fig999 = 999;

// console.log(fig999);
// alert(fig999);
// document.write(fig999);

// let fig123 = 123;
// fig123 = 321;

// console.log(fig123);
// alert(fig123);
// document.write(fig123);

// let fig314 = 3.14;
// fig314 = 134;

// console.log(fig314);
// alert(fig314);
// document.write(fig314);

// let fig27 = 2.7;
// fig27 = 72;

// console.log(fig27);
// alert(fig27);
// document.write(fig27);

// let fig16 = 16;
// fig16 = 61;

// console.log(fig16);
// alert(fig16);
// document.write(fig16);
////3

// const age = 16;
// const volume = 2.5;
// const radius = 18;

// const colour = 'red';
// const weather = 'san';
// const winter = 'snow';

// console.log(age);
// alert(age);
// document.write(age);

// console.log(volume);
// alert(volume);
// document.write(volume);

// console.log(radius);
// alert(radius);
// document.write(radius);

// console.log(colour);
// alert(colour);
// document.write(colour);

// console.log(weather);
// alert(weather);
// document.write(weather);

// console.log(winter);
// alert(winter);
// document.write(winter);

////4

// document.write('<br>');

// const name = prompt('Введіть імя');
// const surname = prompt('Введіть прізвище');
// const paternal = prompt('Введіть по батькові');

// console.log(name);
// alert(name);
// document.write(name);

// console.log(surname);
// alert(surname);
// document.write(surname);

// console.log(paternal);
// alert(paternal);
// document.write(paternal);

// document.write('<br>');

// const person = name + surname + paternal;
// console.log(person);
// alert(person);
// document.write(person);
////7
// const one = prompt("Перше число");
// const two = prompt("Друге число");
// const three = prompt("Третє число");
// console.log(one);
// console.log(+one);
// console.log(two);
// console.log(+two);
// console.log(three);
// console.log(+three);
////8
// const one1 = prompt("Перше число1");
// const two2 = prompt("Друге число2");
// const three3 = prompt("Третє число3");
// const four4 = prompt("Четверте число4");

// console.log(parseInt(one1) + parseInt(two2) + parseInt(three3) + parseInt(four4));
////9
// const one11 = prompt("Перше число1,1");
// const two22 = prompt("Друге число2,1");
// const three33 = prompt("Третє число3,1");
// const result = (parseFloat(one11) + parseFloat(two22) + parseFloat(three33));

// console.log(result);
////10
// const one111 = +prompt("Перше число1,1");
// const two222 = +prompt("Друге число2,1");
// const three333 = +prompt("Третє число3,1");
// const result2 = (one111) + (two222) + (three333);

// console.log(Math.round(result2));

// //11

// const base = +prompt("Число");
// const exponent = +prompt("Степінь");

// base1 = Math.round(base);
// exponent1 = Math.round(exponent);
// console.log(Math.pow(base1, exponent1));

////12
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;

// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
// console.log(typeof (d));

////13
// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 ===6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false (не розумію чого один знак = працює а три знаки === не працює)
// 123 === '123' -> false
// 123 == '123' -> true

////14
// console.log(132 > 100 && 45 < 12);//false
//console.log(34 > 33 && 23 < 90);//true
//console.log(99 > 100 && 45 > 12); //false
//console.log(132 > 100 || 45 < 12);//true
//console.log(111 > 11 || 45 < 111);//true
//console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));//true
//console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));//true
//console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12)); //false
//console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));//true
// console.log(!!'-1');//true (але не до кінця зрозумів -- то типу !! -- дає команду для перетворення в тру або фальш?)
// console.log(!!-1);//true (але не до кінця зрозумів)
// console.log(!!'0');//true (але не до кінця зрозумів)
// console.log(!!'null');//true (але не до кінця зрозумів)
// console.log(!!'undefined');//true (але не до кінця зрозумів)
// console.log(!!(3 / 'owu')); //false (але не до кінця зрозумів)
// console.log((111 > 11 || 45 < 111) || !!'0');//true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));//false 


////CLASS

// //1
// let str = "Привіт";
// let num = 123;
// let flag = true;
// let txt = "true";
// console.log(typeof (str));
// console.log(typeof (num));
// console.log(typeof (flag));
// console.log(typeof (txt));
//2

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

//3
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

//4

// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s);

//5

// let heightC = 10;
// let dC = 4;
// let v = Math.PI * dC * dC / 4 * heightC;
// console.log(v);

//6

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
// console.log(k);

//7

// let str = 'Hello world';
// document.write(str);
// alert(str);
// console.log(str);

//8

// alert('Ваше ПІО,\n Ваш вік\n Ваше хобі ');

//9
// let str1 = 'Хто ';
// let str2 = 'ти ';
// let str3 = 'такий';
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);

//10

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");

// document.write(str / 2 + "<br/>");

//11

// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));

//12


// let str = prompt("Enter something", "ho-ho")
// console.log(str);

//13


// let a = +prompt('Введіть перше число');
// let b = +prompt('Введіть друге число');
// let c = (a + b)
// alert(c);

//14


// let d = prompt('Введіть імя ', 'Василь ');
// let c = prompt('Введіть прізвище ', 'Вертипорох ');
// let k = prompt('Введіть вік ', '41');
// alert('Доброго вечора ' + d + c + ',мої вітання що вам ' + k);








// ////ДОП1

// let number1 = +prompt("Введіть першу цифру");
// let number2 = +prompt("Введіть другу цифру");
// let number3 = +prompt("Введіть третю цифру");

// if (number1 < number2 && number1 < number3 && number2 < number3) {
//    console.log(number1, number2, number3);
// }
// else
//    if (number2 < number1 && number2 < number3 && number1 < number3) {
//       console.log(number2, number1, number3);

//    }
//    else
//       if (number2 < number1 && number2 < number3 && number3 < number1) {
//          console.log(number2, number3, number1);

//       }
//       else {
//          console.log(number3, number2, number1)
//       }


// // ////ДОП2

// const colour = prompt('Введіть колір світлофора')

// switch (colour) {
//    case 'Зелений':
//       document.write('Можна йти');
//       document.write('<br>');
//       break;

//    case 'Жовтий':
//       document.write('Увага. Чекати наступне світло');
//       document.write('<br>');
//       break;

//    case 'Червоний':
//       document.write('Стояти')
//       document.write('<br>');
//       break;

//    case 'Жовтий Блимає':
//       document.write('Світлофор поломаний')
//       document.write('<br>');
//       break;

//    default:
//       document.write('Коректно введіть світло')
//       document.write('<br>');
//       break;
// }

////ДОП3































