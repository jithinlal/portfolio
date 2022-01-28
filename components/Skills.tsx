const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "95",
  },
  {
    name: "Redux",
    skillPercent: "90",
  },
  {
    name: "Nodejs",
    skillPercent: "90",
  },
  {
    name: "Firebase",
    skillPercent: "90",
  },
  {
    name: "Database",
    skillPercent: "85",
  },
  {
    name: "NextJs",
    skillPercent: "70",
  },
  {
    name: "AWS",
    skillPercent: "60",
  },
  {
    name: "Docker",
    skillPercent: "50",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((skill, index) => (
        <div className="progress_inner" key={index}>
          <span className="label">{skill.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: skill.skillPercent + "%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
