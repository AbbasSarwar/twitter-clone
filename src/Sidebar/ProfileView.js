import { FiMoreHorizontal } from "react-icons/fi";
import img from "../assets/img.jpg";
const ProfileView = () => {
  return (
    <div className="profile-mini order-md-2 order-1" title="Accounts">
      <div className="img">
        <img src={img} alt="profile" />
      </div>
      <div className="large_icon">
        <div className="d-flex flex-column justify-content-start gap-0 p-0 align-items-start">
          <p className="fw-semibold m-0">Abbas_sDev</p>
          <p className="m-0">@Abbas_sDev</p>
        </div>
        <div>
          <i className="fs-2">
            <FiMoreHorizontal />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
