import TrendCard from "./TrendCard";

const Trending = () => {
    return (
        <div className="trending rounded-4">
            <h3>Trends for you</h3>
            <div className="trendingComponents">
                <TrendCard country="Pakistan" hashtag="Web development" posts={`${200}k posts`} />
            </div>
            <div className="showtrend">
                <p>show more</p>
            </div>
        </div>
    )
}
export default Trending;