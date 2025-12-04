import React from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBG() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // loads only required features (no checkVersion issue)
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000",
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 140,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 0.7,
            outModes: "out",
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: { repulse: { distance: 100 } },
        },
        fpsLimit: 60,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}
