import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import QueryString from 'qs';
import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';

// Style Initializer
const box_active = { width: "758px", height: "433px", opacity: "1", borderRadius: "5px", };
const box_hidden = { width: "0px", height: "0px", opacity: "0", visibility: "hidden", };

export default function FbxLoader() {
  const params = useParams();
  const location = useLocation();
  // state initializer
  const [splash, setSplash] = useState(false);
  const [model, setModel] = useState(require(`../model/default.fbx`));
  const [inputValue, setInputValue] = useState(true);


  useEffect(() => {
    const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
    setInputValue(queryData.st ??= '');
    setSplash(!(queryData.st ??= false));
    
    // axios get 받아오기

  }, [location.search, params]);

  // splash img click event
  function handleClick(e) { setSplash(false); };
  // input value change event
  function onChange(e) { setInputValue( e.target.value ); };
  // button click event
  function onClick(e) {
    setModel(require(`../model/test.fbx`));
  };

  return (
    <> 
      {/* Splash Image Section */}
      <div className="section1">
        <img onClick={handleClick} onDrag={handleClick} style={splash ? box_active : box_hidden} alt="splash" src="img/splash01.png" />
      </div>
      {/* FBX Canvas Section */}
      <div className='FbxLoader'>
        <ReactThreeFbxViewer url={model} width={758} height={433} backgroundColor={0xF5F5F5} cameraPosition={{ x: 0, y: 150, z: 115 }} controlsPosition={{ x: 0, y: 140, z: 0 }}/>
        <h1>{model}</h1>
      </div>
      {/* Input Box Section */}
      <div className='InputString'>
        <input type='text' placeholder='번역할 문장을 입력해주세요 👐' value={inputValue} onChange={onChange}></input>
        <button onClick={onClick}>입력</button>
      </div>
    </>
  )
}
