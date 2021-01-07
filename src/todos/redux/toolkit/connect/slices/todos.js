import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 4;

const todos = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },

    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action) => {
      const index = state.find((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export default todos;

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todos.actions;
