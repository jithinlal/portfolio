const experienceContent = [
    {
        year: "2022 - Present",
        position: "Senior Software Engineer",
        companyName: "Gelato",
        details: "Working closely with the customers as well as internal team to provide with solutions that matter to the business"
    },
    {
        year: "2020 - 2022",
        position: "Senior Software Engineer / Technical Lead",
        companyName: "NeoITO",
        details: `Started as a full stack developer, moved into senior role and currently working as a technical lead. Currently working with some exciting projects and clients. Mentoring junior devs, Coordinator among various internal organisational activities/clubs`,
    },
    {
        year: "2017 - 2020",
        position: "Web developer",
        companyName: "Software Associates",
        details: `Worked on multiple client projects around the world. Worked in both Web and IoT department. One of the leaders in IoT solutions in India`,
    },
    {
        year: "2020",
        position: "Full stack developer",
        companyName: "CoronaSafe Network",
        details: `Open source project that was aimed at helping Kerala State government's efforts to fight against covid pandemic back in 2020`,
    },
];

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((experience, index) => (
                <li key={index}>
                    <div className="icon">
                        <img src={"/img/about/briefcase.png"} alt="icon"/>
                        <i className="fa fa-briefcase"/>
                    </div>
                    <span className="time open-sans-font text-uppercase">
            {experience.year}
          </span>
                    <h5 className="poppins-font text-uppercase">
                        {experience.position}
                        <span className="place open-sans-font">
              {experience.companyName}
            </span>
                    </h5>
                    <p className="open-sans-font">{experience.details}</p>
                </li>
            ))}
        </ul>
    );
};

export default Experience;
