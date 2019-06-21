import React from 'react';
import './App.css';
import SongList from './Components/SongList';
import SongDetails from './Components/SongDetails';

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-10 mx-auto col-md-6">
          <SongList />
        </div>
        <div className="col-10 mx-auto col-md-6">
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
