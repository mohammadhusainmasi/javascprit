// // // // // // const student = {
// // // // // //     fullName : "Mohammadhusain Masi",
// // // // // //     marks : 99.99,
// // // // // //     printMarks: function () {
// // // // // //         console.log("marks = ", this.marks); //student.marks
// // // // // //     }, 
// // // // // // };

// // // // // const employee = {
// // // // //     calcTax () {
// // // // //         console.log("tax rate is 10%");
// // // // //     },
// // // // // };

// // // // // const karanAujla = { 
// // // // //     salary : 100000,
// // // // //     calcTax() {
// // // // //         console.log("tax rate is 20%");
// // // // //     }
// // // // // }

// // // // // karanAujla.__proto__ = employee;


// // // // class Toyotacar {
// // // //     constructor(brand, mileage) {
// // // //         console.log("creating new object");
// // // //         this.brand = brand;
// // // //         this.mileage = mileage;
// // // //     }
// // // //     start() {
// // // //         console.log("start");
// // // //     } 

// // // //     stop() {
// // // //         console.log("stop");
// // // //     }

// // // // }   

// // // // let fortuner = new Toyotacar("fortuner", 10); //constructor
// // // // console.log(fortuner);
// // // // let lexus = new Toyotacar("lexus", 12); //constructor
// // // // console.log(lexus);

// // // class parent {
// // //     hello() {
// // //         console.log("hello");
// // //     }
// // // }

// // // class child extends parent {}

// // // let obj = new child();

// // class person{
// //     constructor(name) {
// //         console.log("enter parent constructor");
// //         this.species = "homo sapiens";  
// //         this.name = name;
// //     }
// //     eat() {
// //         console.log("eat");
// //     }

// //     sleep() {
// //         console.log("sleep");
// //     }

// //     work() {
// //         console.log("do nothing");
// //     }
// // } 
    
// // class Engineer extends person{
// //     constructor(branch) {
          
// //         super(name);// to invoke parent class constructor    
// //     }
// //     work() {
// //          super.eat();   
// //         console.log("solve problems, build something");
// //     }
// // }

// // class doctor extends person {
// //     work() {
// //         console.log("solve problems, build something");
// //     }
// // }

// // let engobj = new Engineer();


// let DATA = "secret information";

// class user{
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
   
//     viewdata() {
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends user {
//     editdata() {
//         DATA = "some new value"; 
//     }
// } 

// let student1 = new user("mammu", "mmu@gmail.com");
// let student2 = new user("abbas", "abu12@gmail.com");

// let teacher1 = new user("dean", "dean@clg.com");

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);