import { useDispatch } from "react-redux";
import { FaXTwitter } from 'react-icons/fa6';
import { Routes, Route } from "react-router-dom";
import { setFocus } from "../reducer/focusReducer";
import Home from "./Home";
import Progress from "./progress";
import Compose from "./Compose";
import data from '../Data.json';

const Feed = ({ setTweet, OpenTweet, sidebar, setSidebar }) => {
  const dispatch = useDispatch();
  const { profile } = data;

  return (
    <section
      className="feed col-12 col-md-6 col-xxl-5 border"
      onClick={() => dispatch(setFocus(false))}
    >
      <div className="mobile-top col-12 bg-light">
        <span onClick={() => setSidebar(!sidebar)} className="img2 flex-1">
          <img src={profile.person1.img} alt="" />
        </span>
        <div className="d-flex flex-3 justify-content-center w-100">
          <i className="d-flex flex-row justify-content-center align-items-center">
            <FaXTwitter />
          </i>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home sidebar={sidebar} setSidebar={setSidebar} />}
        />
        <Route path="/search" element={<Progress />} />
        <Route path="/notifications" element={<Progress />} />
        <Route path="/lists" element={<Progress />} />
        <Route path="/messages" element={<Progress />} />
        <Route path="/communities" element={<Progress />} />
        <Route path="/profile" element={<Progress />} />
        <Route path="/more" element={<Progress />} />
        <Route path="/verified-choose" element={<Progress />} />
      </Routes>
      <Compose OpenTweet={OpenTweet} setTweet={setTweet} />
    </section>
  );
};

export default Feed;
