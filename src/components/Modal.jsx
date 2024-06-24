import PropTypes from 'prop-types';
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom';

function Modal({children}) {
    const navigate = useNavigate();

    function onHideModalHandler() {
        navigate('/');
    }

    return (
        <>
            <div onClick={onHideModalHandler} className={classes.backdrop} />
            <dialog open className={classes.modal}>{children}</dialog>
        </>
    );
}

Modal.propTypes = {
    onHideModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;