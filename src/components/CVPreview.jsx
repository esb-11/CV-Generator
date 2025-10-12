import "./CVPreview.css";
import GeneralInfoPreview from "./CVPreview/GeneralInfoPreview";
import EducationPreview from "./CVPreview/EducationPreview";
import SectionPreview from "./CVPreview/SectionPreview";
import ExperiencePreview from "./CVPreview/ExperiencePreview";

function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <GeneralInfoPreview {...generalInfo}></GeneralInfoPreview>
      <SectionPreview
        title={"Education"}
        array={education}
        Preview={EducationPreview}
      ></SectionPreview>
      <SectionPreview
        title={"Experience"}
        array={experience}
        Preview={ExperiencePreview}
      ></SectionPreview>
    </div>
  );
}

export default CVPreview;
