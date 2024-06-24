import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ hideModalHandler, renderModal }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  return (
    <>
      {
        renderModal &&
        <Modal onHideModal={hideModalHandler} >
          <NewPost onSubmitPost={addPostHandler} onHideModal={hideModalHandler} />
        </Modal>
      }
      {posts.length > 0 && <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.name} body={post.body} />
        ))}
      </ul>}
      {posts.length === 0 &&
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>}
    </>
  );
}

export default PostsList;