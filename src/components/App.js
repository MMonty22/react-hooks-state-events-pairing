import React, {useState} from "react"
import video from "../data/video.js";
import Header from "./Header";
import Comments from "./Comments.js";

function App() {
  //console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState("true")

  return (
    <div className="App">
      <Header video={video} showComments={showComments} toggleComments={() => setShowComments(!showComments)}/>
      {showComments && (<Comments video={video}/>)}
    </div>
  );
}

export default App;
