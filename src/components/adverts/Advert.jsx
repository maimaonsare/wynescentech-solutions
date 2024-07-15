import React from 'react';
import './Advert.css';
import banner from '../../img/design.jpg';

function Advert() {
  return (
    <div className='advert'>
        <div className="banner_image">
            <img src={banner} alt='Wynescent Technology' />
        </div>
        <div className='banner_text'>
            <div className='tx-left'>
            <h4>Premium Websites Starting at $200</h4>
            <p>The name of the website </p>
            </div>
            <div className='tx-right'>
                <button><a href=''>Get a Quote</a></button>
            </div>
        </div>
    </div>
  )
}

export default Advert;