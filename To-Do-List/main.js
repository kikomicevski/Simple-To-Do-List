
let todoItems = [];

class Todo {
    constructor(text){
        this.text=text;
        this.checked=false;
        this.id= Date.now();
    }
}


function renderToDo(text,id){
    const todoList = document.querySelector("#todo-list");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("id", id);
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed");
      });
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.appendChild(document.createTextNode(text));
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "";
    removeButton.id = "remove-button";
    removeButton.addEventListener("click", function() {
        todoList.removeChild(li);
        todoItems = todoItems.filter(function(todo){
            return todo.id != id;
        })
        console.log(todoItems);
    });
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(removeButton);
    todoList.appendChild(li);
}


function addTodo(text) {
    let todo = new Todo(text);
    todoItems.push(todo);
    console.log(todoItems);
    renderToDo(todo.text,todo.id);
}

const addTask = document.querySelector("#addTask")
const inputTask = document.querySelector("#inputTask");

addTask.addEventListener("click", function(onClick){
    let text = inputTask.value;
    if(!text){
        return alert("Please add something");
    } else {
        addTodo(text);
        inputTask.value="";
    }
        inputTask.focus()
});

const removeTask = document.querySelector("#removeTask");

removeTask.addEventListener("click", function(onClick){
    if (todoItems.length===0){
        return alert("Nothing to remove!")
    }
    const todoList = document.querySelector("#todo-list");
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    checkboxes.forEach(function(checkbox){
        if (checkbox.checked) {
            const li = checkbox.parentNode;
            todoList.removeChild(li);
            const id = checkbox.getAttribute("id");
            todoItems = todoItems.filter(function(todo){
                return todo.id != id;
            });
        }
    });
    console.log(todoItems);
});
