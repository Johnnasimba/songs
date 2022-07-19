import { combineReducers } from "redux"

const songsReducer = () => {
  return [
    {
      title: 'Lithe',
      duration: '4.20'
    },
    {
      title: 'Ndilinawo mwayi',
      duration: '3.75'
    },
    {
      title: 'bachalo soja',
      duration: '5.5'
    },
    {
      title: 'Kukongola kumapha',
      duration: '6.25'
    },
    {
      title: 'Mwikho',
      duration: '4.09'
    }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return action.payload
    default:
      return selectedSong
  }
}


 export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})