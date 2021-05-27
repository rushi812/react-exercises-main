import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Continents from './Continents'

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

interface ContintneData {
  continents: Continent[]
}

export const CONTINENTS = gql`
  query Continents {
    continents {
      name
      code
      countries {
        code
        name
        emoji
        emojiU
      }
    }
  }
`
const ContinentsContainer: React.FC = () => {
  const { data, loading, error } = useQuery<ContintneData>(CONTINENTS)

  if (loading || error) {
    return <p>{error ? error.message : 'Please wait! Continents Loading...'}</p>
  }

  const { continents } = data

  return <Continents continents={continents} />
}

export default ContinentsContainer
