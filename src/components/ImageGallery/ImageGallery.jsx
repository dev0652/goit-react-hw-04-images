import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';

// ########################################

const ImageGallery = ({ images, isLoading }) => {
  return (
    <ImageCardList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          thumb={webformatURL}
          large={largeImageURL}
          alt={tags}
          isLoading={isLoading}
        />
      ))}
    </ImageCardList>
  );
};

export default ImageGallery;
