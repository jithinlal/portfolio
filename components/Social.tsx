import { FiGithub, FiLinkedin, FiCode, FiRss } from "react-icons/fi";

const socialShare = [
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/jithinlal-pr",
  },
  {
    iconName: <FiGithub />,
    link: "https://www.github.com/jithinlal",
  },
  {
    iconName: <FiCode />,
    link: "https://www.stackoverflow.com/users/8437740/jithin",
  },
  {
    iconName: <FiRss />,
    link: "https://www.jithin-lal.blogspot.com",
  },
];

const Social = () => {
  return (
    <ul>
      {socialShare.map((social, index) => (
        <li key={index}>
          <a href={social.link} target="_blank" rel="noreferrer">
            {social.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
