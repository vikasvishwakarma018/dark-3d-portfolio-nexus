import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from './ui/button';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    containerRef.current.appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      emissive: 0x4B0082,
      emissiveIntensity: 0.5,
    });
    sphereRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(sphereRef.current);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    const pointLight = new THREE.PointLight(0xD946EF, 2);
    pointLight.position.set(5, 5, 5);
    sceneRef.current.add(pointLight);

    cameraRef.current.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.002;
        sphereRef.current.rotation.y += 0.002;
      }
      renderer.render(sceneRef.current!, cameraRef.current!);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow left-1/4 top-1/4" />
      <div className="hero-glow right-1/4 bottom-1/4" />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-pink-500 text-transparent bg-clip-text animate-fade-in">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in delay-200">
            Crafting digital experiences through code and design
          </p>
          <div className="space-x-4">
            <Button className="glass px-8 py-6 text-white hover:bg-white/10 transition-colors animate-fade-in delay-300">
              View Projects
            </Button>
            <Button variant="outline" className="px-8 py-6 border-white/10 hover:bg-white/5 animate-fade-in delay-400">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none" />
    </div>
  );
};