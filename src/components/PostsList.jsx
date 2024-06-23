import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [renderModal, setRenderModal] = useState(true);

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setRenderModal(false);
  }

  return (
    <>
      {
        renderModal && 
        <Modal onHideModal={hideModalHandler} >
          <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
        </Modal>
      }
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;