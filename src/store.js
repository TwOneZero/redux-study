import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './reducer/todoReducer';
export default configureStore({
  reducer: {
    toDoReducer,
  },
});
