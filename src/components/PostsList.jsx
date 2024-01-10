import Post from "./Post";
import classes from './PostList.module.css'

function PostsList () {
    return (
        <ul className={classes.posts}>
            <Post author="João" body="Rails are awesome!!!" />
            <Post author="Mateus" body="Ruby are my life!!!" />
            <Post author="Pablo" body="I Love LennaRb!!!" />
        </ul>
    )
}

export default PostsList;