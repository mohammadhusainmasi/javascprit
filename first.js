// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);    

// let name = div.getAttribute("name");
// console.log(name);    

// let para = document.querySelector ("p");
// console.log(para.setAttribute("class","newclass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";  

// div.style.fontSize = "25px";

// div.innerText = "hello!";

let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

let div = document.querySelector("div");
div.append(newbtn);   