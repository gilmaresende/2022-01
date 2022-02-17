import React from "react";
import { connect } from "react-redux";
import { setText, addTodo } from "../actions";


const TodoForm = ({ text, setText, addTodo }) => {

    return <>
        <input value={text}
            onChange={e => setText(e.target.value)}
        />
        <button onClick={(e) => addTodo(text)}>Salvar</button>
    </>

}
function mapStateProps(state) {
    return {
        text: state.text
    }
}

const mapDispatchProps = { setText, addTodo }
export default connect(mapStateProps, mapDispatchProps)(TodoForm)
