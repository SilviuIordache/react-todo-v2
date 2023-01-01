import ToDoItem from './ToDoItem';

export default function ItemList({ todos, dispatch }) {
  // TODO:
  // either merge this ItemList with ToDoItem
  // or change to context to avoid prop drilling
  const items = todos.map((todo) => <ToDoItem key={todo.id} todo={todo} dispatch={dispatch}/>);
  return items;
}
