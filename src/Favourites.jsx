import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removefav } from './DataSlice';

const Favourites = () => {
    const favorites = useSelector((state) => state.datastore.fav);
    const dispatch = useDispatch();

    const removeFromFavorites = (mealId) => {
        dispatch(removefav(mealId));
    };

    return (
        <div>
            {favorites.length === 0 ? (
                <div style={{ marginTop: '200px', textAlign: 'center', color: 'gray' }}>
                    <h3>No Favourites</h3>
                </div>
            ) : (
                <div className='wrapitems' style={{ marginTop: '150px' }}>
                    {favorites.map((favorite) => (
                        <div className='menu' key={favorite.mealId}>
                            <div className='menuitems'>
                                <Link to={`/ingredients/${favorite.mealId}`} style={{ textDecoration: 'none' }}>
                                    <img src={favorite.image} alt={favorite.name} />
                                </Link>
                                <h3>{favorite.name}</h3>
                                <button onClick={() => removeFromFavorites(favorite.mealId)} style={{ marginTop: '15px' }}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favourites;
