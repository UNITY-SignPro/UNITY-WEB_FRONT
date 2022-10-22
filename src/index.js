import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Header from './components/header';
import FbxLoader from './components/fbxLoader';
// import Words from './components/words';

import './components/css/header.css';

function SendData() {
  alert("SendData");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='Main'>
    <Header />
    <FbxLoader />
    <div className='InputString'>
      <input type='text' placeholder='번역할 문장을 입력해주세요 👐'></input>
      <button onClick={SendData}>입력</button>
    </div>
    {/* <Words /> */}
  </div>
);

reportWebVitals();
