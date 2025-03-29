"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = 120;
    let animationId;
    let timeOffset = 0;
    let mouseX = width / 2;
    let targetAmplitude = 25;
    let currentAmplitude = 25;
    let mouseInfluence = 0;

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      const distance = Math.abs(e.clientY - (window.innerHeight - height));
      if (distance < 150) {
        mouseX = e.clientX;
        targetAmplitude = 40;
        mouseInfluence = 1 + (150 - distance) / 150; // more influence closer
      }
    };

    const handleMouseLeave = () => {
      targetAmplitude = 25;
      mouseInfluence = 0;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (t, color, baseAmplitude, speed, opacity, offsetY = 0) => {
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x++) {
        const influence = Math.sin((x - mouseX) * 0.01) * mouseInfluence * 6;
        const y =
          Math.sin((x + timeOffset) * 0.01 + t * speed) * baseAmplitude + height / 2 + offsetY + influence;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "hsl(210, 82%, 20%)");
      gradient.addColorStop(0.5, `hsla(${color}, ${opacity})`);
      gradient.addColorStop(1, "hsl(210, 82%, 10%)");

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      drawWave(t, "210, 82%, 15%", currentAmplitude, 0.0007, 1);
      timeOffset += 0.1;
      currentAmplitude += (targetAmplitude - currentAmplitude) * 0.1;
      mouseInfluence *= 0.9;
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
        height: "180px",
        display: "block",
        position: "relative",
        bottom: 0,
      }}
    />
  );
}
