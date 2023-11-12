import React, { useEffect } from 'react';

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={largeImageURL}  width='98%' height='98%' alt="" />
      </div>
    </div>
  );
};


