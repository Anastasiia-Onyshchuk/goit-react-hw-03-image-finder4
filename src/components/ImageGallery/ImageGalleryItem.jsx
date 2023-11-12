import React from 'react';
// import SimpleLightbox from "simplelightbox";
export const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem" onClick={onClick}>
    <img src={image.webformatURL} className='ImageGalleryItem-image'alt="" />
  </li>
);
// const lightbox = new SimpleLightbox ('.gallery__item a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// })

