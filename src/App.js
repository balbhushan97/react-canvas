// import { useRef, useEffect, useState } from "react";
import FabricCanvas from "./FabricCanvas";

// const TOOLS = {
//   SELECT: "select",
//   PENCIL: "pencil",
//   TEXT: "text",
//   IMAGE: "image",
// };

export default function App() {
  // const canvasRef = useRef(null);
  // const [tool, setTool] = useState(TOOLS.SELECT);
  // const [elements, setElements] = useState([]);
  // const [selected, setSelected] = useState(null);
  // const [brushColor, setBrushColor] = useState("#000000");
  // const [textColor, setTextColor] = useState("#000000");
  // const [scale, setScale] = useState(1);
  // const [offset, setOffset] = useState({ x: 0, y: 0 });

  // const [editingText, setEditingText] = useState(null);
  // const [inputValue, setInputValue] = useState("");
  // const inputRef = useRef(null);

  // const drawing = useRef(false);
  // const currentPath = useRef([]);
  // const dragOffset = useRef({ x: 0, y: 0 });
  // const resizing = useRef(false);
  // const history = useRef([]);
  // const redoStack = useRef([]);

  // let isPanning = false;

  // const getCoords = (e) => {
  //   const rect = canvasRef.current.getBoundingClientRect();
  //   return {
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   };
  // };

  // const handleDoubleClick = (e) => {
  //   const { x, y } = getCoords(e);

  //   const found = elements.find(
  //     (el) =>
  //       el.type === "text" &&
  //       x > el.x &&
  //       x < el.x + el.width &&
  //       y > el.y - el.height &&
  //       y < el.y,
  //   );

  //   if (found) {
  //     setEditingText(found);
  //     setInputValue(found.text);
  //   }
  // };

  // // 🎯 DRAW ALL ELEMENTS
  // const redraw = (ctx, elems = elements) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.setTransform(scale, 0, 0, scale, offset.x, offset.y);
  //   ctx.fillText(elems.text, elems.x, elems.y);
  //   elems.forEach((el) => {
  //     if (el.type === "pencil") {
  //       ctx.beginPath();
  //       ctx.strokeStyle = el.color;
  //       el.path.forEach((p, i) => {
  //         if (i === 0) ctx.moveTo(p.x, p.y);
  //         else ctx.lineTo(p.x, p.y);
  //       });
  //       ctx.stroke();
  //     }

  //     if (el.type === "text") {
  //       ctx.fillStyle = el.color;
  //       ctx.font = `${el.fontSize}px Arial`;
  //       ctx.fillText(el.text, el.x, el.y);
  //     }

  //     if (el.type === "rect") {
  //       ctx.fillStyle = el.color;
  //       ctx.fillRect(el.x, el.y, el.width, el.height);
  //     }
  //     if (el.type === "circle") {
  //       ctx.beginPath();
  //       ctx.arc(el.x, el.y, el.radius, 0, Math.PI * 2);
  //       ctx.fillStyle = el.color;
  //       ctx.fill();
  //     }
  //     if (el.type === "image") {
  //       ctx.drawImage(el.img, el.x, el.y, el.width, el.height);
  //     }
  //   });

  //   // selection border
  //   if (selected) {
  //     ctx.strokeStyle = "blue";
  //     ctx.strokeRect(
  //       selected.x,
  //       selected.y,
  //       selected.width || 100,
  //       selected.height || 30,
  //     );
  //   }
  // };

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   redraw(ctx);
  // }, [elements, selected]);

  // // 🎯 MOUSE DOWN
  // const handleMouseDown = (e) => {
  //   const { x, y } = getCoords(e);

  //   if (tool === TOOLS.PENCIL) {
  //     drawing.current = true;
  //     currentPath.current = [];
  //     return;
  //   }
  //   if (tool === "select" && !selected) {
  //     isPanning = true;
  //   }

  //   // find selected element
  //   const found = elements.find((el) => {
  //     return (
  //       x > el.x &&
  //       x < el.x + (el.width || 100) &&
  //       y > el.y &&
  //       y < el.y + (el.height || 30)
  //     );
  //   });

  //   if (found) {
  //     setSelected(found);
  //     dragOffset.current = {
  //       x: x - found.x,
  //       y: y - found.y,
  //     };

  //     // check resize corner
  //     if (
  //       x > found.x + (found.width || 100) - 10 &&
  //       y > found.y + (found.height || 30) - 10
  //     ) {
  //       resizing.current = true;
  //     }
  //   } else {
  //     setSelected(null);
  //   }
  // };

  // // 🎯 MOUSE MOVE
  // const handleMouseMove = (e) => {
  //   const { x, y } = getCoords(e);
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   if (isPanning) {
  //     setOffset((prev) => ({
  //       x: prev.x + e.movementX,
  //       y: prev.y + e.movementY,
  //     }));
  //   }
  //   // pencil
  //   if (drawing.current) {
  //     currentPath.current.push({ x, y });

  //     redraw(ctx);
  //     ctx.beginPath();
  //     ctx.strokeStyle = brushColor;

  //     currentPath.current.forEach((p, i) => {
  //       if (i === 0) ctx.moveTo(p.x, p.y);
  //       else ctx.lineTo(p.x, p.y);
  //     });

  //     ctx.stroke();
  //     return;
  //   }

  //   if (selected) {
  //     if (resizing.current) {
  //       selected.width = x - selected.x;
  //       selected.height = y - selected.y;
  //     } else {
  //       selected.x = x - dragOffset.current.x;
  //       selected.y = y - dragOffset.current.y;
  //     }

  //     redraw(ctx);
  //   }
  // };

  // // 🎯 MOUSE UP
  // const handleMouseUp = () => {
  //   isPanning = false;
  //   if (drawing.current) {
  //     setElements((prev) => {
  //       saveHistory(prev); // ✅ save OLD state
  //       return [
  //         ...prev,
  //         { type: "pencil", path: currentPath.current, color: brushColor },
  //       ];
  //     });
  //   }

  //   drawing.current = false;
  //   resizing.current = false;
  // };

  // // 🎯 ADD TEXT
  // const addText = () => {
  //   const newText = {
  //     type: "text",
  //     text: "Edit me",
  //     x: 100,
  //     y: 100,
  //     color: textColor,
  //     fontSize: 20,
  //     width: 100,
  //     height: 30,
  //   };

  //   setElements((prev) => {
  //     saveHistory(prev); // ✅ save OLD state
  //     return [...prev, newText];
  //   });
  // };

  // // 🎯 ADD IMAGE
  // const addImage = (e) => {
  //   const file = e.target.files[0];
  //   const img = new Image();
  //   img.src = URL.createObjectURL(file);

  //   img.onload = () => {
  //     setElements((prev) => {
  //       saveHistory(prev); // ✅ save OLD state
  //       return [
  //         ...prev,
  //         {
  //           type: "image",
  //           img,
  //           x: 100,
  //           y: 100,
  //           width: 150,
  //           height: 100,
  //         },
  //       ];
  //     });
  //   };
  // };

  // const saveHistory = (newElements) => {
  //   history.current.push(JSON.stringify(newElements));
  //   redoStack.current = []; // clear redo
  // };

  // const undo = () => {
  //   console.log("history.current.length", history.current.length);
  //   if (history.current.length === 0) return;

  //   const prev = history.current.pop();
  //   redoStack.current.push(JSON.stringify(elements));

  //   setElements(JSON.parse(prev));
  // };

  // const redo = () => {
  //   if (redoStack.current.length === 0) return;

  //   const next = redoStack.current.pop();
  //   history.current.push(JSON.stringify(elements));

  //   setElements(JSON.parse(next));
  // };
  // const handleWheel = (e) => {
  //   e.preventDefault();

  //   const zoomFactor = 0.1;
  //   const newScale = e.deltaY < 0 ? scale + zoomFactor : scale - zoomFactor;

  //   setScale(Math.max(0.5, Math.min(newScale, 3)));
  // };

  // const clearCanvas = () => {
  //   setElements([]);
  //   setSelected(null);
  // };

  // const saveText = () => {
  //   setElements((prev) =>
  //     prev.map((el) => (el === editingText ? { ...el, text: inputValue } : el)),
  //   );

  //   setEditingText(null);
  // };

  // const handleDragStart = (e, type) => {
  //   e.dataTransfer.setData("type", type);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();

  //   const type = e.dataTransfer.getData("type");

  //   const rect = canvasRef.current.getBoundingClientRect();

  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   let newElement;

  //   if (type === "rect") {
  //     newElement = {
  //       id: Date.now(),
  //       type: "rect",
  //       x,
  //       y,
  //       width: 100,
  //       height: 100,
  //       color: "blue",
  //     };
  //   }

  //   if (type === "circle") {
  //     newElement = {
  //       id: Date.now(),
  //       type: "circle",
  //       x,
  //       y,
  //       radius: 50,
  //       color: "green",
  //     };
  //   }

  //   if (type === "text") {
  //     newElement = {
  //       id: Date.now(),
  //       type: "text",
  //       x,
  //       y,
  //       text: "New Text",
  //       color: "black",
  //       fontSize: 20,
  //       width: 100,
  //       height: 30,
  //     };
  //   }

  //   setElements((prev) => [...prev, newElement]);
  // };

  // const [clipboard, setClipboard] = useState(null);
  // const copy = () => {
  //   if (!selected) return;

  //   setClipboard({ ...selected });
  // };
  // const paste = () => {
  //   if (!clipboard) return;

  //   const newElement = {
  //     ...clipboard,
  //     id: Date.now(),
  //     x: clipboard.x + 20,
  //     y: clipboard.y + 20,
  //   };

  //   setElements((prev) => [...prev, newElement]);
  // };
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.ctrlKey && e.key === "c") copy();
  //     if (e.ctrlKey && e.key === "v") paste();
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [selected, clipboard]);
  return (
    // <div style={{padding: 10}}>
    //   <h2>Canvas Editor</h2>
    //   <div draggable onDragStart={(e) => handleDragStart(e, "rect")}>
    //     Rectangle
    //   </div>

    //   <div draggable onDragStart={(e) => handleDragStart(e, "circle")}>
    //     Circle
    //   </div>

    //   <div draggable onDragStart={(e) => handleDragStart(e, "text")}>
    //     Text
    //   </div>
    //   {/* TOOLBAR */}
    //   <div style={{ marginBottom: 10 }}>
    //     <button onClick={() => setTool(TOOLS.SELECT)}>Select</button>
    //     <button onClick={() => setTool(TOOLS.PENCIL)}>Pencil</button>
    //     <button onClick={addText}>Add Text</button>
    //     <input type="file" onChange={addImage} />

    //     <label>Brush</label>
    //     <input
    //       type="color"
    //       value={brushColor}
    //       onChange={(e) => setBrushColor(e.target.value)}
    //     />

    //     <label>Text</label>
    //     <input
    //       type="color"
    //       value={textColor}
    //       onChange={(e) => setTextColor(e.target.value)}
    //     />
    //     <button onClick={undo}>Undo</button>
    //     <button onClick={redo}>Redo</button>
    //     <button onClick={clearCanvas}>Clear</button>
    //   </div>
    //   {editingText && (
    //     <input
    //       ref={inputRef}
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //       onBlur={() => saveText()}
    //       style={{
    //         position: "absolute",
    //         top: editingText.y,
    //         left: editingText.x,
    //         fontSize: editingText.fontSize,
    //         border: "1px solid black",
    //       }}
    //       autoFocus
    //     />
    //   )}
    //   {/* CANVAS */}
    //   <canvas
    //     ref={canvasRef}
    //     width={window.screen.width - 50}
    //     height={500}
    //     style={{ border: "1px solid black" }}
    //     onMouseDown={handleMouseDown}
    //     onMouseMove={handleMouseMove}
    //     onMouseUp={handleMouseUp}
    //     onWheel={handleWheel}
    //     onDoubleClick={handleDoubleClick}
    //     onDragOver={(e) => e.preventDefault()} // IMPORTANT
    //     onDrop={handleDrop}
    //   />
    // </div>
    <FabricCanvas />
  );
}
