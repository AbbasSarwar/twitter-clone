import Expressions from "./Expressions";
import PostTop from "./PostTop";
import Tweet from "./Tweet";

const Post = ({ profile }) => {
    console.log(profile);
  return (
    <div className="PostContainer border-bottom pb-1">
      <div className="profiletweet">
        <div className="img">
          <img src={profile.img} alt="" />
        </div>
      </div>
      <div className="d-flex flex-column w-100">
        <PostTop profile={profile} time={profile} />
        <Tweet tweet={profile} />
        <Expressions impressions={profile} />
      </div>
    </div>
  );
};

export default Post;
