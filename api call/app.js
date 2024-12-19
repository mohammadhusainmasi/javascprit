const URL = "https://cat-fact.herokuapp.com/facts/Mammu";
const factpara = document.querySelector("fact");
const btn = document.querySelector("btn");


const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format 
    let data = await response.json();
factpara.innerText = data[2],Text;
};
 
function getFacts() {
     fetch(URL)
     .then((response) => {
        return response.json();
     })
     .then((Data) => {
        console.log(Data);
        factpara.innerText = data[2],Text;
     })
}

btn.addEventListener("click", getFacts); 
