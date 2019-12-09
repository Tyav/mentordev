import React from 'react';
import './CoverImage.css';

function CoverImage({ backgroundImage }) {
  return (
    <section
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="user-cover-image-component"
    ></section>
  );
}

export default CoverImage;
