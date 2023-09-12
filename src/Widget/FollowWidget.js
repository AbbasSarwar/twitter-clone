import FollowCard from "./FollowCard";
import img from '../assets/img2.jpeg';
import img2 from '../assets/img3.jpg';
import img3 from '../assets/img2.jpg'
import { VscVerifiedFilled } from 'react-icons/vsc';

const FollowWidget = () => {
    return (
        <div className="followWidget rounded-4">
            <h3>Who to follow</h3>
            <div className="followContainer">
                <FollowCard img={img} name="Elon Musk" tag="@elonmusk" verified={<VscVerifiedFilled />} />
                <FollowCard img={img2} name="Hert" tag="@hert_dev" />
                <FollowCard img={img3} name="Mark S" tag="@markS7" />
            </div>
            <div className="showtrend">
                <p className="trend-last-more">Show more</p>
            </div>
        </div>
    )
}

export default FollowWidget;