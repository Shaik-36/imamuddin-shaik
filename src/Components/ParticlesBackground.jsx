import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fpsLimit: 60,
    background: { color: "#0E1217" },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 2 },
      move: { enable: true, speed: 1 },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0 -z-10"
    />
  );
}
