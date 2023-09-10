import OptionMenu from "./OptionMenu";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { PiBellLight } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
const Sidebar = () => {
  return (
    <nav className="sidebar d-flex flex-column justify-content-right align-items-end h-100 col-md-3 col-2 p-2">
      <div className="menu">
        <OptionMenu
          dir="/home"
          text=""
          icon={<i className="fa-brands fa-x-twitter" />}
        />
        <OptionMenu dir="/home" text="Home" icon={<RiHome7Fill />} />
        <OptionMenu dir="/search" text="Explore" icon={<BiSearch />} />
        <OptionMenu dir="/notifications" text="Notifications" icon={<PiBellLight /> } />
        <OptionMenu dir="messages" text="Messages" icon={<BiEnvelope />} />
      </div>
    </nav>
  );
};
export default Sidebar;
