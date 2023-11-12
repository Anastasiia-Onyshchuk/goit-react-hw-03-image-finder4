import React from 'react';

export const Button = ({ onClick }) => (
    
  <button type="button" className="Button" onClick={onClick}>
    Load more
    </button>

);
//    if (images.length >= 12) {
//     Button.style.display = 'block';
//   } else {
//     Button.style.display = 'none';
//   } 

// import React from 'react';

// export const Button = ({ images, onClick }) => {
//    Button.style.display = 'none';
//   if (images.length >= 12) {
//     Button.style.display  = 'block';
//   }

//   return (
//     <button type="button" className="load-more-button" onClick={onClick}>
//       Load more
//     </button>
//   );
// };
