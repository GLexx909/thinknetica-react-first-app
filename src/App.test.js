import React from "react";
import App from './App'
import {render, waitFor} from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { act } from 'react-dom/test-utils'

import useAuthors from './components/shared/hooks/useAuthors'
jest.mock('./components/shared/hooks/useAuthors')

describe('Routing', () => {
  it('render Main page correctly', () => {
    const result = render(<App />)
    const headerEl = result.getByText('Главная страница')
    expect(headerEl).toBeTruthy()
  })

  it('navigate to wishlist page', async () => {
    const history = createMemoryHistory()

    render(<App history={history}/>)

    const goToWishlistLink = screen.getByText('Желаемое')
    userEvent.click(goToWishlistLink)
    const headerWishEl = screen.getByText('Список желаний')
    expect(headerWishEl).toBeTruthy()
    expect(history.location.pathname).toBe('/wishlist')

    const promise = Promise.resolve([])
    useAuthors.mockImplementationOnce(() => promise)

    const goToNewBookLink = screen.getByText('Создать Новую книгу')
    userEvent.click(goToNewBookLink)
    const headerNewBookEl = screen.getByText('New Book')
    expect(useAuthors).toHaveBeenCalledTimes(1)
    expect(headerNewBookEl).toBeTruthy()
    expect(history.location.pathname).toBe('/books/new')

    await act(() => promise)

    const goToMainLink = screen.getByText('Книжный Сервис')
    userEvent.click(goToMainLink)
    const headerEl = screen.getByText('Главная страница')
    expect(headerEl).toBeTruthy()
    expect(history.location.pathname).toBe('/')

  })
})
