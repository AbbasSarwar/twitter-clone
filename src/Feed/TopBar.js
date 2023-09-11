const TopBar = ({
  title,
  posts,
  leftbtn,
  righticon,
  righticon2,
  bTitle1,
  bTitle2,
  bTitle3,
}) => {
  return (
    <div className="topbar position-sticky top-0 bg-light d-flex flex-column">
      <div className="d-flex flex-row p-2">
        <div className="left-side">
          <div>{leftbtn}</div>
          <div className="d-flex flex-column">
            <h1 className="fw-bold">{title}</h1> <span>{posts}</span>
          </div>
        </div>
        <div className="right-side">
          <span>{righticon}</span>
          <span>{righticon2}</span>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="box d-flex py-3 justify-content-center align-items-center flex-fill w-100 fs-6 fw-semibold">
          <p className="p-0 d-flex align-items-center m-0">{bTitle1}</p>
        </div>
        <div className="box flex-fill py-3 d-flex justify-content-center align-items-center w-100 fs-6 fw-semibold">
          <p className="p-0 d-flex align-items-center m-0">{bTitle2}</p>
        </div>
        {bTitle3 ? (
          <div className="box flex-fill text-center py-3 w-100 fs-6 fw-semibold">
            <p className="m-0">{bTitle3}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
