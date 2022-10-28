import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from "@react-three/drei";

// only export dafault pose
export default function DefaultModel() {
  const group = useRef()
  const { nodes, materials } = useGLTF('/default.glb')
  const [pos, setPos] = useState([0, 0, 0]);
  useEffect(() => {
    setPos([0, -1.4, 0])
  }, []);
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, -1.4, 0]} rotation={[Math.PI/2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton} scale={200} />
          <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton} scale={200} />
        </group>
      </group>
    </group>
  )
}

// for fast loading
useGLTF.preload('/default.glb')