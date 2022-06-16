import React from 'react'
import { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value);
    }

  return (
    <form onSubmit={searchLocation} className='Search'>
        <input type="text" placeholder='Place Id From 1-126'/>
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
  )
}

export default InputSearch