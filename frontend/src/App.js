// import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';

import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows, OrbitControls, Text, MeshWobbleMaterial} from '@react-three/drei';

softShadows();

function SpinningBox({position, args, color}) {
  const mesh = useRef(null);
  useFrame(()=>{mesh.current.rotation.x = mesh.current.rotation.y += 0.01});
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} factor={0.5}/>
    </mesh>
  );
}

function Plane() {
  return (
    <group>
      <mesh 
        receiveShadow
        rotation={[-Math.PI/2, 0, 0]} 
        position={[0, -3, 0]}
        >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.5} />
        <meshStandardMaterial attach="material"></meshStandardMaterial>
      </mesh>
    </group>
  );
}


function App() {
  return (
    <>
            <Canvas 
      shadows
      colorManagement 
      camera={{position:[-5, 2, 10], fov:60}}>

        <Text castShadow color="black" anchorX="center" anchorY="top" position={[5, 5, -7]} class="big" fontSize="2">
          Sorry! Under development
        </Text>

        <ambientLight intensity={0.3}/>
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity = {1.5}
          shadow-mapSize-width = {1024}
          shadow-mapSize-height = {1024}
          shadow-camera-far = {50}
          shadow-camera-left = {-10}
          shadow-camera-right = {10}
          shadow-camera-top = {10}
          shadow-camera-bottom = {-10}
        />
        <pointLight position={[-10, 0 ,20]} intensity={0.3} />
        <pointLight position={[20, 0 ,-10]} intensity={0.3} />

        <Plane />



        <SpinningBox position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
        <SpinningBox position={[-2, 1, -5]} color="pink" />
        <SpinningBox position={[5, 1, -2]} color="pink" />
        <OrbitControls minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </>
  );
}

export default App;
