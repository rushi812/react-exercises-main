import {useEffect, useState} from 'react'

import './Time.css'

interface Props {}

let timeInterval: ReturnType<typeof setInterval> = setInterval(() => {})

const Time: React.FC<Props> = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  useEffect(() => {
    clearInterval(timeInterval)
    timer()
  }, [])

  const timer = () => {
    timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
  }

  return (
    <div className="timeContainer">
      { currentTime.toLocaleTimeString() }
    </div>
  )
}

export default Time
