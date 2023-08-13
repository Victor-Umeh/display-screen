import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./styles.css";

export default function App() {
  const [bgColor, setBgColor] = useState("");

  return (
    <div className="App">
      <div className="box" style={{ backgroundColor: bgColor }}>
        <span>{bgColor || "COLOR"}</span>
      </div>
      <div className="container">
        <Input bgColor={bgColor} setBgColor={setBgColor} />
        <Button />
      </div>
    </div>
  );
}
