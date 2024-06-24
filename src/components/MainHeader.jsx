import { MdPostAdd, MdMessage } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {

  const navigate = useNavigate();

  function onStartCreatingPost(){
    navigate('/create-post');
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onStartCreatingPost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};

export default MainHeader;