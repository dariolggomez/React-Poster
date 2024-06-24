import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { useNavigate, Form } from 'react-router-dom';

function NewPost() {
  const navigate = useNavigate();
  
  function onHideModalHandler() {
    navigate('/');
  }

  return (
    <>
      <Modal>
        <Form method='post' className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" name='body' required rows={3} />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name='author' required autoComplete='off' />
          </p>
          <p className={classes.actions}>
            <button onClick={onHideModalHandler} type='button'>Cancel</button>
            <button>Submit</button>
          </p>
        </Form>
      </Modal>
    </>
  );
}

export default NewPost;