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


// function asyncfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1....");
// asyncfunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncfunc2().then((res) => {
//     })
// })


// const getpromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success"); 
//     });  
// }

// let promise = getpromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("rejected", err);    
// })


function api() {
    return new Promise((resolve, reject) => {
        console.log("weather data");
    })
}


function getData(dataId) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success"); 
        }, 3000); 
    })
}

//async-await
async function getalldata(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5); 
}

 //promise chain

console.log("getting data1....");
getData(1)
  .then((res) => {
    console.log("getting data2....");
    return getData(2);
})
  .then((res) => {
    console.log("getting data3....");
    return getData(3);
})
  .then((res) => {
    console.log(res);
})

//callback hell
// getData(1, () => {  
//     console.log("getting data2....");
//     getData(2, () => {
//       console.log("getting data3....");  
//         getData(3, () => {
//             console.log("getting data4....");
//             getData(4);
//         });
//     })
// });



 