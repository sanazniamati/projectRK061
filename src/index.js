import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect } from "react-konva";
import { Html } from "react-konva-utils";
const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Html
          divProps={{
            style: {
              position: "absolute",
              top: 10,
              left: 10,
            },
          }}
        >
          <input placeholder="DOM input from Konva nodes" />
        </Html>
        <Rect x={20} y={20} width={50} height={50} fill="red" shadowBlur={5} />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
