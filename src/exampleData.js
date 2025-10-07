const generalInfo = {
  name: "John Doe",
  email: "john.doe@email.com",
  phoneNumber: "+44 3245 5521 5521",
  address: "London, UK",
};

const education = [
  {
    degree: "Bachelors in Economics",
    schoolName: "London City University",
    startDate: "08/2020",
    endDate: "present",
    isCollapsed: true,
    isHidden: false,
    id: crypto.randomUUID(),
  },
  {
    degree: "Master's Degree in Math",
    schoolName: "Hidden University",
    startDate: "08/2020",
    endDate: "present",
    isCollapsed: true,
    isHidden: true,
    id: crypto.randomUUID(),
  },
];

const experience = [];

const exampleData = {
  generalInfo,
  education,
  experience,
};

export default exampleData;
