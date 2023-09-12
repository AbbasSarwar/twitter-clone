import TrendCard from "./TrendCard";

const Trending = () => {
    return (
        <div className="trending rounded-4">
            <h3>Trends for you</h3>
            <div className="trendingComponents">
                <TrendCard catog="Business" hashtag="Starlink" posts={`${670}k posts`} />
                <TrendCard catog="Sports" hashtag="Football 2023" posts={`${300}k posts`} />
                <TrendCard country="Pakistan" hashtag="Web development" posts={`${200}k posts`} />
                <TrendCard country="Pakistan" hashtag="Politics" posts={`${180}k posts`} />
                <TrendCard catog="Sports" hashtag="Cricket" posts={`${120}k posts`} />
                <TrendCard catog="Business" hashtag="Gold" posts={`${70}k posts`} />
                <TrendCard catog="Business" hashtag="Dollar" posts={`${50}k posts`} />
                <TrendCard catog="Entertainment" hashtag="Oppenheimer" posts={`${50}k posts`} />
            </div>
            <div className="showtrend">
                <p className="trend-last-more">Show more</p>
            </div>
        </div>
    )
}
export default Trending;