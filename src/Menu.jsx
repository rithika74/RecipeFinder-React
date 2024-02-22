import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Menu = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let fetchdata = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(response);
            setCategories(response.data.categories)
        }
        fetchdata()
    }, [])
    console.log(categories);
    return (
        <>

            <div className='mt-5'>
                <h1>Categories</h1>
                <div className='wrapitems'>
                    {categories.map((category) => (
                        <div className='menu' key={category.idCategory}>
                            <Link to={`/menuitems/${category.strCategory}`} style={{ textDecoration: 'none' }}>
                                <img src={category.strCategoryThumb} alt="" />
                                <h3>{category.strCategory}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Menu
