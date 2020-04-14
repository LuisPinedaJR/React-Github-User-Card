import React from 'react'
import styled from 'styled-components'

const ImageChart = styled.div`
  margin: 40px 0;
`

const GithubChart = () => {
  return (
    <ImageChart>
      <img
        src="https://ghchart.rshah.org/luispinedajr"
        alt="luispinedajr's Github chart"
      />
    </ImageChart>
  )
}

export default GithubChart
