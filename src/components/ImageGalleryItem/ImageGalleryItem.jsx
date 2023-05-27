import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

// ########################################

const ImageGalleryItem = ({ id, thumb, alt, clickHandler }) => {
  return (
    <GalleryItem key={id}>
      <GalleryImage src={thumb} alt={alt} height="165" onClick={clickHandler} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
