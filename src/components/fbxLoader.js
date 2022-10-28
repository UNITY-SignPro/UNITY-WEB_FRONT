// import modules
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useLocation, useParams } from 'react-router';
import QueryString from 'qs';
// import css
import "./css/fbx_loader.css";
// import pages
import Scene from "./fbxComponent";



// Style Initializer
const box_active = { width: "758px", height: "433px", opacity: "1", borderRadius: "5px", };
const box_hidden = { width: "0px", height: "0px", opacity: "0", visibility: "hidden", };

export default function FbxLoader() {
  const params = useParams();
  const location = useLocation();


  // state initializer
  const [splash, setSplash] = useState(false);
  const [inputValue, setInputValue] = useState('default');
  const [model, setModel] = useState('test.glb');

  useEffect(() => {
    const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
    setInputValue(queryData.st ??= '');
    setSplash(!(queryData.st ??= false));
    setModel('test.glb');
    // axios get 받아오기

  }, [location.search, params]);

  // splash img click event
  function handleClick(e) { setSplash(false); };
  // input value change event
  function onChange(e) { setInputValue( e.target.value ); };
  // button click event
  function onClick(e) {

    if (model == 'run.glb') {
      setModel('test.glb');
      console.log("run.glb");
    } else {
      setModel('run.glb');
      console.log("test.glb");
    }
    // if (model === 'test.glb') { setModel('default.glb');
    // } else if (model === 'default.glb') { setModel('run.glb'); 
    // } else ( setModel('test.glb') );
  };

  return (
    <> 
      {/* Splash Image Section */}
      <div className="section1" style={{zIndex: 10}}>
        <img onClick={handleClick} onDrag={handleClick} style={splash ? box_active : box_hidden} alt="splash" src="img/splash01.png" />
      </div>

      {/* FBX Viewer Section */}
      <div className="fbx_loader">
        <Scene model={model} />
      </div>


      {/* Input Box Section */}
      <div className='InputString'>
        <input type='text' placeholder='번역할 문장을 입력해주세요 👐' value={inputValue} onChange={onChange}></input>
        <button onClick={onClick}>입력</button>
      </div>
    </>
  )
}



