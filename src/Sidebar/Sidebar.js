import OptionMenu from "./OptionMenu";
import { BiHomeCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { PiBellLight } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
import { RiFileListFill } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import ProfileView from "./ProfileView";
import { setFocus } from "../reducer/focusReducer";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="sidebar col-md-2 col-xxl-3 col-2" onClick={() => dispatch(setFocus(false))} >
      <div className="menu">
        <OptionMenu
          dir="/"
          text=""
          icon={<FaXTwitter />}
        />
        <OptionMenu dir="/" text="Home" icon={<BiHomeCircle />} />
        <OptionMenu dir="/search" text="Explore" icon={<BiSearch />} />
        <OptionMenu dir="/notifications" text="Notifications" icon={<PiBellLight /> } />
        <OptionMenu dir="/messages" text="Messages" icon={<BiEnvelope />} />
        <OptionMenu dir="/lists" text="Lists" icon={<RiFileListFill />} />
        <OptionMenu dir="/communities" text="Communities" icon={<IoPeopleOutline />} />
        <OptionMenu dir="/verified-choose" text="Verified" icon={<FaXTwitter />} />
        <OptionMenu dir="/profile" text="Profile" icon={<BsPerson />} />
        <OptionMenu dir="/more" text="More" icon={<CgMoreO />} />
        <OptionMenu dir="/tweet" text={<div className="tweet">Post</div>} icon={<svg viewBox="0 0 24 24" aria-hidden="true" className="last-icon r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>} />
      </div>

      <ProfileView />
    </nav>
  );
};
export default Sidebar;
