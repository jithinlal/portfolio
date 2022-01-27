const personalInfoContent = [
  { meta: "first name", metaInfo: "Jithinlal " },
  { meta: "last name", metaInfo: "P R" },
  { meta: "Country", metaInfo: "INDIA" },
  { meta: "languages", metaInfo: "English, Malayalam" },
  { meta: "Email", metaInfo: "jithinlal@protonmail.com" },
  { meta: "Personal blog", metaInfo: "https://jithin-lal.blogspot.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((personalContent, index) => (
        <li key={index}>
          <span className="title">{personalContent.meta} : </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {personalContent.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
