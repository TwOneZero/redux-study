import React from 'react';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id, clickFunc }) => {
  return (
    <li key={id} id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={clickFunc}>DEL</button>
    </li>
  );
};

export default ToDo;
