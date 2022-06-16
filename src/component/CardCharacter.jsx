import React from 'react'
import useCharacter from '../hooks/useCharacter'

const CardCharacter = ({resident}) => {

  const character = useCharacter(resident)

  return (
    <article className='Card-Character'>
      <div>
      <img src={character?.image} alt="" />
      <h2><b>Name: </b>{character?.name}</h2>
      <p><b>Status: </b>{character?.status}</p>
      <p><b>Origin: </b>{character?.origin?.name}</p>
      <p><b>Episodes Where appear: </b>{character?.episode.length}</p>
      </div>
    </article>
  )
}

export default CardCharacter