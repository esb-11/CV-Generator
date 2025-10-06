import { useState } from "react";
import "./App.css";
import CVForm from "./components/CVForm";

function App() {
  const [sections, setSections] = useState([]);

  function onChange(e) {
    const { key, section } = e.target.dataset;
    const oldSection = sections.find((value) => value.section == section);
    const newSection = oldSection ? { ...oldSection } : { section };
    newSection[key] = e.target.value;
    setSections([
      newSection,
      ...sections.filter((value) => value.section != section),
    ]);
  }

  return (
    <>
      <CVForm onChange={onChange}></CVForm>
    </>
  );
}

export default App;
