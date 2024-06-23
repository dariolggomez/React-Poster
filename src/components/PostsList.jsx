import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Dario" body="First Post!" />
        </ul>
    );
}

export default PostsList;