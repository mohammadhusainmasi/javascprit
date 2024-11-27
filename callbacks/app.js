// // // // // console.log("one");
// // // // // console.log("two");

// // // // // setTimeout(() => {
// // // // //     console.log("hello");
// // // // // }, 2000) //timeout;

// // // // // console.log("three");
// // // // // console.log("four");

// // // // function sum(a, b) {
// // // //     console.log(a+b);
// // // // }

// // // // function calculator(a, b, sumcallback) {
// // // //  sumcallback(a, b);
// // // // }

// // // // calculator(1, 2, (a,b) => {
// // // //     console.log(a+b);
// // // // }); 

// // // const hello = () => {
// // //     console.log("hello");
// // // }

// // // setTimeout(hello, 3000); 

// // //nesting

// // letage = 19;
// // if(age >= 18) {
// // if(age >= 60) {
// //     console.log("senior")
// //  } else {
// //     console.log("middle");   
// //  }
// // } else {
// //     console.log("child");
// // }

// for(let i=0; i<5; i++) {
//     let str = "";
//     for(let j=0; j<5; j++){
//         str = str + j;
//         console.log(j);
//     }
//     console.log(i, str);
// }


let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occurred");
});

function getData(dataId, getnextdata) { 
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            if(getnextdata) {
                getnextdata();
            }
        }, 2000);
    })
}

// //callback hell
// getData(1, () => {  
   
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     })
// });



 