//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creati li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todo INPUT VALUE
    todoInput.value= "";
}

function deleteCheck(event){
    const item = event.target;
    //DELETE TODO
    if(item.classList[0] === 'trash-btn' ){
        const todo = item.parentElement;   //Moramo ici na parent od itema jer trebamo cijeli TODO post izbrisati
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    //CHECK MARK

    if (item.classList[0] == 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(){

}