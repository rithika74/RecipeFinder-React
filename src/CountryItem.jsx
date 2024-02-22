import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const CountryItem = () => {

    const [items, setItems] = useState([])
    const { area } = useParams()

    useEffect(() => {
        let fetchdata = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            console.log(response.data);
            setItems(response.data.meals);
        }
        fetchdata();
    }, [])
    console.log("fggfh", items);

    return (
        <>

            <div style={{ marginTop: '150px', textAlign: 'center' }}>
                <h1>{area}</h1>
                <div className='wrapitems' >
                    {items.map((meals1) => (
                        <div className='menu' key={meals1.idMeal}>
                            <div className='menuitems'>
                                <img src={meals1.strMealThumb} alt="" />
                                <h3>{meals1.strMeal}</h3>
                                <Link to={`/ingredients/${meals1.idMeal}`} style={{ textDecoration: 'none' }}>
                                    <button>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>



        </>
    )
}

export default CountryItem
