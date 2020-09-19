import React from 'react'
import Field from "./Field";
import styles from './components/BookCard/Subscribe/Form.module.css'

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
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <b>Задать вопрос автору:</b>
        <Field label='Имя' name='name' myInput={this.myInput} />
        <Field label='Email' name='email' myInput={this.myInput} />

        <button type="submit">Отправить</button>
      </form>
    )
  }
}

export default Form
