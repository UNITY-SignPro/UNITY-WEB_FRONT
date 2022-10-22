import React, { Component } from 'react'
import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';

let fbxUrl = require('../model/test.fbx')

export default class fbxLoader extends Component {
    render () {
      return (
          <div className='FbxLoader'>
            <ReactThreeFbxViewer
              width={569*2/1.5}
              height={325*2/1.5}
              backgroundColor={0xF5F5F5}
              cameraPosition={{ x: 0, y: 0, z: 150 }}
              // controlsPosition={{ x: 0, y: 0, z: 0 }}

              // cameraPosition={{ x: 0, y: 100, z: 115 }}
              // controlsPosition={{ x: 0, y: 110, z: 0 }}
              url={fbxUrl}
            />
          </div>
      );
  }
}