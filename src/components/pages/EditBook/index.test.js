import React from 'react'
import { render, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import '@babel/plugin-transform-async-to-generator'

import EditBook from "./index";
import App from '../../../App'

import { createMemoryHistory } from 'history'
import getBook from '../../shared/hooks/getBook'
import useAuthors from '../../shared/hooks/useAuthors'
import mockGetBook from '../../../mocks/getBook'
import mockAuthors from '../../../mocks/authors'

// Приложением ошибся. Не нужно было этот тест писать.

jest.mock('../../shared/hooks/getBook', () => {
  return jest.fn(() => mockGetBook);
})

jest.mock('../../shared/hooks/useAuthors', () => {
  return jest.fn(() => mockAuthors);
})

beforeEach(() => {
  const history = createMemoryHistory()
  history.push("/books/recycbYjh3TkgZMPM/edit")

  getBook.mockImplementationOnce(() => mockGetBook)
  useAuthors.mockImplementationOnce(() => mockAuthors)

  render(
    <App history={history}>
      <EditBook />
    </App>
  )
})

test('render book values in fields', async () => {
  const titleInput = screen.getByLabelText(/title/i)
  expect(titleInput).toHaveValue('Книга Хамурапи')

  const descriptionInput = screen.getByLabelText(/description/i)
  expect(descriptionInput).toHaveValue('Хамурапи Хамурапи Хамурапи')

  expect(screen.getByRole(/option/i, { name: 'Валентин Катасонов' })).toBeInTheDocument()

  const submitButton = screen.getByRole(/button/i, { name: 'Update book' })
  expect(submitButton).toBeInTheDocument()
})
