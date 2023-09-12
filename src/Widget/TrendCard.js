import { FiMoreHorizontal } from "react-icons/fi";
const TrendCard = ({ country, catog, hashtag, posts }) => {
  return (
    <div className="trendcard">
      <div>
        <span>{country ? `Trending in ${country}` : `${catog}- Trending`}</span>
        <h6>{hashtag}</h6>
        <span>{posts}</span>
      </div>
      <span className="fs-6 icon-trending">
        <FiMoreHorizontal />
      </span>
    </div>
  );
};

export default TrendCard;
