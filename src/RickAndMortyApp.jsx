import React from 'react'
import LocationInfo from './component/LocationInfo'
import CardCharacter from './component/CardCharacter'
import useLocation from './hooks/useLocation'
import InputSearch from './component/InputSearch'
import { useState } from 'react'

const RickAndMortyApp = () => {

  const [searchLocation, setSearchLocation] = useState()

  const location = useLocation(searchLocation)

  return (
    <div>
      <div className='Banner'></div>
      <div className='Presentation'></div>
      <h1>Rick and Morty Wiki</h1>
      <InputSearch  setSearchLocation={setSearchLocation}/>
      <LocationInfo location={location} />
      <div className='Card-Container'>
        {location?.residents.map(resident => (
          <CardCharacter 
          resident={resident}
          key={resident} />
        ))}

      </div>
    </div>
  )
}

export default RickAndMortyApp