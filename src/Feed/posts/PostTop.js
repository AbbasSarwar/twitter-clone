import { FiMoreHorizontal } from "react-icons/fi";
import { VscVerifiedFilled } from 'react-icons/vsc';

const PostTop = ({profile}) => {
  return (
    <div className="post-top">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <h6>{profile.name}</h6>
        <i className="verified">{profile.verified? (<VscVerifiedFilled />) : null}</i>
        <span>{profile.tag}</span>
        <span className="post-time">{profile.tweets[0].time}</span>
      </div>
      <span className="post-more">
        <FiMoreHorizontal />
      </span>
    </div>
  );
};
export default PostTop;
