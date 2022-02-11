import React from "react";

export default class TodoForm extends React.Component {

    state = {
        inputValue: "",
    }

    onChange = (e) => {
        const { value } = e.target;

        this.setState({ inputValue: value })

    }

    addTodo = () => {
        const newTodo = this.state.inputValue;
        this.props.onSaveTodo(newTodo)
        this.setState({ inputValue: "" })
    }


    render() {

        return <>
            <input value={this.state.inputValue}
                onChange={this.onChange}
            />
            <button onClick={this.addTodo}>Salvar</button>
        </>
    }

}