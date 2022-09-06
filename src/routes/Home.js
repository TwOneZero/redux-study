import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo } from '../actions';
import ToDo from '../components/ToDo.js';

const Home = () => {
  const toDos = useSelector((state) => state.toDoReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    dispatch(addToDo(text));
  };

  const onDelete = (e) => {
    const id = e.target.parentNode.id;
    dispatch(deleteToDo(parseInt(id)));
  };

  return (
    <div>
      <h1>To Do</h1>
      <form type='submit' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='할 일 입력하셈'
          value={text}
          onChange={onChange}
        ></input>
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => {
          return <ToDo {...toDo} clickFunc={onDelete} />;
        })}
      </ul>
    </div>
  );
};
export default Home;
