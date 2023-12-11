import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap inset-x-0 justify-center bottom-12">
        <div className="bg-white flex flex-wrap justify-center rounded-xl h-fit w-fit px-3 py-3 gap-3">
          <button
            className=" px-2 py-2 text-white rounded-xl font-semibold"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=" px-2 py-2 text-white rounded-xl font-semibold"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className=" px-2 py-2 text-white rounded-xl font-semibold"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className=" px-2 py-2 text-white rounded-xl font-semibold"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className=" px-2 py-2 text-white rounded-xl font-semibold"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
