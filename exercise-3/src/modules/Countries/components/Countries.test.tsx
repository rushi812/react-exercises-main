import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'

import CountriesContainer from './CountriesContainer'

afterEach(cleanup)

describe('Initial render', () => {
  it('renders countries', () => {
    const { getByText } = render(
      <MockedProvider>
        <CountriesContainer />
      </MockedProvider>
    )

    expect(getByText('Please wait! Countries Loading...')).toBeInTheDocument()
  })
})
