const TrendCard = ({country, catog, hashtag, posts}) => {
    return (
        <div className="trendcard">
            <span>{country? `Trending in ${country}`: `${catog}`}</span>
            <h6>{hashtag}</h6>
            <span>{posts}</span>
        </div>
    )
}

export default TrendCard;