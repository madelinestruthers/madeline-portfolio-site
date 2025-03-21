"use client"; // Ensures this runs only on the client-side

import { useEffect, useRef } from "react";

const SineWaveBanner = () => {
  const canvasRef = useRef(null);
  let mouseX = 0;
  let targetAmplitude = 55;
  let currentAmplitude = 55;
  let mouseInfluence = 0;

  useEffect(() => {
    class WavesCanvas {
      constructor(elm, options = {}) {
        this.canvas = elm;
        if (!this.canvas) return;

        const data = this.canvas.dataset;
        this.settings = {
          waveCount: parseInt(data.waveCount) || options.waveCount || 16,
          amplitude: parseInt(data.amplitude) || options.amplitude || 55,
          baseSpeed: parseFloat(data.baseSpeed) || options.baseSpeed || 0.01,
          waveSpacing: parseInt(data.waveSpacing) || options.waveSpacing || 29.5,
          baseColor: data.baseColor
            ? data.baseColor.split(",").map(Number)
            : options.baseColor || [0, 160, 255],
          lineWidth: parseInt(data.lineWidth) || options.lineWidth || 1.8,
          direction: data.direction || options.direction || "left",
          leftOffset: data.leftOffset || options.leftOffset || 0,
          rightOffset: data.rightOffset || options.rightOffset || 0,
        };

        this.ctx = this.canvas.getContext("2d");
        this.waves = [];

        this.init();
      }

      resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.waves.forEach((wave) => wave.updateOffset());
      }

      Wave = class {
        constructor(index, settings, canvas) {
          this.index = index;
          this.phase = index * 0.3;
          this.settings = settings;
          this.canvas = canvas;
          this.color = `rgba(${settings.baseColor[0]}, ${
            settings.baseColor[1]
          }, ${settings.baseColor[2]}, ${1 - this.index / this.settings.waveCount})`;
          this.updateOffset();
        }

        updateOffset() {
          const totalHeight =
            (this.settings.waveCount - 1) * this.settings.waveSpacing;
          const centerOffset = (this.canvas.height - totalHeight) / 2;
          this.yOffset = centerOffset + this.index * this.settings.waveSpacing + 40;
        }

        draw(ctx) {
          ctx.beginPath();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.settings.lineWidth;

          let firstX = 0;
          const leftOffsetPx =
            (this.settings.leftOffset / 100) * this.canvas.height;
          let firstY =
            this.yOffset +
            leftOffsetPx +
            Math.sin(firstX * 0.005 + this.phase) * currentAmplitude +
            Math.cos(firstX * 0.002 + this.phase) * currentAmplitude * 0.5;
          ctx.moveTo(firstX, firstY);

          for (let x = 0; x <= this.canvas.width; x += 20) {
            const t = x / this.canvas.width;
            const rightOffsetPx =
              (this.settings.rightOffset / 100) * this.canvas.height;
            const offset = leftOffsetPx * (1 - t) + rightOffsetPx * t;
            const influence = Math.sin((x - mouseX) * 0.01) * mouseInfluence;
            const y =
              this.yOffset +
              offset +
              Math.sin(x * 0.005 + this.phase) * currentAmplitude +
              Math.cos(x * 0.002 + this.phase) * currentAmplitude * 0.5 +
              influence;
            ctx.lineTo(x, y);
          }

          ctx.stroke();
        }

        update() {
          const speed =
            this.settings.direction === "right"
              ? -this.settings.baseSpeed
              : this.settings.baseSpeed;
          this.phase += speed;
        }
      };

      init() {
        window.addEventListener("resize", () => this.resizeCanvas());
        window.addEventListener("mousemove", (e) => {
          let smoothedMouseX = mouseX * 0.9 + e.clientX * 0.1; // Smooth movement
          mouseX = smoothedMouseX;
          targetAmplitude = 65;
          mouseInfluence = 8;
        });
        window.addEventListener("mouseleave", () => {
          targetAmplitude = 55;
          mouseInfluence = 0;
        });
        this.resizeCanvas();

        for (let i = 0; i < this.settings.waveCount; i++) {
          this.waves.push(new this.Wave(i, this.settings, this.canvas));
        }

        this.animate();
      }

      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let gradient = this.ctx.createRadialGradient(mouseX, this.canvas.height / 2, 50, mouseX, this.canvas.height / 2, 300);
        gradient.addColorStop(0, '#1F5A80');
        gradient.addColorStop(0.5, '#174466'); // Darker blue at hover area
        gradient.addColorStop(1, '#1F5A80');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        currentAmplitude += (targetAmplitude - currentAmplitude) * 0.1;
        mouseInfluence *= 0.95; // fade out interaction gradually

        this.waves.forEach((wave) => {
          wave.updateOffset();
          wave.update();
          wave.draw(this.ctx);
        });

        this.animationFrame = requestAnimationFrame(() => this.animate());
      }
    }

    const canvas = canvasRef.current;
    const wavesCanvas = new WavesCanvas(canvas);

    return () => {
      cancelAnimationFrame(wavesCanvas.animationFrame);
      window.removeEventListener("mousemove", (e) => {
        mouseX = e.clientX;
      });
      window.removeEventListener("mouseleave", () => {
        targetAmplitude = 55;
        mouseInfluence = 0;
      });
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "620px", overflow: "hidden", backgroundColor: "#1F5A80" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} data-wave-count="16" data-amplitude="50"></canvas>
    </div>
  );
};

export default SineWaveBanner;
