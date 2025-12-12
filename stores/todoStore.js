import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],
      
      addTodo: (text) => {
        const newTodo = {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString()
        };
        set((state) => ({
          todos: [...state.todos, newTodo]
        }));
      },
      
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),
      
      deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),
      
      editTodo: (id, newText) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      })),
      
      clearCompleted: () => set((state) => ({
        todos: state.todos.filter(todo => !todo.completed)
      })),
      
      getTodoStats: () => {
        const todos = get().todos;
        return {
          total: todos.length,
          completed: todos.filter(todo => todo.completed).length,
          pending: todos.filter(todo => !todo.completed).length
        };
      }
    }),
    {
      name: 'todo-storage',
    }
  )
);

export default useTodoStore;