import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from './Menu'

const Allitems = () => {

  const [items, setItems] = useState([])
  const [datas, setDatas] = useState([])
  const [result, setResult] = useState('')
  const [clicked, setClicked] = useState(false)
  const { mealName } = useParams()

  const handleChange = (event) => {
    setResult(event.target.value);
  }

  const handleSearch = async () => {

    if (result.trim() !== '') {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`)
      console.log(response);
      setDatas(response.data.meals)
      setClicked(true);
    }
    else {
      setDatas([])
    }
  }
  console.log(datas);


  return (
    <>

      <div>
        <div className='intro'>
          <div className='mx-auto'>
            <input type="text" name="" id="" placeholder='Search' value={result} onChange={handleChange} />
            <button onClick={handleSearch}>Search</button>
          </div>
          {clicked && datas && datas.length > 0 ? (
            <div className='wrapitems mt-5 '>
              {datas.map((item) => (
                <div className='menu' key={item.idMeal}>
                  <div className='menuitems'>
                    <img src={item.strMealThumb} alt="" />
                    <h3>{item.strMeal}</h3>
                    <Link to={`/ingredients/${item.idMeal}`} style={{ textDecoration: 'none' }}>
                      <button>View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) :
            clicked ? (<div style={{ textAlign: 'center', marginTop: '50px' }}>No Meal found</div>
            ) : (
              <Menu />
            )
          }
        </div>
      </div>


    </>
  )
}

export default Allitems