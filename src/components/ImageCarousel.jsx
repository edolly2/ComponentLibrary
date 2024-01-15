import { useState } from 'react';
import './ImageCarousel.css';
import { images } from '../helpers/CarouselData';
import { IoCaretBackOutline } from 'react-icons/io5';
import { IoCaretForwardOutline } from 'react-icons/io5';

const ImageCarousel = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className='carousel'>
      <div
        className='carouselInner'
        style={{ backgroundImage: `url(${images[currentImg].img})` }}
      >
        <div
          className='left'
          onClick={() => {
            currentImg > 0 && setCurrentImg(currentImg - 1);
          }}
        >
          <IoCaretBackOutline className='arrowIcon' />
        </div>
        <div className='center'>
          <div className='centerContent'>
            <h2>{images[currentImg].title}</h2>
            <p>{images[currentImg].subtitle}</p>
          </div>
        </div>
        <div
          className='right'
          onClick={() => {
            currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
          }}
        >
          <IoCaretForwardOutline className='arrowIcon' />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
