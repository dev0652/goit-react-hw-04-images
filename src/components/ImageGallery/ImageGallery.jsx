import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';

// ########################################

// function handler(event) {
//   alert('event.currentTarget: ', event.currentTarget);
// }

const ImageGallery = ({ images, clickHandler }) => {
  return (
    <ImageCardList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          id={id}
          thumb={webformatURL}
          alt={tags}
          clickHandler={() => clickHandler(largeImageURL, tags)}
        />
      ))}
    </ImageCardList>
  );
};

export default ImageGallery;

// onClick={() => clickHandler(largeImageURL, tags)}
// onClick={clickHandler}
