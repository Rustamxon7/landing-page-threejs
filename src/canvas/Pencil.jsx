import React, { useLayoutEffect, useRef } from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/pencils-v5.glb');

  const rotate = useRef();

  useFrame((state, delta) => {
    easing.dampC(materials.Material.color, snap.color, 0.25, delta);
    easing.dampC(materials.Pencil.color, snap.textcolor, 0.25, delta);
  });
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString} scale={3} ref={rotate} rotation={[0, -1.6, 0]}>
      <group scale={[0.76, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Pencil}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Pencil}
        position={[0.01, 2.82, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.04}
      />
      <group position={[-0.02, 2.92, -0.01]} rotation={[2.44, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.Pencil}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.Pencil}
        position={[0.01, 3.03, 0]}
        rotation={[1.57, 0, -1.57]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials.Pencil}
        position={[0.01, 2.9, 0]}
        rotation={[1.57, 0, -1.57]}
        scale={0.0045}
      />
    </group>
  );
};

export default Shirt;
