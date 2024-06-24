import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function PostsList({ hideModalHandler, renderModal }) {
  // Add prop validation
  PostsList.propTypes = {
    hideModalHandler: PropTypes.func.isRequired,
    renderModal: PropTypes.bool.isRequired,
  };
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  return (
    <>
      {
        renderModal &&
        <Modal onHideModal={hideModalHandler} >
          <NewPost onHideModal={hideModalHandler} />
        </Modal>
      }
      {!isFetching && posts.length > 0 && <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>}
      {!isFetching && posts.length === 0 &&
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>}
      {isFetching && <div style={{ textAlign: 'center', color: 'white' }}>
        <p>Loading posts...</p>
      </div>}
    </>
  );
}

export default PostsList;