import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Datail = () => {
  const { id } = useParams();
  const toDos = useSelector((state) => state.toDoReducer);

  const toDoText = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{toDoText.text}</h1>
      <h5>CreatedAt : {toDoText.id}</h5>
    </>
  );
};

export default Datail;
