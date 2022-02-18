import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDeatil from "./VideoDetail";
import useVideos from "../hooks/useVideos";
const App = () => {
 
  const [selectedVideo, setSelectedVideo] = useState(null);
 const [videos, search]= useVideos('top ps4/5 games in 2022')
useEffect(()=>{
  setSelectedVideo(videos[0]);
}, [videos])
   
  
  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDeatil video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
