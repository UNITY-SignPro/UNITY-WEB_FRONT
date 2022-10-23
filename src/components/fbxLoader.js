import React, { Component, useState } from 'react'
import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';

import ModelURL from './modelURL';

// let fbxUrl = require('../model/test.fbx')
let fbxUrl = require('../model/default.fbx')



const box_active = {
  width: "758px",
  height: "433px",
  opacity: "1",
  borderRadius: "5px",


};
const box_hidden = {
  width: "0px",
  height: "0px",
  opacity: "0",
  visibility: "hidden",
};


function fbxBox() {
  return (
    <div className='fbxBox'></div>
  )
}



export default class fbxLoader extends Component {
  state = {
    select: true,
    string: "",
  };
  handleClick = () => {
    this.setState((state) => ({
      select: false,
    }));
  };
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
        string: e.target.value,
    });
  };
  onClick = (e) => {
      console.log(ModelURL(this.state.string));
      fbxUrl = require('../model/test.fbx')
      this.forceUpdate();
  }

  render () {
    return (
      <>
        <div className="section1">
          <img onClick={this.handleClick} onDrag={this.handleClick} style={this.state.select ? box_active : box_hidden} alt="splash image" src="img/splash01.png" />
        </div>
        
        <div className='FbxLoader'>
          <ReactThreeFbxViewer
            width={569*2/1.5}
            height={325*2/1.5}
            backgroundColor={0xF5F5F5}
            cameraPosition={{ x: 0, y: 150, z: 115 }}
            controlsPosition={{ x: 0, y: 140, z: 0 }}
            url={fbxUrl}
          />
        </div>
    
        
        <div className='InputString'>
          <input type='text' placeholder='번역할 문장을 입력해주세요 👐' value={this.state.string} onChange={this.onChange}></input>
          <button onClick={this.onClick}>입력</button>
        </div>
    </>
        
    );
  }
}
