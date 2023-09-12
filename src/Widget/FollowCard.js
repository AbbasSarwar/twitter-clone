const FollowCard = ({ name, tag, img, verified }) => {
  return (
    <div className="FollowCard">
      <div className="d-flex flex-row gap-2">
        <div className="profile-img">
          <img src={img} alt="profile" />
        </div>
        <div className="mini-card d-flex flex-column justify-content-start align-items-start ">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="fw-semibold">{name}</p>
            <span className="verify">{verified}</span>
          </div>
          <p>{tag}</p>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default FollowCard;
