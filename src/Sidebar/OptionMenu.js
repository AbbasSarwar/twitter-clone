import { Link } from "react-router-dom";

const OptionMenu = ({ dir, text, icon, OpenTweet, setTweet, mobile, textShow, mbtext, showicon, nomobile }) => {
  const handleOptionClick = () => {
    if (setTweet) {
      setTweet(!OpenTweet);
    }
  };

  return (
    <Link className={`${mobile} ${textShow} ${showicon} ${nomobile}`} onClick={handleOptionClick} title={text} to={dir}>
      {icon}
      <span className={`btn-text ${mbtext}`}>{text}</span>
    </Link>
  );
};

export default OptionMenu;
