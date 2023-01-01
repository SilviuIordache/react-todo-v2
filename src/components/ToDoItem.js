import { useState } from 'react';
import { ACTIONS } from '../App';

export default function ToDoItem({ todo, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(todo.name);

  return (
    <div>
      {!editMode ? (
        <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
          {todo.name}
        </span>
      ) : (
        <input
          value={editInput}
          onChange={(e) => {
            setEditInput(e.target.value);
          }}
        />
      )}
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>

      {editMode ? (
        <button
          onClick={() => {
            setEditMode(false);
            dispatch({
              type: ACTIONS.EDIT_TODO,
              payload: { name: editInput, id: todo.id },
            });
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
}
