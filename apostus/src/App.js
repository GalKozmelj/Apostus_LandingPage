import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="1080" src="img/header2.png"></img>
      </header>
      <body>

        <div class="card">
          <p>Release date?</p>


          <div class="video_placeHolder">
            <video width="960" height="540" controls>
              <source src="img/test_level.mp4" type="video/mp4"></source>
            </video>
          </div>

        </div>





      </body>
    </div>
  );
}

export default App;
