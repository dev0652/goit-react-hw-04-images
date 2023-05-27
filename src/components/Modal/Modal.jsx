import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalContent } from './Modal.styled';

// #######################################

const modalRoot = document.querySelector('#modal-root');

// #######################################

export default class Modal extends Component {
  //
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      // console.log('Escape pressed');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  // >>>>> Rendering

  render() {
    const { link, alt } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src={link} alt={alt} />
        </ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}

// ####### PropTypes ######################

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
