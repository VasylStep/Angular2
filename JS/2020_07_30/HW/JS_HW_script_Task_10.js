//перебираю з розбору домашки і намагають розібратись з функціями.
function userCard(number) {
   let balance =100;
   let transactionLimit=100;
   const histiryLogs = [];
   let key = number <=3
      ?number
      : 'Key not valid';
   function getCardOption() {
         return   {key: key,
         balance:balance,
         transactionLimit: transactionLimit,
          histiryLogs: histiryLogs,
         }
   }
   function addHistory(operationType,credits,operationTime) {
       histiryLogs.push({operationType,credits,operationTime})  
   }
   function putCredits(credit) {
         let now = new Date(); // шо тут робить Date -- шо то таке,
         let date = now.toLocaleDateString();
         let time = now.toLocaleTimeString ();
         if(credit>0){
               balance+=credit;
               addHistory('putCredits',credit,date+' '+time);
         }
   }
   function takeCredits(credit) {
      let now = new Date(); // шо тут робить Date -- шо то таке,
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString ();
      if (credit<=transactionLimit&& credit<=balance) {
          balance-=credit;
          addHistory('takeCredits', credit, date+' '+time );
      } else { 
       console.log( 'Eror in takeCredits');
      }
   }
   function setTransactionLimit(number) {
      let now = new Date(); // шо тут робить Date -- шо то таке,
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString ();
      if (number>0) {
            transactionLimit=number;
            addHistory('setTransactionLimit',number,date+' '+time);   
      } 
   }
//    function transferCredits(sum,card) {
//       let now = new Date(); // шо тут робить Date -- шо то таке,
//       let date = now.toLocaleDateString();
//       let time = now.toLocaleTimeString ();
//       let credit=sum*1.005;
//       if (credit<=transactionLimit&& credit<=balance) {
//             addHistory('transferCredits',sum,card,date+' '+time);
//       }      // не дописав - баагто ускладнювати попереднього кодду --- шо не хочеться робити до треба розібратись 
            
//       }

   return {
         getCardOption,
         putCredits,
         takeCredits,
         setTransactionLimit,
      //    transferCredits
      //getKey
   }
}

// const userCard1=new userCard(1);

// console.log('userCard1.putCredits (120);', userCard1.putCredits (120))
// //serCard1.takeCredits(100);

// console.log('userCard1.setTransactionLimit(200)', userCard1.setTransactionLimit(200))
// console.log('userCard1.takeCredits();', userCard1.takeCredits(200))
// console.log('(userCard1.getCardOption())', (userCard1.getCardOption()))


// Наступна адача -- розбір по відео домашки -- не розібрався - запутався в умові задачі.
class UserAcount {
      constructor (name) {
            this.name=name;
            this.cards = [];
      }
}
UserAcount.prototype.addCard=function () {
      if(this.cards.length<3){
            this.cards.push (new userCard(this.cards.length+1))
      } else {
            console.log('cards limit over')
      }
      
}
UserAcount.prototype.getCardByKey = function (number) {
      return this.cards.find (value=>value.getCardOption().key===number)
      
}


let user1 = new UserAcount ('Vova')
let user2 = new UserAcount ('Taniya')
user2.addCard();
const user1Card1 = user1.getCardByKey (3);
console.log('user1Card1', user1Card1);
user2.getCardByKey (1);
console.log('user2.getCardByKey (1);', user2.getCardByKey (1))


