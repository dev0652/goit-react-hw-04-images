import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

// ########################################

const ImageGallery = ({ images, clickHandler }) => {
  return (
    <ImageCardList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          thumb={webformatURL}
          alt={tags}
          clickHandler={() => clickHandler(largeImageURL, tags)}
        />
      ))}
    </ImageCardList>
  );
};

export default ImageGallery;

// ####### PropTypes ######################

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
