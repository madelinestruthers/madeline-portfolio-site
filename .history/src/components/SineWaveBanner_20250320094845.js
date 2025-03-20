"use client"; // Ensures this runs only on the client-side

import { useEffect, useRef } from "react";

const SineWaveBanner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 300; // Adjust height as needed

    let increment = 0;
    
    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      let amplitude = 50;
      let frequency = 0.02;

      for (let i = 0; i < canvas.width; i++) {
        let y = amplitude * Math.sin(i * frequency + increment) + canvas.height / 2;
        ctx.lineTo(i, y);
      }

      ctx.strokeStyle = "#A6C5E9"; // Adjust color
      ctx.lineWidth = 2;
      ctx.stroke();

      increment += 0.05;
      requestAnimationFrame(drawWave);
    };

    drawWave();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "400px", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }}></canvas>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold"
      }}>
      </div>
    </div>
  );
};

export default SineWaveBanner;
