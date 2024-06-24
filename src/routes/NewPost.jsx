import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

function NewPost() {
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    const formData = {
      body: event.target.body.value,
      author: event.target.name.value,
    }
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  function onHideModalHandler() {
    navigate('/');
  }

  return (
    <>
      <Modal>
        <form onSubmit={submitHandler} className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required autoComplete='off' />
          </p>
          <p className={classes.actions}>
            <button onClick={onHideModalHandler} type='button'>Cancel</button>
            <button>Submit</button>
          </p>
        </form>
      </Modal>
    </>
  );
}

export default NewPost;