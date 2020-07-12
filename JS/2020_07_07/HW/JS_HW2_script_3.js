// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий 
// -- отримує всі елементи 'a' та додає їм клас anchor 
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення 


// // -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let idElement = document.getElementById('main_header');
// console.log(idElement);
// idElement.style.color = 'red';
// let ulElement = document.getElementsByTagName('ul');
// console.log(ulElement);
// ulElement[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let liElement = document.getElementsByTagName('li');
// console.log(liElement)
// for (let i = 0; i < liElement.length; i++) {
//    liElement[i].style.width = '50%';
//    liElement[i].style.backgroundColor = 'gray';

// }

// -- отримує всі елементи 'a' та додає їм клас anchor -??
// let aTeg = document.getElementsByTagName('a');
// for (let i = 0; i < aTeg.length; i++) {
//    console.log(aTeg[i]);
//    aTeg[i].classList.add('anchor');

// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу 
//дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aTeg = document.getElementsByTagName('a');
// for (let i = 0; i < aTeg.length; i++) {
//    if (aTeg[i].innerText==='link3') {
//       aTeg[i].style.fontSize='50px';
//    }
// }

//// -- отримує всі елементи 'a' та додає їм клас element_XXX.--??? (не знаю як додати ХХХ) 
//Де XXX - текстовий контент елементу a
// Переписав але не розумію як перевірити чи працює - не зробив одним словом.
// let aTeg = document.getElementsByTagName('a');
// for (let i = 0; i < aTeg.length; i++) {
   
// //aTeg[i].classList.add('element1');
// const a = aTeg[i];
// const aText = a.innerText;
// a.classList.add (`element_${aText}`)

// }



// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header')//???
// console.log(subHeader);
// let colorSub = prompt('Введіть колір');
// for (let i = 0; i < subHeader.length; i++) {
//    subHeader[i].style.color = colorSub;
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// let asd = document.getElementsByClassName ('linkList listElement2');
//   console.log(asd[0].innerText);
  

// pElement.style.padding='40px'; //Не знаю де воно поміняло.???

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
// let colorSub = prompt('Введіть колір');
// for (let i = 0; i < sub.length; i++) {
//    sub[i].style.backgroundColor= colorSub;
// }

//// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо 
//текст елемнту = content 2 segment . Колір отримати з prompt()

// let sub = document.getElementsByClassName('sub-header');
// let colorSub = prompt('Введіть колір');
// for (let i = 0; i < sub.length; i++) {
//    if (sub[i].innerText==='content 2 segment') {
//       sub[i].style.color = colorSub;
// }
//    }

// -- отримує елемент з класом content_1 та заміняє  
//в ньому тест на довільний. Текст отримати з prompt()
// let elem =document.getElementsByClassName ('content_1');
// let textSub = prompt('Введіть текст');
// for (let i = 0; i < elem.length; i++) {
//    elem[i].innerText=textSub;
//    }
 

// -- отримати елементи p та змінити їм paddin на довільне значення
// let pElem =document.getElementsByTagName('p');
// for (let i = 0; i < pElem.length; i++) {
//   pElem[i].style.padding='100px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення 

//? Вибиває помилку в консолі але працює -- дуже дивно.
   
// let clasElem =document.getElementsByClassName('text2');
// let textSub = prompt('Введіть текст');
// for (let i = 0; i < textSub.length; i++) {
//   clasElem[i].innerText=textSub;
// }
//

