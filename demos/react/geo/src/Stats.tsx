import React from 'react'
import { useInstantSearch } from 'react-instantsearch-hooks-web'

export function Stats() {
  const { results } = useInstantSearch()

  if (results.nbHits === 0) return <div />

  return (
    <div className="ais-Stats">
      <span role="img" aria-label="emoji">
        ⚡️
      </span>{' '}
      <strong>{results.nbHits}</strong> results found{' '}
      {results.query !== '' && (
        <React.Fragment>
          for <strong>{`"${results.query}"`}</strong>
        </React.Fragment>
      )}{' '}
      in <strong>{results.processingTimeMS}ms</strong>
    </div>
  )
}
