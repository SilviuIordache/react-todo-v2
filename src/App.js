import { useReducer } from 'react';
import AddNewItem from './components/AddNewItem';
import ItemList from './components/ItemList';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  EDIT_TODO: 'edit-todo',
};

function toDoReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });
    default:
      return todos;
  }
}

function newToDo(name) {
  return { id: Date.now(), name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(toDoReducer, [
    { id: 1, name: 'clean', complete: false },
    { id: 2, name: 'wash', complete: false },
    { id: 3, name: 'rest', complete: false },
  ]);

  return (
    <div className="App">
      <AddNewItem dispatch={dispatch} />
      <ItemList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
