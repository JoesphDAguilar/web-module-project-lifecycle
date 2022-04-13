import React from 'react'
import axios from 'axios'

import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todo: [],
    error: '',
    nameInput: '',
  }

  fetchTodo = () => {
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state, todo: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          ...this.state, err: err.response.data.message,
          
        })
      });
  }



  componentDidMount() {
    this.fetchTodo()
  }

  render() {
    return (
      <div>
        <div>
          Error: {this.state.err}
        </div>
        <h2>Todos:</h2>
        {
          this.state.todo.map(item => {
            return <div key={item.id}>{item.name }</div>
          })
        }
        <Form />
        <button>Clear</button>
      </div>
    )
  }
}
