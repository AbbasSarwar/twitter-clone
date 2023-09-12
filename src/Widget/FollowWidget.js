import FollowCard from "./FollowCard";
import img from '../assets/img2.jpeg';
import img2 from '../assets/img3.jpg';

const FollowWidget = () => {
    return (
        <div className="followWidget rounded-4">
            <h3>Who to follow</h3>
            <div className="followContainer">
                <FollowCard img={img} name="Elon Musk" tag="@elonmusk" />
            </div>
            <div className="showtrend">
                <p className="trend-last-more">Show more</p>
            </div>
        </div>
    )
}

export default FollowWidget;