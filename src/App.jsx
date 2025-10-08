import { useState } from "react";
import "./App.css";
import exampleData from "./exampleData";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  const [cvInfo, setCvInfo] = useState(exampleData);  

  function handleGeneralInfoChange(e) {
    const { key, section } = e.target.dataset;
    const oldGeneralInfo = cvInfo[section] || {};
    const newGeneralInfo = { ...oldGeneralInfo, [key]: e.target.value };
    setCvInfo({ ...cvInfo, [section]: newGeneralInfo });
  }

  function handleSectionChange(e) {
    const { key, section, id } = e.target.dataset;
    const oldSection = cvInfo[section];
    const newSection = oldSection ? [...oldSection] : [];
    const obj = newSection.find((value) => value.id == id);
    obj[key] = e.target.value;
    
    console.log(e.target.dataset);
    console.log(oldSection);

    setCvInfo({
      ...cvInfo,
      [section]: newSection,
    });
  }

  return (
    <>
      <CVForm
        handleGeneralInfoChange={handleGeneralInfoChange}
        handleSectionChange={handleSectionChange}
        generalInfo={cvInfo.generalInfo}
        education={cvInfo.education}
      ></CVForm>
      <CVPreview cvInfo={cvInfo}></CVPreview>
    </>
  );
}

export default App;
