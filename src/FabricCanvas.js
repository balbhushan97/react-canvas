import React, { useEffect, useRef, useState } from "react";
import { Canvas, Rect, IText, PencilBrush } from "fabric";

const FabricCanvas = () => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(true);
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(3);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current);

    // ✅ enable drawing
    canvas.isDrawingMode = true;

    // ✅ IMPORTANT: create brush manually
    const brush = new PencilBrush(canvas);
    brush.width = brushSize;
    brush.color = brushColor;

    canvas.freeDrawingBrush = brush;

    fabricRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  // Update brush color
  useEffect(() => {
    if (fabricRef.current) {
      fabricRef.current.freeDrawingBrush.color = brushColor;
    }
  }, [brushColor]);

  // Update brush size
  useEffect(() => {
    if (fabricRef.current) {
      fabricRef.current.freeDrawingBrush.width = brushSize;
    }
  }, [brushSize]);

  // Toggle draw mode
  const toggleDrawing = () => {
    const canvas = fabricRef.current;
    canvas.isDrawingMode = !canvas.isDrawingMode;
    setIsDrawing(canvas.isDrawingMode);
  };

  // Add rectangle
  const addRectangle = () => {
    const rect = new Rect({
      left: 100,
      top: 100,
      width: 120,
      height: 80,
      fill: "blue",
    });

    fabricRef.current.add(rect);
  };

  // Add editable text
  const addText = () => {
    const text = new IText("Edit me", {
      left: 150,
      top: 150,
      fontSize: 20,
    });

    fabricRef.current.add(text);
  };

  // Clear canvas
  const clearCanvas = () => {
    fabricRef.current.clear();
  };

  // Save image
  const saveImage = () => {
    const dataURL = fabricRef.current.toDataURL({
      format: "png",
    });

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas.png";
    link.click();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Fabric.js Drawing Canvas</h2>

      {/* Controls */}
      <div style={{ marginBottom: 10 }}>
        <button onClick={toggleDrawing}>
          {isDrawing ? "Disable Draw" : "Enable Draw"}
        </button>

        <button onClick={addRectangle}>Add Rectangle</button>
        <button onClick={addText}>Add Text</button>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveImage}>Save</button>

        <br />
        <br />

        {/* Color */}
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />

        {/* Size */}
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value))}
        />
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={900}
        height={500}
        style={{ border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default FabricCanvas;
