import React, { Component } from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const API_KEY = '39225934-550637513b3cbac3c28ca7e05';

export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
  const { currentPage, searchQuery } = this.state;
  const apiKey = API_KEY;
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  this.setState({ isLoading: true, error: false });
  axios
    .get(url)
    .then(response => {
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        currentPage: prevState.currentPage + 1,
          error: false,
      }));
    })
    .catch(() => {
        this.setState({ error: true }); // Set error state to true
    })
    .finally(() => {
      this.setState({ isLoading: false});
    });
};


  toggleModal = (largeImageURL = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, error } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      {error && (
          <Toaster position='top-right' /> // Display the error toaster if error is true
        )}
  
      </div>
    );
  }
}


