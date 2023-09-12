const Tweet = ({tweet}) => {
    return (
        <div className="tweet-body">
            <p className="m-0">{tweet.tweets[0].tweet}</p>
        </div>
    )
}

export default Tweet;