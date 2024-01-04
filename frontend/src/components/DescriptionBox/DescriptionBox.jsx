import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          ex. Consequatur impedit dicta repellendus nemo vitae tenetur
          dignissimos tempora minus necessitatibus? Ipsum eius voluptatum illum
          id ex repellendus reiciendis est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
          tenetur quo fuga eligendi incidunt sequi in minima iste esse nam, sit,
          aliquam atque reiciendis vero! Ab iusto sunt doloremque?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
