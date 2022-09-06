import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

//Types
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//Action
const addAct = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteAct = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

//Dispatch
const dispatchAddTodo = (text) => {
  store.dispatch(addAct(text));
};
const dispatchDeleteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteAct(id));
};

//Paint screen
const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodos);

//Add
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddTodo(toDo);
};

form.addEventListener('submit', onSubmit);
