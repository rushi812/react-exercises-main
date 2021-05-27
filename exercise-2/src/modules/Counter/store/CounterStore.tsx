import { action, makeObservable, observable } from 'mobx'

export class CounterStoreImpl {
  count: number = 0

  constructor() {
    makeObservable(this, {
      count: observable,
      incrementCount: action,
      decrementCount: action
    })
  }

  incrementCount() {
    this.count += 1
  }

  decrementCount() {
    this.count -= 1
  }
}

export const CounterStore = new CounterStoreImpl()
