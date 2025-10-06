import { useState } from "react";
import "./App.css";
import CVForm from "./components/CVForm";

function App() {
  const [info, setInfo] = useState({});  

  function onChange(e) {
    const { key } = e.target.dataset;
    const newInfo = { ...info };
    newInfo[key] = e.target.value;
    setInfo(newInfo);
  }

  return (
    <>
      <CVForm onChange={onChange}></CVForm>
    </>
  );
}

export default App;
