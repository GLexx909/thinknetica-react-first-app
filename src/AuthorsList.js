import React from 'react'
import authors from './authors.json'
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAllAuthors: false
    }
  }

  showAllAuthors() {
    this.setState({ showAllAuthors: true })
  }

  render() {

    if (!this.props.authors_ids)
      return <div>Empty authors</div>

    const { authors_ids }  = this.props
    const authorsLength = authors_ids.length

    return(
      <div>
        <b>Список авторов:</b>
        <ul>
          {
            authors
              .filter(author => authors_ids.includes(author.id))
              .slice(0, this.state.showAllAuthors ? authorsLength : 3)
              .map((author) => (
                <li style={style.li} key={author.id}><AuthorCard author={author}/></li>
              ))
          }
        </ul>

        { authorsLength > 3 && <button onClick={() => this.showAllAuthors()}>Показать всех авторов ({authorsLength})</button> }
      </div>
    )
  }
}

export default AuthorsList

const style = {
  li: {
    listStyleType: 'none'
  }
}
