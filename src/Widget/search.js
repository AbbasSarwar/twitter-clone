import { useSelector, useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { setFocus } from "../reducer/focusReducer";
import styles from "../Sidebar/style.module.css";
const Search = () => {
  const { focus } = useSelector((state) => state.focus);
  const dispatch = useDispatch();
  const callDispatch = () => {
    dispatch(setFocus(true));
  };

  return (
    <div className="searchContainer">
      <div
        onClick={callDispatch}
        className={`d-flex flex-row align-items-center justify-content-center searchbar rounded-5 ${
          focus && styles.focusStyle
        }`}
      >
        <label htmlFor="search" className="px-3 fs-5 pb-1">
          <BiSearch />
        </label>
        <input type="text" id="search" placeholder="Search" />
        <label className="d-none">
          <i className="fa-solid fa-circle-xmark fs-4 text-primary px-3" />
        </label>
      </div>
    </div>
  );
};

export default Search;
