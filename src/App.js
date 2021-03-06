import React, {useState, useEffect} from "react";
import "./App.css";
import database from "./config/firebase";
import Video from "./components/video/Video";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        database.collection("videos").onSnapshot((snapshot) =>
            setVideos(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        // BEM
        <div className="app">
            <div className="app__videos">
                {videos.map(
                    ({url, channel, description, song, likes, messages, shares}) => (
                        <Video
                            url={url}
                            channel={channel}
                            song={song}
                            likes={likes}
                            messages={messages}
                            description={description}
                            shares={shares}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default App;