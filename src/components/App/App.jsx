import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

// ###### Components in App ######################

import Searchbar from 'components/Searchbar';
import { Wrapper } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import PixabayLogo from 'components/PixabayLogo';
import { fetchData } from 'api';

// ###### App ####################################

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageLink, setLargeImageLink] = useState('');
  const [largeImageAlt, setLargeImageAlt] = useState('');

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        toast.remove();

        const response = await fetchData(page, query);
        const { hits, totalHits } = response.data;

        if (!totalHits) {
          throw new Error('Sorry, there are no images matching your query.');
        }
        setImages(prev => [...prev, ...hits]);
        setTotalHits(totalHits);
        //
      } catch ({ message }) {
        toast.error(message);
        //
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, query]);

  // Get the query string from the search box + reset current state
  const getNewQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  // Increment page count (Load More button)
  const incrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  // Handle пуньк on image thumbnails
  const handleImageClick = (link, alt) => {
    setShowModal(true);
    setLargeImageLink(link);
    setLargeImageAlt(alt);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageLink('');
    setLargeImageAlt('');
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={getNewQuery} />

      {(!query || !totalHits) && <PixabayLogo />}

      {isLoading && <Loader isLoading={isLoading} />}

      <ImageGallery images={images} clickHandler={handleImageClick} />

      {showModal && (
        <Modal link={largeImageLink} alt={largeImageAlt} onClose={closeModal} />
      )}

      {images.length > 0 && images.length < totalHits && !isLoading && (
        <Button onClick={incrementPage} />
      )}
    </Wrapper>
  );
}
