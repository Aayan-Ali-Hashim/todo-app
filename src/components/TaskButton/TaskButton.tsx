

const TaskButton = ({onclick}) => {
  return (
    <span>
      <button className='add-task-button' onClick={onclick}>Add Task</button>
    </span>
  )
}

export default TaskButton
