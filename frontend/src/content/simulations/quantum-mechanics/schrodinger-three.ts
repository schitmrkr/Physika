import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export interface WaveformRenderer {
  update: (re: Float64Array, im: Float64Array, density: Float64Array) => void;
  dispose: () => void;
}

const cssColor = (name: string, fallback: string): string => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
};

export const createWaveformRenderer = (
  mount: HTMLElement,
  count: number,
): WaveformRenderer | null => {
  const width = Math.max(mount.clientWidth, 320);
  const height = Math.max(mount.clientHeight, 320);

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = 'sim-three__canvas';
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(7.5, 3.6, 9.5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 6;
  controls.maxDistance = 22;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  const gridColor = cssColor('--line', '#d7d0c1');
  const accent = cssColor('--subject', '#6c4bb6');
  const signal = cssColor('--signal', '#e4572e');

  const grid = new THREE.GridHelper(6.4, 8, gridColor, gridColor);
  grid.rotation.z = Math.PI / 2;
  const gridMaterial = grid.material as THREE.Material;
  gridMaterial.transparent = true;
  gridMaterial.opacity = 0.32;
  scene.add(grid);

  const axes = new THREE.AxesHelper(2.4);
  const axesMaterial = axes.material as THREE.Material;
  axesMaterial.transparent = true;
  axesMaterial.opacity = 0.55;
  scene.add(axes);

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const shadowPositions = new Float32Array(count * 3);

  const trajectoryGeometry = new THREE.BufferGeometry();
  trajectoryGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  trajectoryGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const trajectoryMaterial = new THREE.LineBasicMaterial({ vertexColors: true, linewidth: 2 });
  const trajectory = new THREE.Line(trajectoryGeometry, trajectoryMaterial);
  scene.add(trajectory);

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.07,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  scene.add(points);

  const shadowGeometry = new THREE.BufferGeometry();
  shadowGeometry.setAttribute('position', new THREE.BufferAttribute(shadowPositions, 3));
  const shadowMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color(signal),
    transparent: true,
    opacity: 0.3,
  });
  const shadow = new THREE.Line(shadowGeometry, shadowMaterial);
  scene.add(shadow);

  const accentColor = new THREE.Color(accent);
  const signalColor = new THREE.Color(signal);
  const maxDensity = { value: 0.001 };

  const update = (nextRe: Float64Array, nextIm: Float64Array, density: Float64Array): void => {
    maxDensity.value = 0.001;
    for (let j = 0; j < density.length; j += 1) {
      maxDensity.value = Math.max(maxDensity.value, density[j]);
    }
    for (let j = 0; j < density.length; j += 1) {
      const x = -4.6 + (j / (density.length - 1)) * 9.2;
      const y = nextRe[j] * 2.3;
      const z = nextIm[j] * 2.3;
      positions[j * 3] = x;
      positions[j * 3 + 1] = y;
      positions[j * 3 + 2] = z;
      shadowPositions[j * 3] = x;
      shadowPositions[j * 3 + 1] = y;
      shadowPositions[j * 3 + 2] = 0;

      const weight = Math.min(density[j] / maxDensity.value, 1);
      colors[j * 3] = accentColor.r + (signalColor.r - accentColor.r) * weight;
      colors[j * 3 + 1] = accentColor.g + (signalColor.g - accentColor.g) * weight;
      colors[j * 3 + 2] = accentColor.b + (signalColor.b - accentColor.b) * weight;
    }
    trajectoryGeometry.attributes.position.needsUpdate = true;
    trajectoryGeometry.attributes.color.needsUpdate = true;
    pointsGeometry.attributes.position.needsUpdate = true;
    pointsGeometry.attributes.color.needsUpdate = true;
    shadowGeometry.attributes.position.needsUpdate = true;
  };

  let frame = 0;
  const animate = (): void => {
    frame = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  const observer = new ResizeObserver(() => {
    const nextWidth = Math.max(mount.clientWidth, 320);
    const nextHeight = Math.max(mount.clientHeight, 320);
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  });
  observer.observe(mount);

  return {
    update,
    dispose: () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      trajectoryGeometry.dispose();
      trajectoryMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      shadowGeometry.dispose();
      shadowMaterial.dispose();
      grid.geometry.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
};
