import { Link } from "react-router-dom";
import styles from './style.module.css';
const OptionMenu = ({dir, text, icon}) => {
    console.log(icon)
    return (
        <Link className={styles.link} href={`${dir}`}><span className="icon">{icon}</span><span className="btn-text">{text}</span></Link>
    )
}
export default OptionMenu;