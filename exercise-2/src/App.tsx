import Counter from './modules/Counter/components/Counter'
import { CounterStore } from './modules/Counter/store/CounterStore'

const App = () => {
  return <Counter counterStore={CounterStore} />
}

export default App
