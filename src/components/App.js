import React from 'react';
import SongList from './songList';

const App = () => {
  return (
  <div className='ui container grid'>
    <div className='ui row' style={{marginTop: '70px'}}>
      <div className='column eight wide'>
        <SongList />
      </div>
    </div>
  </div>
  )
}

export default App
