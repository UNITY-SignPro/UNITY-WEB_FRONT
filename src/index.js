import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Header from './components/header';
import FbxLoader from './components/fbxLoader';
// import Words from './components/words';

import './components/css/header.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='Main'>
    <Header />
    <FbxLoader />
    {/* <Words /> */}
  </div>
);

reportWebVitals();
