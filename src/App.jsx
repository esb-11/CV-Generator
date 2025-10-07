import { useState } from "react";
import "./App.css";
import exampleData from "./exampleData";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  const [cvInfo, setCvInfo] = useState(exampleData);
  const [sections, setSections] = useState([]);

  function handleGeneralInfoChange(e) {
    const { key, section } = e.target.dataset;    
    const oldGeneralInfo = cvInfo[section] || {};
    const newGeneralInfo = { ...oldGeneralInfo, [key]: e.target.value };
    setCvInfo({ ...cvInfo, [section]: newGeneralInfo });
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
        generalInfo={cvInfo.generalInfo}
      ></CVForm>
      <CVPreview cvInfo={cvInfo} ></CVPreview>
    </>
  );
}

export default App;
