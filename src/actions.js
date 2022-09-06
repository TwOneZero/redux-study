import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE } from './reducer/types.js';

export const addToDo = createAction(ADD, (text) => {
  return {
    payload: {
      text,
    },
  };
});

export const deleteToDo = createAction(DELETE, (id) => {
  return {
    payload: { id },
  };
});
