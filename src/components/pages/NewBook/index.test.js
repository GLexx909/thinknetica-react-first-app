import React from 'react'
import {render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import '@babel/plugin-transform-async-to-generator'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'

import NewBook from "./index";
import App from '../../../App'

import { createMemoryHistory } from 'history'
import useAuthors from './../../../components/shared/hooks/useAuthors'
jest.mock('./../../../components/shared/hooks/useAuthors')

test('renders book', async () => {
  const history = createMemoryHistory()
  history.push("/books/new")

  const promise = Promise.resolve([])
  useAuthors.mockImplementationOnce(() => promise)

  render(
    <App history={history}>
      <NewBook />
    </App>
  )

  const titleInput = screen.getByLabelText(/title/i)
  userEvent.type(titleInput, 'Book title')
  expect(titleInput).toHaveValue('Book title')

  const descriptionInput = screen.getByLabelText(/description/i)
  userEvent.type(descriptionInput, 'Book description')
  expect(descriptionInput).toHaveValue('Book description')


  userEvent.click(screen.getByRole('button', { name: /append/i }))
  expect(screen.getByRole('select', { name: /authors[0]/i }))

  await act(() => promise)
})
