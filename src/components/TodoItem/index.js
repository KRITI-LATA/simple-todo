// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteUser} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-card">
      <p className="para-text">{title}</p>
      <div>
        <button type="button" className="btn-delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
