import React from 'react'
import { render, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import '@babel/plugin-transform-async-to-generator'
import { act } from 'react-dom/test-utils';

import EditBook from "./index";
import App from '../../../App'

import { createMemoryHistory } from 'history'
import getBook from '../../shared/hooks/getBook'
jest.mock('../../shared/hooks/getBook')

test('renders book', async () => {
  const history = createMemoryHistory()
  history.push("/books/recycbYjh3TkgZMPM/edit")

  const promise = Promise.resolve([])
  getBook.mockImplementationOnce(() => promise)

  render(
    <App history={history}>
      <EditBook />
    </App>
  )

  await act(() => promise)

  expect(getBook).toHaveBeenCalledTimes(1)

  // const labelName = screen.getByText('Книга Хамурапи')
  // expect(labelName).toBeTruthy

  await waitFor(() => screen.getByText(/Книга Хамурапи/i));

})
