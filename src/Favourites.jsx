import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Favourites = () => {

  const result = useSelector((state) => state.datastore.fav)
  console.log(result);

  return (
    <div>
      {result?.map((item) => (
        item && (
          <div className='menu' key={item.idMeal}>
          <div className='menuitems'>
            <img src={item.strMealThumb} alt="" />
            <h3>{item.strMeal}</h3>
            <Link to={`/ingredients/${item.idMeal}`} style={{ textDecoration: 'none' }}>
              <button>View Details</button>
            </Link>
          </div>
        </div>
        )
      ))}
    </div>
  )
}

export default Favourites