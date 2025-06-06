import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feautres/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer, // now state.todo.todos is your todos array
  },
});
