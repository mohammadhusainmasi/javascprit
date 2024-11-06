let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx, evt.clienty);
// }

btn1.addEventListener("click", (evt) => {
    console.log("button1 was click - handler1");
    
}); 

const handler2 = () => {
    console.log("button was clicked - handler2");
}

btn1.addEventListener("click", handler2);

btn1.addEventListener("click", () => {
    console.log("button1 was click - handler3");
});

btn1.addEventListener("click", () => {
    console.log("button1 was click - handler4");
});

btn1.removeEventListener("click",handler2);     


