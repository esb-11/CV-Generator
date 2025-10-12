import { useState } from "react";
import "./App.css";
import exampleData from "./exampleData";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  const [cvInfo, setCvInfo] = useState(exampleData);

  console.log(cvInfo);

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

    setCvInfo({
      ...cvInfo,
      [section]: newSection,
    });
  }

  function deleteForm(id, section) {
    const oldArray = cvInfo[section];
    const newArray = oldArray.filter((value) => value.id != id);
    setCvInfo({ ...cvInfo, [section]: newArray });
  }

  function addForm(section, form) {
    const array = cvInfo[section];
    array.push(form);
    setCvInfo({ ...cvInfo, [section]: array });
  }

  function addEducation() {
    const obj = {
      degree: "",
      schoolName: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    };
    addForm("education", obj);
    return obj.id;
  }

  function addExperience() {
    const obj = {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    };
    addForm("experience", obj);
    return obj.id;
  }

  return (
    <>
      <CVForm
        handleGeneralInfoChange={handleGeneralInfoChange}
        handleSectionChange={handleSectionChange}
        generalInfo={cvInfo.generalInfo}
        education={cvInfo.education}
        experience={cvInfo.experience}
        addEducation={addEducation}
        addExperience={addExperience}
        deleteForm={deleteForm}
      ></CVForm>
      <CVPreview
        generalInfo={cvInfo.generalInfo}
        education={cvInfo.education}
        experience={cvInfo.experience}
      ></CVPreview>
    </>
  );
}

export default App;
