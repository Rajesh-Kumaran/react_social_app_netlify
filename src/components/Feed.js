import Roast from './Roast'

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Roast key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed