import PropTypes from 'prop-types';
import classes from './Modal.module.css'

function Modal({onHideModal, children}) {
    return (
        <>
            <div onClick={onHideModal} className={classes.backdrop} />
            <dialog open className={classes.modal}>{children}</dialog>
        </>
    );
}

Modal.propTypes = {
    onHideModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;