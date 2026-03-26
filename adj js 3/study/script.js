// more topics in oops - [class expersion , hoisting , inheritence , getter & setter]

//class expersion (hositing not possible)
// let Animal = class{
//     constructor(){
//         this.name = "dodo";
//         this.breed = "dog";
//     }
// }

// let an = new Animal();


//inheritence (agar koi class hai jisme kuch kuch likha hai and aap maante ho ek nayi class usi ka extension hai to aap wo saare features puraani class se borrow kar skte ho and nayi class mein use kar skte ho and apne new features bhi bana skte ho)

// class Animal{
//     constructor(){
//         this.hands = 2;
//         this.legs =2;
//     }
//     eat(){}
//     breath(){}
// }

// class Crab extends Animal{
//     constructor(){
//         super()
//         this.legs=8
//         this.color = 'red';
//     }
//     susu(){}
// }

// let cr = new Crab()

// -----------------------------

//private variables

// class Animal{
//     constructor(){
//         this._age = 12;
//     }

//     set setage(val){
//         if(val<0){
//             console.log("not")
//             return;
//         }
//         this._age = val;
//     }
//     get age(){
//         return this._age
        
//     }
// }

// let an = new Animal();
// an.setage = 47
// console.log(an.age)