import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Dario" body="First Post!" />
            </ul>
        </>
    );
}

export default PostsList;