const educationContent = [
  {
    year: "2013-2017",
    degree: "BACHELOR's DEGREE ",
    institute: "NATIONAL INSTITUTE OF TECHNOLOGY CALICUT",
    details: `Major in Computer Science and Technology`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((education, index) => (
        <li key={index}>
          <div className="icon">
            <img src={"/img/about/book.png"} alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">
            {education.year}
          </span>
          <h5 className="poppins-font text-uppercase">
            {education.degree}
            <span className="place open-sans-font">{education.institute}</span>
          </h5>
          <p className="open-sans-font">{education.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
