import { useState } from "react";
import "./App.css";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [sections, setSections] = useState([]);

  function handleGeneralInfoChange(e) {
    const { key } = e.target.dataset;
    setGeneralInfo({ ...generalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
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
      <CVForm
        handleGeneralInfoChange={handleGeneralInfoChange}
        handleSectionChange={handleSectionChange}
      ></CVForm>
      <CVPreview sections={sections} generalInfo={generalInfo}></CVPreview>
    </>
  );
}

export default App;
