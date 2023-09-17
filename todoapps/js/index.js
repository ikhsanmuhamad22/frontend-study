const todos = []
let RENDER_EVENT = 'render todo'

document.addEventListener(RENDER_EVENT, function () {
  const uncompletedTODOList = document.getElementById('todos');
  uncompletedTODOList.innerHTML = '';
 
  const completedTODOList = document.getElementById('completed-todos');
  completedTODOList.innerHTML = '';
 
  for (const todoItem of todos) {
    const todoElement = makeTodo(todoItem);
    if (!todoItem.isCompleted)
      uncompletedTODOList.append(todoElement);
    else
      completedTODOList.append(todoElement);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('form')
  input.addEventListener('submit', (Event) => {
    Event.preventDefault()
    addTodo()
  })
})

const addTodo = () => {
  const text = document.getElementById('title').value
  const time = document.getElementById('date').value
  const id = generateId()

  const todo = valueAll(id, text, time, false)
  todos.push(todo)

  document.dispatchEvent(new Event(RENDER_EVENT))
}

const valueAll = (id, text, time, isCompleted) => {
  const value = {
    id, text, time, isCompleted
  }
  return value
}

const generateId = () => {
  return +new Date()
}

const makeTodo = (task) => {
  const title = document.createElement('h2')
  title.innerText = task.text

  const date = document.createElement('p')
  date.innerText = task.time

  const textContainer = document.createElement('div')
  textContainer.classList.add('inner')
  textContainer.append(title, date)

  const container = document.createElement('div')
  container.classList.add('item', 'shadow')
  container.setAttribute('id', `todo-${task.id}`)
  container.append(textContainer)

  if (task.isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');
 
    undoButton.addEventListener('click', function () {
      undoTaskFromCompleted(task.id);
    });
 
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
 
    trashButton.addEventListener('click', function () {
      removeTaskFromCompleted(task.id);
    });
 
    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    
    checkButton.addEventListener('click', function () {
      addTaskToCompleted(task.id);
    });
    
    container.append(checkButton);
  }

  return container
}

function addTaskToCompleted (todoId) {
  const todoTarget = findTodo(todoId);
 
  if (todoTarget == null) return;
 
  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;
}

function removeTaskFromCompleted(todoId) {
  const todoTarget = findTodoIndex(todoId);
 
  if (todoTarget === -1) return;
 
  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}
 
 
function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);
 
  if (todoTarget == null) return;
 
  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodoIndex(todoId) {
  for (const index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
 
  return -1;
}