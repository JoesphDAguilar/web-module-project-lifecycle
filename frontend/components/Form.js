import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.input)
  }

  onChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder='Enter new task' onChange={this.onChange}/>
          <button onClick={this.onSubmit}>Add</button>
        </form>
      </div>
    )
  }
}