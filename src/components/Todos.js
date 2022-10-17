import React, {Component} from 'react';
import TodoItem from './TodoItem';
/*
function App() {
  return (
    <div className="App">
      <h1>My app</h1>
    </div>
  );
}
*/

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
    }
}

export default Todos;