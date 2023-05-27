import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';

// ########################################

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <ImageCardList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          thumb={webformatURL}
          alt={tags}
          onClick={() => handleImageClick(largeImageURL, tags)}
        />
      ))}
    </ImageCardList>
  );
};

export default ImageGallery;
