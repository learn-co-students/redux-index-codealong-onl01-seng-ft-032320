import React from 'react'

const Todo = props => {
    return (
    <li key={props.key}>{props.text}</li>
    )
}

export default Todo;