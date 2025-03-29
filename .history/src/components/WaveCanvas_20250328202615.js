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
    let mouseX = width / 2;

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
    });

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(0, height);

      const frequency = 0.012;
      const amplitude = 30 + ((mouseX - width / 2) / width) * 40;

      for (let x = 0; x <= width; x++) {
        const y = Math.sin(x * frequency + t * 0.0015) * amplitude + height / 2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = "hsl(210, 82%, 15%)";
      ctx.fill();
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
