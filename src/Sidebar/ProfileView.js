import { FiMoreHorizontal } from "react-icons/fi";
import img from "../assets/img.jpg"
const ProfileView = () => {
    return (
        <div className="profile-mini" title="Accounts">
        <div className="img"><img src={img} alt="profile" /></div>
        <div className="large_icon">
            <div className="d-flex flex-column justify-content-start align-items-start">
            <p className="fw-semibold">Abbas_sDev</p>
            <p>@Abbas_sDev</p>
            </div>
            <div>
                <i className="fs-2"><FiMoreHorizontal /></i>
            </div>
        </div>
        </div>
    )
}

export default ProfileView;