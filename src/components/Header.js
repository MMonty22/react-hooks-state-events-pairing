import React, {useState} from "react"

function Header({video, toggleComments, showComments}) {
    const [upVote, setUpVote] = useState(video.upvotes)
    const [downVote, setDownVote] = useState(video.downvotes)

    function handleToggle() {
        toggleComments()
    }

    return (
    <>
        <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button onClick={() => setUpVote(upVote + 1)}>{upVote}</button>
        <button onClick={() => setDownVote(downVote + 1)}>{downVote}</button>
        <button onClick={handleToggle}>{showComments ? "Hide Comments" : "Show Comments"}</button>
    </>
    )
}

export default Header