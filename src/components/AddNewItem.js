import { useRef } from 'react';
import { ACTIONS } from '../App';

export default function AddNewItem({ dispatch }) {
  const inputEl = useRef(null);

  function addItem() {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: inputEl.current.value },
    });
    inputEl.current.value = '';
  }

  return (
    <>
      <span>Add new item</span>
      <input ref={inputEl} />
      <button onClick={addItem}>Add</button>
    </>
  );
}
