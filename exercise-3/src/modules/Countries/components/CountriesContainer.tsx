import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Countries from './Countries'

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

interface CountryData {
  countries: Country[]
}

export const COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
      currency
      emoji
      emojiU
      languages {
        code
        name
      }
    }
  }
`
const CountriesContainer: React.FC = () => {
  const { data, loading, error } = useQuery<CountryData>(COUNTRIES)

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
        <p>Error loading countries...</p>
      </div>
    )
  }

  if (loading || !data) {
    return <p>Please wait! Countries Loading...</p>
  }

  const { countries } = data

  return <Countries countries={countries} />
}

export default CountriesContainer
