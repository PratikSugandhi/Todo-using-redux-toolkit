import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useSelector(state => state.todos); // menas useSelector points or bring the state of the global data store and inside it there is todos
    return (
        <div>
            Todo List : <br />
            {todos.map(todoItem => {
                return (
                    <TodoItem id={todoItem.id} key={todoItem.id} text={todoItem.text} isCompleted={todoItem.completed}  />
                )
            })}
        </div>
    )
}

export default TodoList;