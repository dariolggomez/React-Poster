import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onHideModal, onSubmitPost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const formData = {
      body: event.target.body.value,
      name: event.target.name.value,
    }
    onSubmitPost(formData);
    onHideModal();
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} autoComplete='off' />
      </p>
      <p className={classes.actions}>
        <button onClick={onHideModal} type='button'>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;