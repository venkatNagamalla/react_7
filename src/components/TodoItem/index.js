// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachTodoItem, deleteTodo} = props
  const {id, title} = eachTodoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="text-container">
      <p className="text">{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
