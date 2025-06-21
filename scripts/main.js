<<<<<<< HEAD
const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");



function addTask(){
    if(inputBox.value === ''){
        alert("You Must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    let data = localStorage.getItem("data");
    if(data){
        listContainer.innerHTML = data;
    } else {
        listContainer.innerHTML = "";
    }
}
showTask();
=======
const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");


inputBox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

function addTask(){
    if(inputBox.value === ''){
        alert("You Must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    let data = localStorage.getItem("data");
    if(data){
        listContainer.innerHTML = data;
    } else {
        listContainer.innerHTML = "";
    }
}
showTask();
>>>>>>> 921b507 (responsive)
