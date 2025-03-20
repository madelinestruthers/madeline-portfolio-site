"use client"; // Ensures this runs only on the client-side

import { useEffect, useRef } from "react";

const WavesBanner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    class WavesCanvas {
      constructor(elm, options = {}) {
        this.canvas = elm;
        if (!this.canvas) return;

        const data = this.canvas.dataset;
        this.settings = {
          waveCount: parseInt(data.waveCount) || options.waveCount || 9,
          amplitude: parseInt(data.amplitude) || options.amplitude || 50,
          baseSpeed: parseFloat(data.baseSpeed) || options.baseSpeed || 0.005,
          waveSpacing: parseInt(data.waveSpacing) || options.waveSpacing || 30,
          baseColor: data.baseColor
            ? data.baseColor.split(",").map(Number)
            : options.baseColor || [0, 160, 255],
          lineWidth: parseInt(data.lineWidth) || options.lineWidth || 1,
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
          const centerOffset = (this
