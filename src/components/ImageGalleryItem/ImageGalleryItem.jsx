import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

// ########################################

const ImageGalleryItem = ({ thumb, alt }) => {
  return (
    <GalleryItem>
      <GalleryImage src={thumb} alt={alt} height="165" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
