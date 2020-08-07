import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';
 
class TodosContainer extends Component {

    rednerTodos = () => this.props.todos.map((todo, i) => {
        <Todo key={i} text={todo} />
    })
 
  render() {
      console.log(this.props.todos)
    return(
      <div>
          {this.rednerTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
 
export default connect(mapStateToProps)(TodosContainer);