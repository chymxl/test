import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatcher }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatcher(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submint">Add Todo</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo