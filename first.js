// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from mantiq students";

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}
