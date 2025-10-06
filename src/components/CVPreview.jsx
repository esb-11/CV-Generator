import "./CVPreview.css";
import GeneralInfoPreview from "./CVPreview/GeneralInfoPreview";

function CVPreview({ generalInfo }) {
  return (
    <div className="cv-preview">
      <GeneralInfoPreview {...generalInfo}></GeneralInfoPreview>
    </div>
  );
}

export default CVPreview;
