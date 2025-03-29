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

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    const drawWave = (t, color, amplitude, speed, opacity, offsetY = 0) => {
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x++) {
        const y =
          Math.sin((x + timeOffset) * 0.01 + t * speed) * amplitude + height / 2 + offsetY;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = `hsla(${color}, ${opacity})`;
      ctx.fill();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);

      drawWave(t, "210, 82%, 10%", 15, 0.001, 0.25); // background wave
      drawWave(t, "210, 82%, 15%", 25, 0.0007, 1);   // front wave

      timeOffset += 0.1;
    };

    const animate = (time) => {
      draw(time);
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "120px",
        display: "block",
        position: "relative",
        bottom: 0,
      }}
    />
  );
}
