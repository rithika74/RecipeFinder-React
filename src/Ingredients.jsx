import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setfav, removefav } from './DataSlice';

const Ingredients = () => {
    const [mealDetails, setMealDetails] = useState('');
    const { mealId } = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.datastore.fav);

    useEffect(() => {
        let fetchMealDetails = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const meal = response.data.meals[0];

            if (meal) {
                const ingredients = [];
                const measures = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];

                    if (ingredient && measure) {
                        ingredients.push(ingredient);
                        measures.push(measure);
                    } else {
                        break;
                    }
                }

                const mealData = {
                    mealId: meal.idMeal,
                    name: meal.strMeal,
                    image: meal.strMealThumb,
                    instructions: meal.strInstructions,
                    ingredients: ingredients,
                    measures: measures
                };

                setMealDetails(mealData);
            }
        }

        fetchMealDetails();
    }, [mealId]);

    const isFavorite = favorites.find((item) => item.mealId === mealDetails.mealId);

    const addToFavorites = () => {
        const isDuplicate = favorites.find((item) => item.mealId === mealDetails.mealId);
        if (!isDuplicate) {
            dispatch(setfav(mealDetails));
        }
    };


    const handleDelete = () => {
        dispatch(removefav(mealDetails.mealId));
    }

    return (
        <>
            <div style={{ marginTop: '120px' }}>
                {mealDetails && (
                    <div className='details' key={mealDetails.mealId}>
                        <h1>{mealDetails.name}</h1>
                        <div className='container'>
                            <div className='col-6'>
                                <img src={mealDetails.image} alt={mealDetails.name} style={{ width: '100%', marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '24px' }}>ADD TO FAVOURITES <button className='btnheart' onClick={isFavorite ? handleDelete : addToFavorites} >{isFavorite ? <FaHeart /> : <FaRegHeart />} </button></h2>
                            </div>
                            <div className='col-6 ingredient'>
                                <div>
                                    <h2>Ingredients</h2>
                                    <ul>
                                        {mealDetails.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}: {mealDetails.measures[index]}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='instruction'>
                            <h2>Instructions</h2>
                            <p>{mealDetails.instructions}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Ingredients;
