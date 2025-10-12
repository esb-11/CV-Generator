function EducationPreview({ schoolName, degree, startDate, endDate, id }) {
  return (
    <div className="education-preview">
      <h4 className="school-name-preview">{schoolName}</h4>
      <h4 className="degree-preview">{degree}</h4>
      <p className="start-date-preview">{startDate}</p>
      <p className="end-date-preview">{endDate}</p>
    </div>
  );
}

export default EducationPreview;
