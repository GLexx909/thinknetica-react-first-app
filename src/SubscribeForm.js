import React, { Component } from 'react'

class SubscribeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      companyDividends: 0,
      currentSum: -1
    }

    this.handleSum = this.handleSum.bind(this)
  }

  handleSum(e) {
    this.setState({
      currentSum: Math.floor(e.target.value),
      companyDividends: Math.floor(e.target.value * 0.1)
    })
  }

  render() {
    const { min_price } = this.props
    const companyDividendsLabel = this.state.currentSum < 0 ? '' : `Введите сумму больше ${min_price}`

    return(
      <form onSubmit={e => e.preventDefault()} style={style.form}>
        <b>Купить:</b>
        <input onChange={this.handleSum} type="number"/>
        <button type="submit">Оплатить</button>
        {
          this.state.currentSum < min_price
          ? <b>{companyDividendsLabel}</b>
          : <b>{this.state.companyDividends}</b>
        }
      </form>
    )
  }
}

export default SubscribeForm

const style = {
  form: {
    margin: '15px 0',
    padding: '15px 0 15px 10px',
    border: '2px solid',
    backgroundColor: '#ccffcc'
  }
}
