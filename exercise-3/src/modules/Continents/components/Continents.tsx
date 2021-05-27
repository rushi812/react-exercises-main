import React, { useState } from 'react'
import { _debounce } from '../../../utils'

import './Continents.css'

interface Continent {
  name: string
  code: string
  countries: {
    code: string
    name: string
    emoji: string
    emojiU: string
  }
}

interface Props {
  continents: Continent[]
}

const Continents: React.FC<Props> = ({ continents }) => {
  const [selectedContinent, setSelectedCountry] = useState<Continent>()

  const handleChange = _debounce((event) => {
    const {
      target: { value }
    } = event

    const tempSelectedContinent = continents.find(
      (continent) => continent.code === value.toUpperCase()
    )

    console.log(tempSelectedContinent)

    setSelectedCountry(tempSelectedContinent)
  }, 300)

  return (
    <div className='countinent-container'>
      <input
        type='text'
        placeholder='Enter continent code'
        onKeyUp={handleChange}
      />
      {selectedContinent && Object.keys(selectedContinent).length > 0 && (
        <div className='continent-details'>
          <h1>Continent: {selectedContinent.name}</h1>
          <h2>Countries</h2>
          {selectedContinent.countries.map((country) => {
            return (
              <p key={country.code}>
                <span>{country.emoji}</span>&nbsp;&nbsp;
                <span>{country.name}</span>
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Continents
