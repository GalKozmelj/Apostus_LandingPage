import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="1080" src="img/HEADER.png"></img>
      </header>
      <body>

        <div class="card">
          <span>Release date: </span><b>30.6.2020</b>
          <p></p>



          <div class="video_placeHolder">
            <video width="960" height="540" controls>
              <source src="img/test_level.mp4" type="video/mp4"></source>
            </video>
          </div>

          <h3>TEST LEVELS CONTACTS AND DEMO RELEASE</h3>
          gamil: <input></input>
          <button id="button">submit</button>


        </div>





      </body>
    </div>
  );
}

export default App;
