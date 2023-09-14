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
        <div className="box d-flex justify-content-center align-items-center flex-fill w-100 fs-6 fw-semibold">
          <div className="d-flex align-items-center justify-content-center m-0 h-100 w-100"><p className="rounded-border border-bottom border-primary border-3 d-flex justify-content-center align-items-center h-100 mt-2">{bTitle1}</p></div>
        </div>
        <div className="box flex-fill py-2 d-flex justify-content-center align-items-center w-100 fs-6 fw-semibold">
          <div className="p-0 d-flex align-items-center justify-content-center m-0 h-100 w-100"><p className="d-flex justify-content-center align-items-center h-100 mt-2">{bTitle2}</p></div>
        </div>
        {bTitle3 ? (
          <div className="box flex-fill text-center py-2 w-100 fs-6 fw-semibold">
            <p className="m-0">{bTitle3}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
