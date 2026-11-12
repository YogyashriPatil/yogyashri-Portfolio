import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "../css/skills-globe.css";

const skills = [
  { name: "Java", logo: "java/java-original.svg" },
  { name: "Python", logo: "python/python-original.svg" },
  { name: "JavaScript", logo: "javascript/javascript-original.svg" },
  { name: "React", logo: "react/react-original.svg" },
  { name: "Next.js", logo: "nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "nodejs/nodejs-original.svg" },
  { name: "Express", logo: "express/express-original.svg" },
  { name: "MongoDB", logo: "mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "postgresql/postgresql-original.svg" },
  { name: "HTML5", logo: "html5/html5-original.svg" },
  { name: "CSS3", logo: "css3/css3-original.svg" },
  { name: "Git", logo: "git/git-original.svg" },
  { name: "GitHub", logo: "github/github-original.svg" },
  { name: "AWS", logo: "amazonwebservices/amazonwebservices-original.svg" },
  { name: "Docker", logo: "docker/docker-original.svg" },
  { name: "Linux", logo: "linux/linux-original.svg" },
  { name: "Flask", logo: "flask/flask-original.svg" },
  { name: "Tailwind CSS", logo: "tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", logo: "typescript/typescript-original.svg" },
  { name: "TensorFlow", logo: "tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "pytorch/pytorch-original.svg" },
  { name: "Scikit-learn", logo: "scikitlearn/scikitlearn-original.svg" },
];

function getSpherePositions(items, radius) {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return items.map((skill, index) => {
    const y = 1 - (index / (items.length - 1)) * 2;
    const circleRadius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;

    return {
      ...skill,
      position: [
        Math.cos(theta) * circleRadius * radius,
        y * radius,
        Math.sin(theta) * circleRadius * radius,
      ],
    };
  });
}

function Globe() {
  const globeRef = useRef();
  const points = useMemo(() => getSpherePositions(skills, 2.4), []);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial
          color="#ff9b5e"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      {points.map((skill) => (
        <group key={skill.name} position={skill.position}>
          <Html center distanceFactor={8}>
            <div className="globe-skill-icon" title={skill.name}>
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.logo}`}
                alt={`${skill.name} logo`}
                className="technology-logo"
                loading="lazy"
                draggable="false"
              />
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  return (
    <div className="skills-globe-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#ff9b5e" />
        <Globe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
          rotateSpeed={0.6}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
