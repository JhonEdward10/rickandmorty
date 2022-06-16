import React from 'react'

const LocationInfo = ({location}) => {

  return (
      <article>
          <h2 className='text-center'>{location?.name}</h2>
          <ul className='description'>
              <li><span><b>Type: </b></span>{location?.type}</li>
              <li><span><b>Dimension: </b></span>{location?.dimension}</li>
              <li><span><b>Population: </b></span>{location?.residents.length}</li>
          </ul>
      </article>
  )
}

export default LocationInfo