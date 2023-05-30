import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

// ########################################

const ImageGallery = ({ images }) => {
  return (
    <ImageCardList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          thumb={webformatURL}
          largeImage={largeImageURL}
          alt={tags}
        />
      ))}
    </ImageCardList>
  );
};

export default ImageGallery;

// ####### PropTypes ######################

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
};
