const todoList = [];

function renderTodoList(){

    let todoListHTML = '';
    for(let i = 0 ; i<todoList.length;i++){
    
        const todoObject = todoList[i];

        const name = todoObject.name;
        const dueDate = todoObject.dueDate; 
    
        const html = ` <div class="css-name">${name}</div>
        <div class="css-duedate"> ${dueDate}</div> 
        <button onclick="
    
        todoList.splice(${i},1);
        renderTodoList();
        "
        class="delete-todo-button">Delete</button> `;
        todoListHTML+=html;
    
    
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo(){

const inputElement = document.querySelector('.js-name-input');
const dateElement = document.querySelector('.js-due-date-input');
const name = inputElement.value;
const dueDate = dateElement.value;
todoList.push({
    name:name,
    dueDate:dueDate
});

inputElement.value = '';
renderTodoList();

}





        

