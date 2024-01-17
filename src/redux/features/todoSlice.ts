import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.unshift({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const taskIndex = state.todos.findIndex((item) => item.id === taskId);

      if (taskIndex !== -1) {
        const updatedTask = {
          ...state.todos[taskIndex],
          isCompleted: !state.todos[taskIndex].isCompleted,
        };

        // Remove the task from its current position
        state.todos.splice(taskIndex, 1);

        // Reorder the array based on the completion status
        if (updatedTask.isCompleted) {
          // Move completed tasks to the end
          state.todos.push(updatedTask);
        } else {
          // Move incomplete tasks to the beginning
          state.todos.unshift(updatedTask);
        }
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
