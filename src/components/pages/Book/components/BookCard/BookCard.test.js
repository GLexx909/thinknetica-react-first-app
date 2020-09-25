import React from 'react'
import { render,fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import '@babel/plugin-transform-async-to-generator'
import { MemoryRouter, Router } from "react-router-dom";
import { act } from 'react-dom/test-utils';

import BookCard from "./index";
import App from '../../../../../App'
import WishlistProvider from "../../../../shared/Providers/WishlistProvider";

// test('renders book in a card', () => {
//   const book = books[0]
//   const book_id = book.id
//   const otherBooks = books.filter( book => book.id !== book_id)
//
//   const { getByText } = render(<BookCard book={book} otherBooks={otherBooks}/>)
//   expect(getByText('Economy of Stalin')).toBeInTheDocument()
//   expect(getByText('250р.')).toBeInTheDocument()
// })
//
// test('renders an empty book in a card', () => {
//
//   const author = {
//     "id": 1,
//     "name": "Valentin Katasonov",
//     "email": "v.katasonov@ya.ru",
//     "avatar": "https://communitarian.ru/uploads/post/image/0/15/1547/11062a0e6e786f0622c02eb45e65e3ef.jpg",
//     "description": "Russian scientist and economist, doctor of economic Sciences."
//   }
//
//   const { getByText } = render(<BookCard author={author}/>)
//   expect(getByText('Empty book')).toBeInTheDocument()
// })
//
// test('loads and displays greeting', async () => {
//   const book = books[0]
//   const book_id = book.id
//   const otherBooks = books.filter( book => book.id !== book_id)
//
//   const bookMock = {
//     "title": "Economy of Stalin",
//     "description": "Book about Economy of Stalin",
//     "pages_count": 417,
//     "language": "RU",
//     "progress": 25,
//     "cover": "https://ozon-st.cdn.ngenix.net/multimedia/1037906978.jpg",
//     "authors_ids": [1, 2, 3, 4],
//     "min_price": 250,
//     "desired_price": 500,
//     "current_sum": 10000,
//     "expected_sum": 200000,
//     "subscribers_count": 12,
//     "authors": [
//       {
//         "id": 1,
//         "name": "Валентин Катасонов",
//         "email": "v.katasonov@ya.ru",
//         "avatar": "https://communitarian.ru/uploads/post/image/0/15/1547/11062a0e6e786f0622c02eb45e65e3ef.jpg",
//         "description": "Russian scientist and economist, doctor of economic Sciences."
//       },
//       {
//         "id": 2,
//         "name": "Иван Иванов",
//         "email": "v.ivan@ya.ru",
//         "avatar": "https://cdn.smartfacts.ru/337451/ivan-ivanov_0.jpg",
//         "description": "Великий русский Иван"
//       },
//       {
//         "id": 3,
//         "name": "Пётр Петров",
//         "email": "v.petr@ya.ru",
//         "avatar": "https://kir2016.ru/Historians/0_images_H/Petrov_PN.jpg",
//         "description": "Великий русский Пётр"
//       },
//       {
//         "id": 4,
//         "name": "",
//         "email": "v.sidor@ya.ru",
//         "avatar": "https://i11.fotocdn.net/s121/e9ef32f184b339b1/gallery_l/2779470179.jpg",
//         "description": "Великий русский Сидор"
//       }
//     ]
//   }
//
//   const { getByRole, getByText } = render(<BookCard book={bookMock} otherBooks={otherBooks}/>)
//
//   fireEvent.click(getByText('Показать всех авторов (4)'))
//
//   await waitFor(() => {
//     expect(getByText('Имя отсутствует')).toBeInTheDocument()
//   })
// })

test('render Main page by clicking to name of project', () => {

  const component = render(<BookCard/>, {
    routes: ['/books/3']
  })

  component.navigate(component.getByTitle('Книжный сервис'))
  component.navigate('/')

})

test('render Main page by clicking to name of project', () => {

  const root = document.createElement('div');
  document.body.appendChild(root);

  // Render app
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
    root
  );

  act(() => {
    const goMainLink = getByText('Книжный Сервис')
    goMainLink.dispatchEvent(new MouseEvent("click", {bubbles: true}))
  })

  expect(getByText('Главная страница')).toBeInTheDocument()

})

test('render Main page by clicking to name of project', () => {

  const renderComponent = () =>
    render(
      <MemoryRouter initialEntries={[`/books/1`]}>
        <Route path="/books/:id" component={WishlistProvider(BookCard)} />
      </MemoryRouter>
    );

  it('renders initial book id', async () => {
    const { getByText } = renderComponent({ id: 1 });

    await waitForElement(() => getByText(/user xxxxxxx#5/i));
  });

})

test('full app rendering/navigating', () => {
  function renderWithRouter(ui, {route = '/'} = {}) {
    window.history.pushState({}, 'Test page', route)

    return render(ui, {wrapper: Router})
  }

  const {container} = renderWithRouter(<App />)

  expect(container.innerHTML).toMatch('Главная страница')
  const leftClick = {button: 0}
  fireEvent.click(screen.getByText(`/wishlist`), leftClick)

  expect(container.innerHTML).toMatch('Список желаний')
})
