import { observer } from 'mobx-react'

import { CounterStoreImpl } from '../store/CounterStore'
import './Counter.css'

export interface Props {
  counterStore: CounterStoreImpl
}

const Counter: React.FC<Props> = observer(({ counterStore }) => {
  return (
    <div className='counter-container'>
      <h1 data-testid='count'>Clicks: {counterStore.count}</h1>
      <div className='buttons-container'>
        <button
          data-testid='btn-inc'
          onClick={() => counterStore.incrementCount()}
        >
          Increment
        </button>
        <button
          data-testid='btn-dec'
          className={counterStore.count === 0 ? 'disableBtn' : ''}
          disabled={counterStore.count === 0}
          onClick={() => counterStore.decrementCount()}
        >
          Decrement
        </button>
      </div>
    </div>
  )
})

export default Counter
