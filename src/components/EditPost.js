import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import DataContext from "../context/DataContext"

const EditPost = () => {

    const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find((post) => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditBody, setEditTitle])

    return (
        <main className={editTitle ? "NewPost" : "Missing"}>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={e => e.preventDefault()}>
                        <label htmlFor="editTitle">Title:</label>
                        <input
                            type="text"
                            id="editTitle"
                            required
                            value={editTitle}
                            onChange={e => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="editBody">Post:</label>
                        <textarea
                            id="editBody"
                            required
                            value={editBody}
                            onChange={e => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => { handleEdit(post.id) }}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Page Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to="/">Vist Our Homepage</Link>
                    </p>
                </>

            }
        </main>
    )
}

export default EditPost