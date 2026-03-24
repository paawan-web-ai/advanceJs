// class Bottle {
//   constructor(color, material, price) {
//     ((this.color = color), (this.material = material), (this.price = price));
//   }

//   fill() {
//     console.log("bottle is filled");
//   }
//   drink() {
//     console.log("drink water");
//   }
// }

// let bottle1 = new Bottle("red", "plastic", 20);

//--------------------------------------------

// class Bottle {
//   constructor() {
//     this.color = "blue";
//     this.material = "plastic";
//     this.price = 130;
//   }
//   fill() {}
//   drink() {}
// }

// let bottle1 = new Bottle();

//--------------------------------------------

// class Bottle {
//   constructor() {
//     this.color = "Blue";
//     this.material = "plastic";
//     this.price = 20;
//   }
// }
// Bottle.prototype.fill = function () {
//   console.log("fill the bottle");
// };
// Bottle.prototype.drink = function () {
//   console.log("drink the water");
// };

// let bottle1 = new Bottle();

//--------------------------------------------

// class Sketch{
//     constructor(){
//         this.character = 'doraemon';
//         this.color = 'blue';
//         this.somefnc = function(){}
//     }
//     // outside the constructor when you add something it goes to the prototype automatically..

//     // speak(){}
//     // walk(){}

// }

// Sketch.prototype.speak=()=>{
//     console.log('speaks')
// }
// Sketch.prototype.walk=()=>{
//     console.log('walks')
// }

// let Stch = new Sketch()

// --------------------------------
//1
// global -> window
//  console.log(this)//window
// --------------------------------

//2
// function -> window
// function abcd(){
//     console.log(this) //window
// }
// abcd()
// --------------------------------

//3
// es5 function inside object -> object
// let obj ={
//     name:'harsh',
//     fnc:function(){
//         console.log(this) // not window its object
//  console.log(this.name)
//     }
// }
// obj.fnc()
// --------------------------------

// es6 function inside object -> window

// let obj ={
//     fnc: ()=>{
//         console.log(this)//window
//     }
// }
// obj.fnc()

// --------------------------------

//4
//es5 function inside es5 function inside object -> window

// let obj={
//     name:'harsh',
//     fnc:function(){
//         function defg(){
//             console.log(this) //window
//         }
//         defg()
//     }
// }

// obj.fnc();
// --------------------------------

//5
//es6 function inside es5 function inside object -> object

// let obj = {
//     name:'harsh',
//     fnc:function(){
//         defg =()=>{
//             console.log(this) //object
//         }
//         defg()
//     }
// }
// obj.fnc()
// --------------------------------

// call, apply, bind

// ek function mein this ki value window hoti hai, agar aap chaahte ho ki wo value window na ho par koi aur object ho tab aap use kr skte ho call apply bind ka

// let obj={
//     name:'harsh'
// }

// function abcd(a,b,c){
//     // console.log(this) call
//     // console.log(this,a,b,c) apply
//     console.log(this,a,b,c)
// }

// // abcd.call(obj,1,2,3)
// // abcd.apply(obj,[1,2,3])
// let newfnc = abcd.bind(obj,1,2,3)
// newfnc()

//call -> fnc chalata hai and this ki value set karta hai

//apply -> wahi karta hai jo call karta hai and arguments mein pahli value this ki and doosri value array hoti hai

//bind -> wahi karta hai jo call karta hai and aapko naya fnc deta hai
