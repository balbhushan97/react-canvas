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

    canvas.isDrawingMode = true;

    const brush = new PencilBrush(canvas);
    brush.width = brushSize;
    brush.color = brushColor;
    canvas.freeDrawingBrush = brush;

    fabricRef.current = canvas;

    // ✅ Allow drop
    canvas.upperCanvasEl.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    canvas.upperCanvasEl.addEventListener("drop", (e) => {
      e.preventDefault();

      const type = e.dataTransfer.getData("type");

      const rect = canvas.upperCanvasEl.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      addObject(type, x, y);
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  // 🎯 Add object at drop position
  const addObject = (type, left, top) => {
    const canvas = fabricRef.current;

    let obj;

    if (type === "rect") {
      obj = new Rect({
        left,
        top,
        width: 120,
        height: 80,
        fill: "blue",
      });
    }

    if (type === "text") {
      obj = new IText("Edit me", {
        left,
        top,
        fontSize: 20,
      });
    }

    if (obj) {
      canvas.add(obj);
      canvas.setActiveObject(obj);
    }
  };

  // Brush updates
  useEffect(() => {
    if (fabricRef.current?.freeDrawingBrush) {
      fabricRef.current.freeDrawingBrush.color = brushColor;
    }
  }, [brushColor]);

  useEffect(() => {
    if (fabricRef.current?.freeDrawingBrush) {
      fabricRef.current.freeDrawingBrush.width = brushSize;
    }
  }, [brushSize]);

  const toggleDrawing = () => {
    const canvas = fabricRef.current;
    canvas.isDrawingMode = !canvas.isDrawingMode;
    setIsDrawing(canvas.isDrawingMode);
  };

  return (
    <div style={{ display: "flex", padding: 20, gap: 20 }}>
      
      {/* 🔥 Sidebar */}
      <div style={{ width: 150 }}>
        <h4>Drag Items</h4>

        <div
          draggable
          onDragStart={(e) => e.dataTransfer.setData("type", "rect")}
          style={{
            padding: 10,
            border: "1px solid black",
            marginBottom: 10,
            cursor: "grab",
          }}
        >
          Rectangle
        </div>

        <div
          draggable
          onDragStart={(e) => e.dataTransfer.setData("type", "text")}
          style={{
            padding: 10,
            border: "1px solid black",
            cursor: "grab",
          }}
        >
          Text
        </div>
      </div>

      {/* 🎯 Canvas Area */}
      <div>
        <h2>Fabric Drag & Drop Canvas</h2>

        <button onClick={toggleDrawing}>
          {isDrawing ? "Disable Draw" : "Enable Draw"}
        </button>

        <br /><br />

        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />

        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value))}
        />

        <br /><br />

        <canvas
          ref={canvasRef}
          width={900}
          height={500}
          style={{ border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
};

export default FabricCanvas;