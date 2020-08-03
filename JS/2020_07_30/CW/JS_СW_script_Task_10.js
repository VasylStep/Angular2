function clas() {
      let x = 0;
      return () => {
            x++
            console.log(x);
      }
}

clas()()
clas()()

clas()()



// let clas1=clas()
// clas1()
// clas1()
// clas1()
// clas1() 
// clas1()
// clas1()
// clas1()

// let numbers = [1, 1, 11, 2, 5, 8, 9, 6, 4, 0, 0, 8, 8, 5, 5, 1, 1, 6, 6];
// let uniqNumbers = new Set;


// numbers.forEach(number => {
//       uniqNumbers.add(number)     
// });

// console.log(uniqNumbers )

// let viktor ={
  
//       name: 'Viktor',
//       age: 24,
//       payment: 999,
//       position:'Middle'
// }

// console.log('viktor', viktor)
// function changePayment(changeRate, newPosition) {
//       this.payment+=changeRate;
//       this.position=newPosition;   
//       console.log (this); 
// };

// changePayment.call(viktor, 1000, 'Senior');

