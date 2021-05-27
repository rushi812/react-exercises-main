import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Counter from './Counter'
import { CounterStore, CounterStoreImpl } from '../store/CounterStore'

const renderWithStore = (CounterStore: CounterStoreImpl) =>
  render(<Counter counterStore={CounterStore} />)

describe('Counter initial render', () => {
  it('should match the snapshot', () => {
    const container = render(<Counter counterStore={CounterStore} />)

    expect(container).toMatchSnapshot()
  })
})

describe('Counter DOM elements', () => {
  it('Increment button should be enabled', () => {
    const { getByTestId } = renderWithStore(CounterStore)

    expect(getByTestId('btn-inc')).not.toHaveAttribute('disabled')
  })

  it('Decrement button should be disabled', () => {
    const { getByTestId } = renderWithStore(CounterStore)

    expect(getByTestId('btn-dec')).toHaveAttribute('disabled')
  })
})

describe('Counter Store render', () => {
  afterEach(cleanup)

  it('should check initial count value', () => {
    const { getByTestId } = renderWithStore(CounterStore)

    expect(getByTestId('count')).toHaveTextContent('Clicks: 0')
  })

  it('should check count value after increment', () => {
    const { getByTestId } = renderWithStore(CounterStore)

    fireEvent.click(getByTestId('btn-inc'))
    fireEvent.click(getByTestId('btn-inc'))

    expect(getByTestId('count')).toHaveTextContent('Clicks: 2')
  })

  it('should check count value after decrement', () => {
    const { getByTestId } = renderWithStore(CounterStore)

    fireEvent.click(getByTestId('btn-inc'))
    fireEvent.click(getByTestId('btn-dec'))

    expect(getByTestId('count')).toHaveTextContent('Clicks: 2')
  })
})
