import React, { useState } from 'react'
import { carData } from '../mockData'
import searchIcon from '../assets/search-icon.png'
import { handleSearch } from '../helper'

const SearchBar = ({ setAllCar }) => {

  const [car, setCar] = useState('')

  return (
    <div className='w-2/3 mx-56 rounded-xl py-4 px-3 shadow-md relative'>
      <input
        className='w-80 pl-5 pr-4 py-1 rounded-xl outline-none'
        type='text'
        placeholder='Search...'
        value={car}
        onChange={(e) => setCar(e.target.value)}
      />
      <button
        className='absolute left-[18.5rem] top-1/2 transform -translate-y-1/2'
        onClick={() => {
          let data = handleSearch(car, carData)
          setAllCar(data)
        }}
      >
        <span>
          <img src={searchIcon}
            alt='search-icon' />
        </span>
      </button>
    </div>
  )
}

export default SearchBar;