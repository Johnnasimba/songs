import React from 'react';
import {  connect } from 'react-redux'

const SongDetails = ({ selectedSong }) => {
  if(!selectedSong){
    return <h3>Select a song</h3>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: { selectedSong.title }
        <br />
        Duration: { selectedSong.duration }
      </p>
    </div>
  )
}

const mapStateToProps = ({ selectedSong }) => {
  return {
    selectedSong
  }
}

export default connect(mapStateToProps)(SongDetails)