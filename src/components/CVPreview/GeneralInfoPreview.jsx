import "./GeneralInfoPreview.css";

function GeneralInfoPreview({ name, email, phoneNumber, address }) {
  return (
    <div className="general-info-preview">
      <h1 className="name-preview">{name}</h1>
      <ul className="contact-info-preview">
        <li className="email-preview">{email}</li>
        <li className="phone-number-preview">{phoneNumber}</li>
        <li className="address-preview">{address}</li>
      </ul>
    </div>
  );
}

export default GeneralInfoPreview;
