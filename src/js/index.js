let input = document.querySelector(".todo-input");
let button = document.querySelector(".todo-btn");
let todoList = document.querySelector(".todo-list");

let item = "";
let list = [];

const showTodo = () => {
    while (todoList.firstChild) todoList.removeChild(todoList.firstChild);
    list.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item}`;
        todoList.appendChild(li);
    });

};

const onChange = (e) => {
    item = e.target.value;
};

const onClick = () => {
    list = [...list, item];
    item = [];
    input.value = "";
    showTodo();
};

input.addEventListener("change", onChange);
button.addEventListener("click", onClick);
