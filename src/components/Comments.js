
function Comments({video}) {
    const vidComments = video.comments
    const handleComments = vidComments.map((comment) => {
        return [<h3 key={comment.user}>{comment.user}</h3>, <p key={comment.comment}>{comment.comment}</p>]})

    return (
        <>
            <h1>2 Comments</h1>
            {handleComments}
        </>
    )
}

export default Comments