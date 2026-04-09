// scope hai ke app apne  created variables and functions kaha tak use kar sakte ho

// scope - functional scope ,global scope and block scope

//function scope - function ke andar hi use ho sakti hai
//global scope - poore code mein kahi bhi use ho skti hai
//block scope = {} curly braces mein kahi bhi use ho sakti hai

// 1. function abcd() {
//   var a = 12;
// }

// console.log(a);

// 2.
// var a = 12;
// function abcd() {
//   console.log(a);
// }
// abcd();

//execution content (ek hipthtical box h)

//js sabse pahle jaise hi aapka function dekhta hai sabse pahle js banaata hai execution context , ye ek process hai jo ki do different phases mein chalta hai, memory phase and doosre ka naam hai execution phase

//js is - lexical scoping -> ki app kaha par physically available ho ye poori tareeke se depend karta hai ki aap kya access kr paaoge

// function abcd() {
//   let a = 12;
//   function defg() {
//     console.log(a);
//   }
//   defg();
// }
// abcd();

//dynamic scoping -> kaha se call kr rhe ho uspe depend krega ki kya value milegi

// let a = 12;

// function abcd() {
//   console.log(a);
// }

// function defg() {
//   let a = 13;
//   abcd();
// }
// defg();

// closures hote hai function jo ki kisi parent function ke andar ho aur andar waala function return ho raha ho, and retyuring fnc use kare parent function ka koi varible

//faayde- private variables , global pollution

// ye sach hai fnc ke khatam hone pe aapka fnc and uske variables khtm hojaate hai, par jab bhi closure banta hai to aapka fnc aur uske variables ka ek backlink bnaya jaata hai aur uska naam hota hai [[environment]]

// function abcd() {
//   let a = 13;
//   return function () {
//     console.log(a);
//   };
// }
// let fnc = abcd();
// fnc();

//private counter

// function countForMe() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }
// let count = countForMe();
// count();
// count();
// count();

//incapsulation

// function clickLimiter() {
//   let click = 0;
//   return function () {
//     click++;
//     if (click < 5) {
//       console.log(`clicked : ${click} times `);
//     } else {
//       console.error("LIMIT EXCEEDED");
//     }
//   };
// }

// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
