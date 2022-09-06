import { createReducer } from '@reduxjs/toolkit';
import { addToDo, deleteToDo } from '../actions';

const initialState = [];

const toDoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      return [...state, { text: action.payload.text, id: Date.now() }];
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default toDoReducer;
