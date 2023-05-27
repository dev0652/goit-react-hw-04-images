import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

// ########################################

const ImageGalleryItem = ({ thumb, alt, clickHandler }) => {
  return (
    <GalleryItem>
      <GalleryImage src={thumb} alt={alt} height="165" onClick={clickHandler} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
