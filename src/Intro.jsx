import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './bg.png';

const Intro = () => {
  return (
    <>
      <div className='mx-auto intro2 container'>
        <div className='row'>
          <div className='text col-12 col-md-6 '>
            <div>THE TASTE THAT MAKE <br /> YOU FEEL DELICIOUS</div>
            <Link to='/allitems'>
              <button>Search Your Meals</button>
            </Link>
          </div>
          <div className='col-12 col-md-6'>
            <img src={img1} alt="" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Intro;

