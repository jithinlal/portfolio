const achievementsContent = [
  { title: "5+", subTitle1: "years of", subTitle2: "Experience" },
  { title: "15+", subTitle1: "Completed", subTitle2: "Projects" },
  { title: "2", subTitle1: "NPM", subTitle2: "Packages" },
  { title: "Open Source", subTitle1: "", subTitle2: "Contributions" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((achievement, index) => (
        <div className="col-6" key={index}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">
              {achievement.title}
            </h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {achievement.subTitle1}{" "}
              <span className="d-block">{achievement.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
