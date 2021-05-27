import React, { useState } from 'react'
import { _debounce } from '../../../utils'

import './Countries.css'

interface Country {
  name: string
  code: string
  currency: string
  emoji: string
  emojiU: string
  languages: {
    code: string
    name: string
  }
}

interface Props {
  countries: Country[]
}

const Countries: React.FC<Props> = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>()

  const handleChange = _debounce((event) => {
    const {
      target: { value }
    } = event

    const tempSelectedCountry = countries.find(
      (country) => country.code === value.toUpperCase()
    )

    setSelectedCountry(tempSelectedCountry)
  }, 300)

  return (
    <div className='countries-container'>
      <input
        data-testid='country-input'
        type='text'
        placeholder='Enter country code'
        onKeyUp={handleChange}
      />
      {selectedCountry && Object.keys(selectedCountry).length > 0 && (
        <div className='country-details'>
          <h2>Country</h2>
          <p>
            <span>Name:</span> {selectedCountry.name}
          </p>
          <p>
            <span>Code:</span> {selectedCountry.code}
          </p>
          <p>
            <span>Currency:</span> {selectedCountry.currency}
          </p>
          <p>
            <span>Flag:</span>{' '}
            <span role='img' aria-label='flag'>
              {selectedCountry.emoji}
            </span>
          </p>
          <p>
            <span>Languages:</span>{' '}
            {selectedCountry.languages
              .map((language) => language.name)
              .join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}

export default Countries
