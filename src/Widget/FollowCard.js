const FollowCard = ({name, tag, img}) => {
    return (
        <div className="FollowCard">
            <div className="d-flex flex-row gap-2">
                <div className="profile-img"><img src={img} alt="profile" /></div>
                <div className="mini-card d-flex flex-column justify-content-start align-items-center ">
                    <p className="fw-semibold m-0">{name}</p>
                    <p>{tag}</p>
                </div>
            </div>
            <button>Follow</button>
        </div>
    )
}

export default FollowCard;