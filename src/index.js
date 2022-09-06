import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
const ADD = 'ADD';
const MINUS = 'MINUS';
number.innerText = 0;

//state 변경하는 역할
const countReducer = (count = 0, countAction) => {
  switch (countAction.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
};

//state 에 변화가 있다면 함수가 실행됨
countStore.subscribe(onChange);

//reducer 에 어떻게 데이터를 변경할지 알려주는 역할
add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
