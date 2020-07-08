// -- Напишіть код,  який за допомоги document.getElementById 
//або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log 
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let getContent = document.getElementById('content');
console.log(getContent);

let getRules = document.getElementById("rules")
console.log (getRules);

getContent.innerText='Дуже складні домашки';
getContent.style.fontSize='48px';
getContent.style.color = 'blue';
getRules.innerText = 'Але треба то якось ліпити-робити';
getRules.style.backgroundColor= 'red';
getRules.style.fontSize='48px';
getRules.style.color = 'blue';

getContent.style.backgroundColor='green';

let tagLi= document.getElementsByTagName('li')

console.log(tagLi)
for (let i = 0; i < tagLi.length; i++) {
   tagLi[i].style.backgroundColor='grey';
   tagLi[i].style.color='red';
   
};

console.log('proba')

let idRules = document.getElementsByClassName('fc bp');

for (let i = 0; i < idRules.length; i++) {
   console.log(idRules[i]); 
   
}


//console.log(idRules[i].classList)

// let divElement = document.getElementsByClassName('fc bp');
// console.log(divElement);

// let divElement = document.getElementsByTagName('div')




