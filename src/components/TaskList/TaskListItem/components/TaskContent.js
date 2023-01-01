import { useTasksDispatch } from 'contexts/TasksContext.js';

export default function TaskContent({ task, isEditing }) {
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
      </>
    );
  } else {
    taskContent = <>{task.text}</>;
  }
  return <div>{taskContent}</div>;
}
