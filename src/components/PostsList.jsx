import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({hideModalHandler, renderModal}) {

  return (
    <>
      {
        renderModal && 
        <Modal onHideModal={hideModalHandler} >
          <NewPost onHideModal={hideModalHandler} />
        </Modal>
      }
      <ul className={classes.posts}>
        
      </ul>
    </>
  );
}

export default PostsList;