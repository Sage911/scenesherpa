// return movie credits for a given actor id

import React from 'react'

import MovieListItem from 'components/movie/MovieListItem'
import MediaList from 'styled/MediaList'

const MovieCredits = (props) => {
  const { cast } = props.movies
  const ids = [] // will be used to track unique id values before we create a new MovieListItem
  const credits = cast.map((m) => {
    if (ids.indexOf(m.id) === -1) {
      ids.push(m.id)
      return <MovieListItem key={m.id} {...m} />
    }
    return null
  })
  return (
    <div>
      <MediaList>{credits}</MediaList>
    </div>
  )
}

export default MovieCredits
