import React from 'react'

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.myInput = this.myInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log({
      name: this.state.name,
      email: this.state.email
    })
  }

  myInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <b>Задать вопрос автору:</b>
        <br/>
        <label htmlFor="name">Имя </label>
        <input onChange={this.myInput} name="name" id="name" type="text"/>
        <br/>
        <br/>
        <label htmlFor="email">Email </label>
        <input onChange={this.myInput} name="email" id="email" type="text"/>
        <br/>
        <br/>
        <button type="submit">Отправить</button>
      </form>
    )
  }
}

export default Form
