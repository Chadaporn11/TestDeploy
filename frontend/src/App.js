import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
// const { google } = require('googleapis')
// import TagManager from 'react-gtm-module';
import { getTopPosts } from './Test';


function App() {


  useEffect(() => {
    // getTopPosts();
    ReactGA.initialize('UA-256392386-1')

    ReactGA.pageview('/')
  }, [])
  //som
  //UA-256392386-1
  //aon
  //UA-256150491-1
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'GTM-PTRZG43' });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
