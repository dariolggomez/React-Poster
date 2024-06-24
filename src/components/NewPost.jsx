import PropTypes from 'prop-types';
import classes from './NewPost.module.css';

function NewPost({onHideModal}) {

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
    onHideModal();
  }

  return (
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
        <button onClick={onHideModal} type='button'>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}
NewPost.propTypes = {
  onHideModal: PropTypes.func.isRequired,
};

export default NewPost;