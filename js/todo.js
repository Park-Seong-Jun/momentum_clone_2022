const toDoForm = document.querySelector(".todo__box__input");
const toDoInput = toDoForm.querySelector(".todo__box__input input");
const toDoLists = document.querySelector(".todo__box__list");
const TODO_KEY = "toDos";
let toDoInfo = [];

const todoSpan = document.querySelector("#todo > span");
const todoDetail = document.querySelector(".todo__box");


function detailView(){
    todoDetail.classList.toggle("hidden");
    positioningTodoBox()
};

function positioningTodoBox() {
    const todoBox = document.querySelector(".todo__box");
    todoBox.style.top = `-${todoBox.clientHeight+10}px`;
  
}

function deleteToDo(event) {
    const deleteTarget = event.target.parentElement;
    deleteTarget.remove();
    positioningTodoBox();
    toDoInfo = toDoInfo.filter(toDo => toDo.id !== parseInt(deleteTarget.id));
    saveToDo();
};
function addToDo(newToDo) {
    const toDoList = document.createElement("li");
    toDoList.className = "todo__box__list__element";
    toDoList.id = newToDo.id;
    const toDoDelete = document.createElement("i");
    toDoDelete.className = "fa-solid fa-x fa-xs";
    toDoList.appendChild(toDoDelete);
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = newToDo.toDo;
    toDoList.appendChild(toDoSpan);
    toDoLists.appendChild(toDoList);
    toDoDelete.addEventListener("click",deleteToDo);
    positioningTodoBox()
    
}

function saveToDo() {
    localStorage.setItem(TODO_KEY,JSON.stringify(toDoInfo))
};

function submitToDo(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const li = {toDo : newToDo, id : Date.now()};
    toDoInput.value = "";
    toDoInfo.push(li);
    saveToDo(li);
    addToDo(li);
};

positioningTodoBox()
toDoForm.addEventListener("submit",submitToDo);
todoSpan.addEventListener("click",detailView);

const savedToDos = localStorage.getItem("toDos")

if (savedToDos != null) {
    const toDos = JSON.parse(savedToDos);
    toDos.forEach(element => {addToDo(element)});
    toDoInfo = toDos;
}
   
