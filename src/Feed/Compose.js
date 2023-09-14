import { IoCloseOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { PiCaretDown } from "react-icons/pi";
import data from "../Data.json";
import ComposeBottom from "./ComposeBottom.js";
import { useState } from "react";
const Compose = ({setTweet, OpenTweet}) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const { profile } = data;
  return (
    <section className={`compose ${OpenTweet? 'compose-display': ''}`}>
      <div className="compose-card col-12 col-md-6">
        <div className="d-flex align-items-center justify-content-between">
          <span className="fs-4 p-0 m-0 rounded-4 cross-tweet" onClick={()=> setTweet(!OpenTweet)}>
            <IoCloseOutline />
          </span>
          <span className="m-0 rounded-icon">Drafts</span>
        </div>
        <div className="d-flex flex-column py-1">
          <div className="d-flex flex-row">
            <div className="pe-3">
              <span className="img">
                <img src={profile.person1.img} alt="" />
              </span>
            </div>
            <div className="d-flex flex-column w-100">
              <span className="inline-bar2">
                Everyone{" "}
                <i>
                  {" "}
                  <PiCaretDown />
                </i>
              </span>
              <textarea
                name=""
                id="text"
                value={text}
                onChange={handleText}
                cols="30"
                rows="5"
                placeholder="What is happening?!"
              ></textarea>
            </div>
          </div>
          <span className="pb-1 rounded-icon inline-bar">
            <BiWorld /> Everyone can reply
          </span>
        </div>
        <ComposeBottom text={text} />
      </div>
    </section>
  );
};
export default Compose;
