import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalContent } from './Modal.styled';

// #######################################

const modalRoot = document.querySelector('#modal-root');

// #######################################

export default function Modal({ link, alt, onClose }) {
  //
  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <img src={link} alt={alt} />
      </ModalContent>
    </Overlay>,
    modalRoot
  );
}

// ####### PropTypes ######################

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
