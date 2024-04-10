var inputForm = document.getElementById("task-input-form");
var inputFeild = document.getElementById("new-task-input");
var allTask = document.querySelector(".tasks")
document.querySelector("#task-submit").addEventListener("click",(e)=>{
e.preventDefault();
if(!inputFeild.value){
    alert("please write task✍")
    return;
}

var taskDiv = document.createElement("div");
taskDiv.classList.add("content");
allTask.appendChild(taskDiv);
// taskDiv.innerHTML = inputFeild.value;

//Creating a input feild
var input = document.createElement("input");
input.type = "Text";
input.value =  inputFeild.value;
input.classList.add("texthere")
input.setAttribute("readonly","readonly")
taskDiv.appendChild(input);

//creating actoin div
var action = document.createElement("div");
action.classList.add("action");

//creating edit button
var editButon = document.createElement("button");
editButon.innerText = "Edit";
editButon.classList.add("edit")
action.appendChild(editButon);

//creating delete button
var deleteButon = document.createElement("button");
deleteButon.innerText = "delete";
deleteButon.classList.add("delete")
action.appendChild(deleteButon);

//create a function for edit button
editButon.addEventListener("click",()=>{
   
    if(editButon.innerText.toLowerCase() === "edit"){
        // console.log("edit button is clicked");
        input.removeAttribute("readonly");
        editButon.innerHTML = "save";
        input.focus();
    }
    else{
        editButon.innerHTML = "edit";
        input.setAttribute("readonly","readonly");
    }
});

//create a function for delete button
deleteButon.addEventListener("click",()=>{
    allTask.removeChild(taskDiv);
})

taskDiv.appendChild(action);
    console.log(inputFeild.value);
    inputFeild.value = "";
})
// function saveData(){
//     localStorage.setItem("deta",taskDiv.innerHTML);
// }
// function showTask(){
//     taskDiv.innerHTML =  localStorage.setItem("deta");
// }
// showTask();