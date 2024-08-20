import React from 'react'
import Row from '../Rows/Row/Row'
import requests from '../../utils/request'

const RowList = () => {
  return (
    <div>
      <Row
          title="Netflix Orignals"
          fetchurl={requests.fetchNetflixOriginals}
          isLargeRow={true}
      />
      <Row  title=" Trending Now"
          fetchurl={requests.fetchTreanding}/>
          <Row  title=" Top Rated"
          fetchurl={requests.fetchTopRatedmovies}/>
          <Row  title="Action Movies"
          fetchurl={requests.fetchActionmovies}/>
          <Row  title=" Comedy Movies"
          fetchurl={requests.fetchComedymovies}/>
          <Row  title=" Animation Movies"
          fetchurl={requests.fetchAnimationmovies}/>
          <Row  title=" Crime Movies "
          fetchurl={requests.fetchCrimemovies}/>
          <Row  title=" Horror Movies "
          fetchurl={requests.fetchHorrormovies}/>
          <Row  title=" Fantasy Movies"
          fetchurl={requests.fetchFantasymovies}/>
          <Row  title="Family Movies "
          fetchurl={requests.fetchFamilymovies}/>
          <Row  title="Drama Movies"
          fetchurl={requests.fetchDramamovies}/>
          <Row  title="History Movies "
          fetchurl={requests.fetchHistorymovies}/>
          <Row  title="Science Fiction Movies"
          fetchurl={requests.fetchScienceFictionmovies}/>
          <Row  title="Tv Show "
          fetchurl={requests.fetchTvShow}/>

    </div>
  )
}

export default RowList