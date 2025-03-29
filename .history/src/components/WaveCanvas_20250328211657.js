"use client";

import { useEffect, useRef, useState } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [canvasHeight, setCanvasHeight] = useState(200);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = width < 768 ? 140 : 200;
    let animationId;
    let timeOffset = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetAmplitude = 25;
    let currentAmplitude = 25;
    let velocity = 0;
    let mouseInfluence = 0;
    let leaveTime = 0;
    let ambientTime = 0;

    canvas.width = width;
    canvas.height = height;
    setIsMobile(width < 768);
    setCanvasHeight(height);

    const handleResize = () => {
      width = window.innerWidth;
      height = width < 768 ? 140 : 200;
      canvas.width = width;
      canvas.height = height;
      setIsMobile(width < 768);
      setCanvasHeight(height);
    };

    const handleMouseMove = (e) => {
      const canvasRect = canvas.getBoundingClientRect();
      const yFromBottom = canvasRect.bottom - e.clientY;
      if (yFromBottom > 0 && yFromBottom < 200) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        targetAmplitude = 50;
        mouseInfluence = 1 + (200 - yFromBottom) / 100;
      }
    };

    const handleMouseLeave = () => {
      targetAmplitude = 25;
      mouseInfluence = 0;
      leaveTime = performance.now();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (t, color, baseAmplitude, speed, opacity, glowStrength, offsetY = 0) => {
      ctx.beginPath();
      ctx.moveTo(0, height);
      const points = 100;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * width;
        const yOffset = Math.sin((x + timeOffset) * 0.01 + t * speed) * baseAmplitude;
        const influence = Math.sin((t / 20 + i) * 0.1) * mouseInfluence * 4;
        const y = yOffset + height / 2 + influence;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();

      ctx.fillStyle = `hsl(${color})`;
      ctx.shadowColor = `hsla(210, 100%, 70%, ${glowStrength})`;
      ctx.shadowBlur = 25 * glowStrength;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * width;
        const yOffset = Math.sin((x + timeOffset) * 0.01 + t * speed) * baseAmplitude;
        const influence = Math.sin((t / 20 + i) * 0.1) * mouseInfluence * 4;
        const y = yOffset + height / 2 + influence;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "hsla(210, 100%, 85%, 0.12)";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const ambientAmplitude = 5 * Math.sin(ambientTime * 0.002);
      const animatedAmplitude = currentAmplitude + ambientAmplitude;
      const glowStrength = 0.15 + 0.15 * Math.sin(ambientTime * 0.002);

      drawWave(t, "210, 82%, 15%", animatedAmplitude, 0.0005, 1, glowStrength);
      timeOffset += 0.03;
      ambientTime++;

      const damping = 0.85;
      const stiffness = 0.1;
      const force = targetAmplitude - currentAmplitude;
      velocity += force * stiffness;
      velocity *= damping;
      currentAmplitude += velocity;

      mouseInfluence *= 0.9;

      if (performance.now() - leaveTime < 500) {
        timeOffset += 0.5;
      }
    };

    const animate = (time) => {
      draw(time);
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: `${canvasHeight}px`,
        display: "block",
        position: "relative",
        bottom: 0,
      }}
    />
  );
}
