import React from 'react'
import { render,fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import '@babel/plugin-transform-async-to-generator'
import { act } from 'react-dom/test-utils';

import BookCard from "./index";
import App from '../../../../../App'

import { createMemoryHistory } from 'history'
import useBooks from '../../../../shared/hooks/useBooks'
jest.mock('../../../../shared/hooks/useBooks')

test('renders book', async () => {
  const history = createMemoryHistory()
  history.push("/books/recycbYjh3TkgZMPM")

  const promise = Promise.resolve([])
  useBooks.mockImplementationOnce(() => promise)

  render(
    <App history={history}>
      <BookCard />
    </App>
  )

  expect(useBooks).toHaveBeenCalledTimes(1)

  // const labelName = screen.getByText('Книга Хамурапи')
  // expect(labelName).toBeTruthy

  await waitFor(() => screen.getByText('Книга Хамурапи'));

  await act(() => promise)
})
