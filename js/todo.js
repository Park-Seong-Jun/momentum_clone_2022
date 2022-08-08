const toDoForm = document.querySelector("#todo");
const toDoInput = toDoForm.querySelector("#todo input")
const toDoLists = document.querySelector("#todo-list");
const TODO_KEY = "toDos";
let toDoInfo = [];

function deleteToDo(event) {
    const deleteTarget = event.target.parentElement;
    toDoInfo = toDoInfo.filter((element) => element.ID != deleteTarget.id);
    saveToDo();
    deleteTarget.remove();

};

function addToDo(newToDo) {
    const toDoList = document.createElement("li");
    toDoList.className = "todo-list__element";
    toDoList.id = newToDo.ID;
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = newToDo.toDo;
    toDoList.appendChild(toDoSpan);
    const toDoDelete = document.createElement("i");
    toDoDelete.className = "fa-solid fa-x";
    toDoList.appendChild(toDoDelete);
    toDoLists.appendChild(toDoList);
    toDoDelete.addEventListener("click",deleteToDo);
}

function saveToDo() {
    localStorage.setItem(TODO_KEY,JSON.stringify(toDoInfo))
};

function submitToDo(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const li = {toDo : newToDo, ID : Date.now()};
    toDoInput.value = "";
    toDoInfo.push(li);
    saveToDo(li);
    addToDo(li);
};

toDoForm.addEventListener("submit",submitToDo);

const savedToDos = localStorage.getItem("toDos")

if (savedToDos != null) {
    const toDos = JSON.parse(savedToDos);
    toDos.forEach(element => {addToDo(element)});
    toDoInfo = toDos;
}
   
