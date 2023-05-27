import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

// ########################################

const ImageGalleryItem = ({ thumb, alt, clickHandler }) => {
  return (
    <GalleryItem>
      <GalleryImage src={thumb} alt={alt} height="165" onClick={clickHandler} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

// ####### PropTypes ######################

ImageGalleryItem.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  thumb: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
