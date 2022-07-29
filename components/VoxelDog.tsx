import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const eastOurCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const VoxelDog = () => {
  return <div>i be voxel dogging</div>;
};

export default VoxelDog;
