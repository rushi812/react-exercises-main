import TimeContainer from './TimeContainer'
import renderer, { act } from 'react-test-renderer';

describe('App Rendering', () => {

  it('Should match the snapshot', () => {
    jest.useFakeTimers()
    const appComponent = renderer.create(<TimeContainer />)
    act(() => {
      jest.advanceTimersByTime(10000 * 60);
    })

    expect(appComponent).toMatchSnapshot()
  })
})