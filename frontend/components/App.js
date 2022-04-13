import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todo: []
  }

  fetchTodo = () => {
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state, todo: res.data.data
        })
      })
      .catch(err => {console.error(err)});
  }

  componentDidMount() {
    this.fetchTodo()
  }

  render() {
    return (
      <div>
        <div>
          Error: No error here
        </div>
        <h2>Todos:</h2>
        {
          this.state.todo.map(item => {
            return <div key={item.id}>{item.name }</div>
          })
        }
      </div>
    )
  }
}
