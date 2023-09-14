import { useState } from "react";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import Widget from "./Widget/Widget";
function App() {
  const [OpenTweet , setTweet] = useState(false);
  return (
    <>
      <Sidebar OpenTweet={OpenTweet} setTweet={setTweet} />
      <Feed setTweet={setTweet} OpenTweet={OpenTweet} />
      <Widget />
    </>
  );
}

export default App;
