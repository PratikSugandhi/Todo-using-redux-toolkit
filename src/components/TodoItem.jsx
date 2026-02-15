import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";
function TodoItem({ id,text, isCompleted }) {
    const dispatch=useDispatch();
    
    function deleteTodo()
    {
        dispatch(removeTodo(id))
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={isCompleted} />
            <p>{text}</p>
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}

export default TodoItem;