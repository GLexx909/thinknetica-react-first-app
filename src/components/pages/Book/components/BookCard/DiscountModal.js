import React from 'react'
import ReactDOM from 'react-dom'
import styles from './DiscountModal.modal.css'

class DiscountModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div className={styles.discount}>
        <a onClick={() => this.toggle()}>Условия подписки</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div className={styles.overlay}>
              <div className={styles.body}>
                За подписку автор лично подпишет ваш экземпляр книги
                <button onClick={() => this.toggle()}>Закрыть</button>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </div>
    )
  }
}

export default DiscountModal
