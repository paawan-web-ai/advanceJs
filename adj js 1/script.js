//opp - object oriented programing
//code ko  objects classes and functions mai baat dena

// class -> sancha
// constructor -> automatic chlne wala

// class Remote {
//   constructor(product, price, color) {
//     this.product = product;
//     this.price = price;
//     this.color = color;
//   }
//   powerOn() {
//     console.log("the machine is On now");
//   }
//   powerOff() {
//     console.log("the machine is off now ");
//   }
// }

// let remote1 = new Remote("lenovo", 23000, "black");
// let remote2 = new Remote("Daiken", 13200, "white");

// -----------------------------------------------------------------

// class BiscuitMaker {
//   constructor() {
//     // this is a blank obj  contains the value of name
//     this.name = "ParleG";
//     this.price = 5;
//   }
// }
// //new: blank object
// let biscuit = new BiscuitMaker();

// -----------------------------------------------------------------

// class AlooChat {
//   constructor() {
//     this.price = 55;
//     this.oil = "5ml";
//     this.oilBrand = "saffola";
//     this.masale = ["dhaniya", "pudina", "mirch"];
//   }
//   pack() {
//     console.log("aloochat packed");
//   }
//   unpack() {
//     console.log("aloochat unpacked");
//   }
// }

// class chholeChat {
//   constructor() {
//     this.price = 55;
//     this.oil = "5ml";
//     this.oilBrand = "Saffola";
//     this.masaale = ["dhaniya", "pudina", "mirch"];
//   }
// }

// let ac1 = new AlooChat();
// console.log(ac1);
// ac1.pack();

// -----------------------------------------------------------------

class Kitaab {
  constructor(name, price, author, color) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.color = color;
  }
  pannaPalto() {}
  bookmarkLagao() {}
  padhlo() {}
}

let kitaab1 = new Kitaab("science", 1200, "harsh sharma", "white");
let kitaab2 = new Kitaab("moral", 120, "harsh sharma", "black");
let kitaab3 = new Kitaab("computer science", 890, "sarthak sharma", "red");

//prototypes

class Human {
  constructor() {
    this.name = "abcd";
    this.age = 27;
  }
}

//shared memory is prototype
// human class saanslo and khaanakhaao is sharing with h1 and h2
Human.prototype.saanslo = function () {
  console.log("hey");
};
Human.prototype.khaanakhaao = function () {
  console.log("hey");
};

let h1 = new Human();
let h2 = new Human();
