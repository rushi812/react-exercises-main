import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'

import ContinentsContainer from './ContinentsContainer'

afterEach(cleanup)

describe('Initial render', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(
      <MockedProvider>
        <ContinentsContainer />
      </MockedProvider>
    )

    expect(getByText('Please wait! Continents Loading...')).toBeInTheDocument()
  })
})
