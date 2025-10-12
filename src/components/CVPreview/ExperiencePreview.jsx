function ExperiencePreview({
  companyName,
  positionTitle,
  location,
  description,
  startDate,
  endDate,
  id,
}) {
  return (
    <div className="experience-preview">
      <h4 className="company-name-preview">{companyName}</h4>
      <h4 className="position-title-preview">{positionTitle}</h4>
      <p className="location-preview">{location}</p>
      <div className="start-end-dates-preview">
        <p className="start-date-preview">{startDate}</p>
        <p className="end-date-preview">{endDate}</p>
      </div>
      <p className="description-preview">{description}</p>
    </div>
  );
}

export default ExperiencePreview;
