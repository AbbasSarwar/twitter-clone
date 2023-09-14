import { BiHomeCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { PiBellLight } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
import OptionMenu from "./OptionMenu";

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
        <OptionMenu dir="/" text="Home" icon={<BiHomeCircle />} />
        <OptionMenu dir="/search" text="Explore" icon={<BiSearch />} />
        <OptionMenu dir="/notifications" text="Notifications" icon={<PiBellLight /> } />
        <OptionMenu dir="/messages" text="Messages" icon={<BiEnvelope />} />
        </div>
    )
}
export default MobileMenu;