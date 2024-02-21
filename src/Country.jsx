import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Country = () => {

  const [country, setCountry] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      console.log(response);
      setCountry(response.data.meals);
    }
    fetchdata();
  }, [])

  console.log("hhh", country);

  return (
    <>

      <div style={{ margin: '150px' }}>
        <h1>Country</h1>
        <div className='wrapitems'>
          {country.map((area) => (
            <div className='country'>
              <div>
                <Link to={`/countryitem/${area.strArea}`} style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                  <div>
                    {area.strArea}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Country