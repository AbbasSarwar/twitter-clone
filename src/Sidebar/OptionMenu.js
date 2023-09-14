import { Link } from "react-router-dom";
const OptionMenu = ({dir, text, icon, OpenTweet, setTweet}) => {
    return (
        <Link onClick={()=> setTweet(!OpenTweet)} title={text} to={`${dir}`}>{icon}<span className="btn-text">{text}</span></Link>
    )
}
export default OptionMenu;