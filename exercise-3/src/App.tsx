import React from 'react'
import CountriesContainer from './modules/Countries/components/CountriesContainer'
import ContinentsContainer from './modules/Continents/components/ContinentsContainer'
import './App.css'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className='main-container'>
      <CountriesContainer />
      <ContinentsContainer />
    </div>
  )
}

export default App
