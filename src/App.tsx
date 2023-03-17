import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Jennifer Reid</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          The count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          I'm a counter
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
