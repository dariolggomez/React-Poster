import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({hideModalHandler, renderModal}) {
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
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.name} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostsList;