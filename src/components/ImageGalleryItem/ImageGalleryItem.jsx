import { useState } from 'react';

import Modal from 'components/Modal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

// ########################################

const ImageGalleryItem = ({ thumb, largeImage, alt }) => {
  //
  const [showModal, setShowModal] = useState(false);

  return (
    <GalleryItem>
      <GalleryImage
        src={thumb}
        alt={alt}
        height="165"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <Modal
          link={largeImage}
          alt={alt}
          onClose={() => setShowModal(false)}
        />
      )}
    </GalleryItem>
  );
};

export default ImageGalleryItem;

// ####### PropTypes ######################

ImageGalleryItem.propTypes = {
  thumb: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
