import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Store3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 8, 10);
    camera.lookAt(10, 0, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(15, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Colors from Mitsuba identity
    const purpleColor = 0x9d4edd; // Roxo
    const yellowColor = 0xffff00; // Amarelo neon
    const darkBg = 0x1a1a2e;
    const floorColor = 0xd4a574; // Bege/marrom claro

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 16);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: floorColor,
      roughness: 0.8,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      roughness: 0.9,
    });

    // Front wall
    const frontWallGeometry = new THREE.BoxGeometry(20, 3, 0.2);
    const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
    frontWall.position.set(10, 1.5, 0);
    frontWall.castShadow = true;
    frontWall.receiveShadow = true;
    scene.add(frontWall);

    // Back wall
    const backWallGeometry = new THREE.BoxGeometry(20, 3, 0.2);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(10, 1.5, 16);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    scene.add(backWall);

    // Left wall
    const leftWallGeometry = new THREE.BoxGeometry(0.2, 3, 16);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(0, 1.5, 8);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    // Right wall
    const rightWallGeometry = new THREE.BoxGeometry(0.2, 3, 16);
    const rightWall = new THREE.Mesh(rightWallGeometry, wallMaterial);
    rightWall.position.set(20, 1.5, 8);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Vitrines (display windows)
    const vitrineMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.3,
      roughness: 0.4,
    });

    // Left vitrine
    const leftVitrineGeometry = new THREE.BoxGeometry(3, 2, 0.3);
    const leftVitrine = new THREE.Mesh(leftVitrineGeometry, vitrineMaterial);
    leftVitrine.position.set(1.5, 1, 3);
    leftVitrine.castShadow = true;
    scene.add(leftVitrine);

    // Right vitrine
    const rightVitrineGeometry = new THREE.BoxGeometry(3, 2, 0.3);
    const rightVitrine = new THREE.Mesh(rightVitrineGeometry, vitrineMaterial);
    rightVitrine.position.set(18.5, 1, 3);
    rightVitrine.castShadow = true;
    scene.add(rightVitrine);

    // Central display table
    const tableMaterial = new THREE.MeshStandardMaterial({
      color: purpleColor,
      roughness: 0.7,
    });

    const tableGeometry = new THREE.BoxGeometry(4, 0.8, 2);
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(10, 0.4, 6);
    table.castShadow = true;
    scene.add(table);

    // Racks for clothes
    const rackMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.6,
    });

    const createRack = (x: number, z: number) => {
      const rackGeometry = new THREE.BoxGeometry(2, 2.5, 0.2);
      const rack = new THREE.Mesh(rackGeometry, rackMaterial);
      rack.position.set(x, 1.25, z);
      rack.castShadow = true;
      scene.add(rack);
    };

    createRack(5, 10);
    createRack(15, 10);

    // Accent elements with yellow neon
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: yellowColor,
      emissive: yellowColor,
      emissiveIntensity: 0.3,
    });

    // Neon accent strip
    const accentGeometry = new THREE.BoxGeometry(20, 0.1, 0.1);
    const accentStrip = new THREE.Mesh(accentGeometry, accentMaterial);
    accentStrip.position.set(10, 2.95, 8);
    scene.add(accentStrip);

    // Reception desk
    const deskGeometry = new THREE.BoxGeometry(4, 1, 1);
    const deskMaterial = new THREE.MeshStandardMaterial({
      color: purpleColor,
      roughness: 0.6,
    });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(17, 0.5, 14);
    desk.castShadow = true;
    scene.add(desk);

    // Bathroom area
    const bathroomGeometry = new THREE.BoxGeometry(3.5, 2.5, 1.5);
    const bathroomMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0e0e0,
      roughness: 0.8,
    });
    const bathroom = new THREE.Mesh(bathroomGeometry, bathroomMaterial);
    bathroom.position.set(2, 1.25, 14.5);
    bathroom.castShadow = true;
    scene.add(bathroom);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate camera around the store
      const time = Date.now() * 0.0001;
      camera.position.x = 10 + Math.cos(time) * 12;
      camera.position.z = 8 + Math.sin(time) * 12;
      camera.lookAt(10, 0.5, 8);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-background rounded-lg overflow-hidden shadow-2xl"
      style={{ minHeight: "600px" }}
    />
  );
}
