import { Link } from "react-router-dom";

const OptionMenu = ({ dir, text, icon, OpenTweet, setTweet, mobile }) => {
  const handleOptionClick = () => {
    if (setTweet) {
      setTweet(!OpenTweet);
    }
  };

  return (
    <Link className={mobile} onClick={handleOptionClick} title={text} to={dir}>
      {icon}
      <span className="btn-text">{text}</span>
    </Link>
  );
};

export default OptionMenu;
