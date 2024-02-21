
import React from 'react'
import Menu from './Menu'
import SearchItems from './SearchItems'
import { Link } from 'react-router-dom'

const Intro = () => {

  return (
    <>

      <div className='intro'>
        <div className='mx-auto'>
          <Link to='/allitems'>
            <button>Search Your Meals</button>
          </Link>
        </div>
        <Menu />
      </div>



    </>
  )
}

export default Intro
