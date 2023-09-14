import { useState } from "react";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import Widget from "./Widget/Widget";
import MobileMenu from "./Sidebar/MobileMenu";
function App() {
  const [OpenTweet , setTweet] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} OpenTweet={OpenTweet} setTweet={setTweet} />
      <Feed setTweet={setTweet} OpenTweet={OpenTweet} sidebar={sidebar} setSidebar={setSidebar} />
      <Widget />
      <MobileMenu />
    </>
  );
}

export default App;
