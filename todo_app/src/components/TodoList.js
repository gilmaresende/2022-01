import React from "react";

const TodoList = props => {
    return (
        <ul>{
            props.todos.map((todo, index) => {
                return <li>{todo}</li>
            }
            )
        }
        </ul>

    )

}

export default TodoList