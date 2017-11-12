import React, { Component } from 'react'
import axios from 'axios'

import TVListItem from 'components/TVListItem'
import ScreenSizedDiv from 'styled/ScreenSizedDiv'
import MediaList from 'styled/MediaList'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class TVCredits extends Component {
  state = {
    isLoading: true,
    credits: {}
  }

  componentDidMount() {
    this.getCredits()
  }

  getCredits = () => {
    axios.get(`${API_URL}/person/${this.props.id}/tv_credits?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => {
        this.setState({
          credits: data,
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ScreenSizedDiv>
          <h3>Loading TV credits...</h3>
        </ScreenSizedDiv>
      )
    }
    const credits = this.state.credits.cast.map((t) => {
      return <TVListItem key={t.id} {...t} />
    })
    return <MediaList>{credits}</MediaList>
  }
}

export default TVCredits
