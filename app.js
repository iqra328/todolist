const inputBox = document.getElementById("inputbox")

const listContainer = document.getElementById("list-container")

function addTask(){
    if (inputBox.value === ''){
        alert ("You must write something here");
    }
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = ('');
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check-512.webp");
    }
    else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }

    },false);