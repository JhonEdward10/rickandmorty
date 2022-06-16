import React from 'react'
import useCharacter from '../hooks/useCharacter'

const CardCharacter = ({resident}) => {

  const character = useCharacter(resident)

  const circleChanged = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray'
  }

  return (
    <article className='Card-Character'>
      <div>
      <img src={character?.image} alt="" />
      <h2><b>Name: </b>{character?.name}</h2>
      <p>
        <b>Status: </b>{character?.status}
        <span className="Circle grey red green" style={{ background: circleChanged[character?.status] }}
        ></span>
      </p>
      <p><b>Origin: </b>{character?.origin?.name}</p>
      <p><b>Episodes Where appear: </b>{character?.episode.length}</p>
      </div>
    </article>
  )
}

export default CardCharacter