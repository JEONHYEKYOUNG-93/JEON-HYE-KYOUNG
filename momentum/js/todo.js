const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit (event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //사용자가 form을 submit하면 input을 비움
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),

    }
    toDos.push(newTodoObj); //그 텍스트(newToDo)를 toDos array에 push
    paintToDo(newTodoObj); //화면에 그려줌
    saveToDos(); // toDos array를 localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


function sexyFilter(){

}



//1번,2번 동일
//1번
//function sayHello(item) {
//    console.log("this is the turn of", item);
//}
//2번 
//(item) => console.log("this is the turn of", item)
