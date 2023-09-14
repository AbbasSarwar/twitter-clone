import { Link } from "react-router-dom";
const OptionMenu = ({dir, text, icon}) => {
    return (
        <Link title={text} href={`${dir}`}>{icon}<span className="btn-text">{text}</span></Link>
    )
}
export default OptionMenu;