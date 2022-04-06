const form =document.getElementById("form");
const button =document.getElementById("btn");
const inputText =document.getElementById("form3");
const container =document.getElementById("container");
const icon =document.getElementById("icon");

const handleSubmit = (event) =>{
    event.preventDefault()
    const inputTextValue =document.getElementById("form3").value;
    if(inputTextValue === ""){
        alert("do Something")
    }else{const newListItem =document.createElement("li");
    newListItem.innerHTML =`Hier is your todo: ${inputTextValue} blabla`;
    container.appendChild(newListItem);
    newListItem.style.backgroundColor ="#20B2AA";
    newListItem.style.fontSize ="1.5rem";
    newListItem.style.listStyle ="none";

    document.getElementById("inputTextValue") ="";
    }
    
}
//button.onclick =handleSubmit;
form.addEventListener("submit", handleSubmit);

