// import modules
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useLocation, useParams } from 'react-router';
import QueryString from 'qs';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
// import {  } from '@react-three/drei'

// import other components
import Viewer from './FbxViewer.js';

// import css
import "./css/fbx_loader.css";



// Style Initializer
const box_active = { width: "758px", height: "433px", opacity: "1", borderRadius: "5px", };
const box_hidden = { width: "0px", height: "0px", opacity: "0", visibility: "hidden", };

export default function FbxLoader() {
  const params = useParams();
  const location = useLocation();


  // state initializer
  const [splash, setSplash] = useState(false);
  const [inputValue, setInputValue] = useState(true);
  const [model, setModel] = useState('test.glb');

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
    if (model == 'test.glb') { setModel('default.glb');
    } else if (model == 'default.glb') { setModel('run.glb'); 
    } else ( setModel('test.glb') );
  };

  return (
    <> 
      {/* Splash Image Section */}
      <div className="section1" style={{zIndex: 10}}>
        <img onClick={handleClick} onDrag={handleClick} style={splash ? box_active : box_hidden} alt="splash" src="img/splash01.png" />
      </div>

      {/* FBX Viewer Section */}
      <div className="fbx_loader">
        <Canvas style={{width: "758px", height: "433px"}} camera={{ position: [0, 0, 1.5], zoom: 2.5 }}>
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Viewer model={model} />
          </Suspense>
        </Canvas>
      </div>


      {/* Input Box Section */}
      <div className='InputString'>
        <input type='text' placeholder='번역할 문장을 입력해주세요 👐' value={inputValue} onChange={onChange}></input>
        <button onClick={onClick}>입력</button>
      </div>
    </>
  )
}

useGLTF.preload('/test.glb')
